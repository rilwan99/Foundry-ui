import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // exec- Spawns a shell then executes the command within that shell, 
  // buffering any generated output. 
  // The command string passed to the exec function is 
  // processed directly by the shell 
  try {
    if (req.method === "POST") {
      const body = JSON.parse(req.body);
      let command = ''

      // Destructure request body and create variables for execution on cli
      let address = body.address
      let functionName = body.functionName
      let rpcUrl = body.rpcUrl
      let functionArguments = body.functionArguments
      let blockNumber = body.blockNumber

      let modified = false
      command = `cd../ & cast call ${address}`
      // Modify function name to include function arguments
      if (functionArguments) {
        const argumentArray = functionArguments.split(" ")
        const argumentType = argumentArray[0]
        const argumentValue = argumentArray[1]
        const argumentIndex = functionName.indexOf("()")
        const startString = functionName.slice(0, argumentIndex)
        const endString = functionName.slice(argumentIndex+2)
        command += ` "${startString}(${argumentType})${endString}" ${argumentValue}`
        modified = true
      }
      // If no arguments provided, only concat function name
      if (!modified) {
        command += ` "${functionName}"`
      }
      command += ` --rpc-url ${rpcUrl}`
      if (blockNumber !== 0) {
        command += ` --block ${blockNumber}`
      }
      console.log(command)

      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.log("Command error: ", error)
          return res.status(500).json({ error });
        }
        return res.json({ stdout, stderr });
      });
    }
  }
  catch (err) {
    console.log("Error in handing API request", err)
  }
}
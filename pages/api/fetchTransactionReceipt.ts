import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const body = JSON.parse(req.body);
            let txHash = body.txHash
            let rpcUrl = body.rpcUrl

            rpcUrl = "https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf"

            const command = `cd.. & cast receipt ${txHash} logs --rpc-url ${rpcUrl}`
            console.log(command)
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.log("Error in executing command: ", error)
                    return error
                }
                return res.json({ stdout });
            });
        }
    }
    catch (err) {
        console.log("Error in handing API request", err)
    }
}
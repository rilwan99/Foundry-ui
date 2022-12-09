import { NextApiRequest, NextApiResponse } from "next";
import { exec } from "child_process";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === "POST") {
            const body = JSON.parse(req.body);
            let rpcUrl = body.rpcUrl

            // address = "0x6B175474E89094C44Da98b954EedeAC495271d0F"
            // blockNumber = "1000"
            rpcUrl = "https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf"

            const command = `cd.. & cast block-number --rpc-url ${rpcUrl}`
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
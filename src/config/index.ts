import 'dotenv/config'

import * as dotenv from "dotenv";
dotenv.config();

//server config
export const PORT = process.env.PORT;

//api config
export const reservoir_api_key: string = process.env.API_KEY ?? "false-key";

export const goerliBaseUrl = "https://api-goerli.reservoir.tools/";

export const polygonBaseUrl = "";

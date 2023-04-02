//the express server app

import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";

import { collectionRoute } from "./routes/collectionRoute";

const app: Express = express();

app.use(cors<Request>());
app.use(express.json());

//logging
app.use(morgan(':method :url :status :response-time ms'));

app.use('/api/v1/collections', collectionRoute);

export default app;
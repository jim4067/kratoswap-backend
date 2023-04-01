import { Router } from "express";

import { getCollection, getUserCollections } from "../controllers/collectionController";

export const collectionRoute = Router();

import { Request, Response } from "express";

//sending the res for the specified collections
collectionRoute.get('/', getCollection);

//sending the user collections
collectionRoute.get('/user', getUserCollections);

collectionRoute.get('/test', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

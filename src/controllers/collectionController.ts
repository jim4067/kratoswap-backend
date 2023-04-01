import { Request, Response } from "express";
import { fetchCollectionData, fetchUsersCollections } from "../services";

export const getCollection = async (req: Request, res: Response) => {
    let { query: { collectionAddress, network } } = req;

    try {
        let resp = await fetchCollectionData(collectionAddress as string, network as string);
        res.json(resp)
    } catch (err) {
        console.error("error fetching specified collection", err);
    }
} //http://localhost:3040/api/v1/collections?collectionAddress=0xf5de760f2e916647fd766B4AD9E85ff943cE3A2b

// export const getUserCollections
export const getUserCollections = async (req: Request, res: Response) => {
    let { query: { userAddress, network } } = req;

    try {
        let resp = await fetchUsersCollections(userAddress as string, network as string);
        console.log('the resp', resp);
        res.json(resp)
    } catch (err) {
        console.error("error fetching specified collection", err);
    }
} //http://localhost:3040/api/v1/collections/user?userAddress=0xdAa00502352c62F6c82208aDdB9Bdf2efD687032
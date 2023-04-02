import { goerliBaseUrl } from "../config"; // ! hardcoded at the moment
import { reservoir_api_key } from "../config";

// search for a particular collection with id - address 
export async function fetchCollectionData(collectionAddress: string, network?: string) {
    const options = { method: 'GET', headers: { accept: '*/*', 'x-api-key': reservoir_api_key } };

    // if queryParameter collectionAddress empty
    let url: string;
    if (collectionAddress == null) {
        url = `${goerliBaseUrl}/collections/v5`;
        console.log('the api being called', url);
    } else {
        url = `${network ?? goerliBaseUrl}/collections/v5/?id=${collectionAddress}&includeTopBid=false&normalizeRoyalties=false&useNonFlaggedFloorAsk=false&sortBy=allTimeVolume&limit=20`
    }

    const res = await fetch(url, options);
    let json = await res.json();
    return json;
}

//fetch user's collection
export async function fetchUsersCollections(userAddress: string, network?: string) {
    const options = { method: 'GET', headers: { accept: '*/*', 'x-api-key': reservoir_api_key } };
    const url = `${network ?? goerliBaseUrl}users/${userAddress}/collections/v3`;
    const res = await fetch(url, options);
    let json = await res.json();
    return json;
}
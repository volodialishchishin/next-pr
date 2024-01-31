/* Instruments */
import { createAppAsyncThunk } from "@/lib/redux/createAppAsyncThunk";
import { saveResult, fetchResults } from "./fetchIdentityCount";



export const saveResultThunk = createAppAsyncThunk(
    "counter/fetchIdentityCount",
    async (data:{userId:string, value:number}) => {
        const response = await saveResult(data);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    },
);
export const getResults = createAppAsyncThunk(
    "counter/getResults",
    async () => {
        const response = await fetchResults();
        return response.data;
    },
);

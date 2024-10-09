import { useMutation } from "@tanstack/react-query"
import axios from 'axios'

export const useSaveData = () => {
    return useMutation({
        mutationFn: async ({ email, password }:{ email: string, password: string }) => await saveUserData(email, password),
    })
}

async function saveUserData( email: string, password: string ) {
    try {
        const res = await axios.post(`/api/save-entry`, { email, password });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


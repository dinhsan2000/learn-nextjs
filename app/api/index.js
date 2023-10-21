import axios from "axios";
import {setUserData} from "@/app/utils";
import {useRouter} from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_LARAVEL_API_URL;

const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer'
};

export const postLogin = async (data) => {
    const url = `${API_URL}/auth/login`

    const response = await axios.post(url, data)

    try {
        // Set User and Token To LocalStorage
        setUserData(response.data.data)

        return response
    } catch (error) {
        throw new Error(error)
    }
}

export const postRegister = async (data) => {
    const url = `${API_URL}/auth/register`

    const response = await axios.post(url, data)

    try {
        // Set User and Token To LocalStorage
        setUserData(response.data.data)

        return response
    } catch (error) {
        throw new Error(error)
    }
}
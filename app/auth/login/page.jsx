'use client';

import Label from "@/app/components/Label";
import TextInput from "@/app/components/TextInput";
import Button from "@/app/components/Button";
import {useState} from "react";
import {postLogin} from "@/app/api";
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Page() {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
        remember: ""
    });

    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await postLogin(formData)
            router.push('/dashboards')
        } catch (error) {
            throw new Error(error)
        }
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({...formData, [name]: value});
    };

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div
                className="w-full p-6 m-auto bg-white rounded shadow lg:max-w-xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Sign in to your account
                    </h1>
                </div>
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <Label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            value="You Email"
                            htmlFor="email1"
                        />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            required={true}
                            value={formData.email || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <Label
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            value="Password"
                            htmlFor="password"
                        />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            placeholder="**********"
                            required={true}
                            value={formData.password || ""}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <TextInput
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    required={false}
                                    name="remember"
                                    value={formData.remember}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <Label
                                    htmlFor="remember"
                                    value="Remember me"
                                />
                            </div>
                        </div>
                        <a href="#"
                           className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                            password?</a>
                    </div>

                    <Button
                        type="submit"
                        color="blue"
                        size={22}
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Sign In
                    </Button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link href="register"
                                                         className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                        up</Link>
                    </p>

                </form>
            </div>
        </div>
    )
}
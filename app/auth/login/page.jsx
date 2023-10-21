import Form from "@/app/components/Form";
import Label from "@/app/components/Label";
import TextInput from "@/app/components/TextInput";
import Button from "@/app/components/Button";

export default function Page() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div
                className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                        Sign in to your account
                    </h1>
                </div>
                <Form className="space-y-4 md:space-y-6" action="#">
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
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <TextInput
                                    id="remember"
                                    aria-describedby="remember"
                                    type="checkbox"
                                    required=""/>
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
                        Don’t have an account yet? <a href="#"
                                                      className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign
                        up</a>
                    </p>

                </Form>
            </div>
        </div>
    )
}
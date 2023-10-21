import {Inter} from "next/font/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Sign Up',
    description: 'Sign In',
}

export default function LoginLayout({children}) {
    return (
        <html>
        <body className={inter.className}>
        <section className="bg-gray-50 dark:bg-gray-900">{children}</section>
        </body>
        </html>
    )
}
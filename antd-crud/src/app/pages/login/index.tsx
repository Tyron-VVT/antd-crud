import { NextPage } from "next";
import dynamic from "next/dynamic";

const LoginComponent = dynamic(
    () => import('@/app/pages-assets/login')
)

const LoginPage: NextPage = () => {
    return <LoginComponent />
}

export default LoginPage
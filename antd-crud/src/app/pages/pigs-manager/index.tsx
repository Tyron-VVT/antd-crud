import { NextPage } from "next";
import dynamic from "next/dynamic";

const PigsManagerComponent = dynamic(
    () => import('@/app/pages-assets/pigs-manager')
)

const PigsManagerPage: NextPage = () => {
    return <PigsManagerComponent />
}

export default PigsManagerPage
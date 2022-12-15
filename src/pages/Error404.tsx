import { FC } from "react";
import Layout from "../components/Layout";


const Error404: FC = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center h-screen bg-slate-700">
                <h1 className="text-4xl">Error404</h1>
            </div>
        </Layout>
    );
};

export default Error404;

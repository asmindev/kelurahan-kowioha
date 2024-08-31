import OrgChart from "@/components/ui/org";
import Layout from "@/layout";
import React from "react";

export default function Page() {
    return (
        <Layout>
            <div className="w-10/12 mx-auto h-[30rem]">
                <OrgChart />
            </div>
        </Layout>
    );
}

import {
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import Layout from "@/layout";
import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartConfig = {
    laki_laki: {
        label: "Laki-laki",
        color: "#2563eb",
    },
    perempuan: {
        label: "Perempuan",
        color: "#60a5fa",
    },
};

const separateByRwAndRt = (data) => {
    console.log(JSON.stringify(data[0]));
};
function calculateGenderStatistics(data) {
    const result = [];

    data.forEach((rwObj) => {
        rwObj.rt.forEach((rtObj) => {
            let totalMen = 0;
            let totalWomen = 0;

            rtObj.citizens.forEach((citizen) => {
                totalMen += citizen.total_men;
                totalWomen += citizen.total_women;
            });

            result.push({
                key: `rw ${rwObj.rw}/rt ${rtObj.rt}`,
                laki_laki: totalMen,
                perempuan: totalWomen,
            });
        });
    });

    // Sort hasil berdasarkan key
    result.sort((a, b) => {
        const [rwA, rtA] = a.key.match(/\d+/g).map(Number); // Ekstrak rw dan rt dari key
        const [rwB, rtB] = b.key.match(/\d+/g).map(Number);

        if (rwA === rwB) {
            return rtA - rtB; // Jika RW sama, urutkan berdasarkan RT
        }
        return rwA - rwB; // Urutkan berdasarkan RW
    });
    return result;
}

export default function Page({ rws }) {
    console.log(rws);
    return (
        <Layout>
            <section className="w-full md:w-10/12 lg:w-8/12 mx-auto px-4 md:px-0">
                <h1 className="text-3xl font-bold">Data</h1>
                <div className="mt-4 mb-3">
                    <div className="w-full bg-gray-100 px-3 py-2 rounded">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {rws.map((rw) => (
                                <div key={rw.id} className="flex flex-col">
                                    <div className="flex items-end justify-between bg-white px-2 py-0.5 rounded-sm">
                                        <h2 className="text-lg font-semibold">
                                            RW {rw.rw}
                                        </h2>
                                        <h3 className="text-sm text-gray-400 font-light">
                                            {rw.total_citizens} KK
                                        </h3>
                                    </div>
                                    <div className="flex flex-col mt-2 px-2">
                                        {rw.rt.map((rt) => (
                                            <div
                                                key={rt.id}
                                                className="flex items-center gap-x-2 text-xs md:text-sm text-gray-700"
                                            >
                                                <span>RT {rt.rt}</span>
                                                <span className="">
                                                    {rt.citizens.length} Kepala
                                                    Keluarga
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <ChartContainer
                        config={chartConfig}
                        className="min-h-[200px] w-full"
                    >
                        <BarChart
                            accessibilityLayer
                            data={calculateGenderStatistics(rws)}
                        >
                            <CartesianGrid vertical={true} />
                            <XAxis
                                dataKey="key"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.toUpperCase()}
                            />
                            <ChartTooltip
                                labelFormatter={(value) => value.toUpperCase()}
                                content={<ChartTooltipContent />}
                            />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar
                                fill="var(--color-laki_laki)"
                                dataKey="laki_laki"
                                radius={4}
                            />
                            <Bar
                                dataKey="perempuan"
                                fill="var(--color-perempuan)"
                                radius={4}
                            />
                        </BarChart>
                    </ChartContainer>
                </div>
            </section>
        </Layout>
    );
}

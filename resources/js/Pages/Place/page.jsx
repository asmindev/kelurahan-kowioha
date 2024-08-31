import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/layout";
import Maps from "./maps";

const TABS = ["all", "situs", "wisata"];

const Card = ({ place }) => {
    return (
        <div className="w-full py-4 flex gap-x-4">
            <div className="w-1/4">
                <img
                    className="w-full object-cover"
                    src={place.image}
                    alt={place.name}
                />
            </div>
            <div className="flex-1">
                <h1 className="text-base line-clamp-1">{place.name}</h1>
                <p className="text-sm line-clamp-3 text-gray-600 mt-1 text-justify">
                    {place.description}
                </p>
            </div>
        </div>
    );
};

export default function Place({ places }) {
    const wisata = places.filter((place) => place.type === "wisata");
    const situs = places.filter((place) => place.type === "sejarah");
    let currentTab = TABS[0];
    const url = new URLSearchParams(window.location.search);
    const tab = url.get("tab");
    if (TABS.includes(tab)) {
        currentTab = tab;
    }
    return (
        <Layout>
            <section className="w-full md:w-10/12 mx-auto px-4 md:px-0">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="w-8/12 h-full">
                        <Maps />
                    </div>
                    <div className="flex-1 px-4">
                        <Tabs
                            defaultValue={currentTab}
                            className="w-full mt-4"
                            onValueChange={(value) =>
                                // replace state
                                history.replaceState(
                                    null,
                                    null,
                                    `?tab=${value}`
                                )
                            }
                        >
                            <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                                <TabsTrigger value="all">Semua</TabsTrigger>
                                <TabsTrigger value="situs">
                                    Situs Sejarah
                                </TabsTrigger>
                                <TabsTrigger value="wisata">Wisata</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all">
                                <div className="relative w-full py-4 rounded-xl after:content-[''] after:w-full after:h-32 after:bg-gradient-to-t after:from-white after:via-white after:to-transparent after:absolute after:bottom-0">
                                    <h1 className="text-xl font-semibold">
                                        Semua
                                    </h1>
                                    <div className="space-y-2 divide-y max-h-[60vh] overflow-auto">
                                        {places.map((place) => (
                                            <Card
                                                key={place.id}
                                                place={place}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="situs">
                                <div className="relative w-full py-4 rounded-xl after:content-[''] after:w-full after:h-32 after:bg-gradient-to-t after:from-white after:via-white after:to-transparent after:absolute after:bottom-0">
                                    <h1 className="text-xl font-semibold">
                                        Situs Sejarah
                                    </h1>
                                    <div className="space-y-2 divide-y max-h-[60vh] overflow-auto">
                                        {situs.map((place) => (
                                            <Card
                                                key={place.id}
                                                place={place}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value="wisata">
                                <div className="relative w-full py-4 rounded-xl after:content-[''] after:w-full after:h-32 after:bg-gradient-to-t after:from-white after:via-white after:to-transparent after:absolute after:bottom-0">
                                    <h1 className="text-xl font-semibold">
                                        Destinasi Wisata
                                    </h1>
                                    <div className="space-y-2 divide-y max-h-[60vh] overflow-auto">
                                        {wisata.map((place) => (
                                            <Card
                                                key={place.id}
                                                place={place}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

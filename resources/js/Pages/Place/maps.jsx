import React, { useState } from "react";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LAYER = [
    {
        name: "satelite",
        layer: "http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}",
    },
    {
        name: "street",
        layer: "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
    },
    {
        name: "hybrid",
        layer: "http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}",
    },
    {
        name: "terrain",
        layer: "http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}",
    },
];

const LocationMarker = () => {
    const [position, setPosition] = useState(null);

    const map = useMapEvents({
        click(e) {
            console.log(e.latlng);
            console.log("click");
            setPosition(e.latlng);
        },
    });

    return position === null ? null : (
        <Marker
            position={position}
            eventHandlers={{
                click: (e) => {
                    console.log(e.latlng);
                },
            }}
        >
            {position && (
                <Popup>
                    <button type="button">Add</button>
                </Popup>
            )}
        </Marker>
    );
};

const Layer = ({ layer, setLayer }) => {
    return (
        <div className="absolute top-2 right-2 z-[99999]">
            <div className="flex flex-col space-y-2">
                {LAYER.map((item) => (
                    <button
                        key={item.name}
                        className={`${
                            layer.layer === item.layer
                                ? "bg-black text-white"
                                : "bg-gray-100"
                        } px-3 py-1 capitalize text-xs font-medium`}
                        onClick={() => setLayer(item)}
                    >
                        {item.name}
                    </button>
                ))}
            </div>
        </div>
    );
};
export default function Maps() {
    // -4.08285/121.68303
    const root = [-4.08285, 121.68303];
    const [layer, setLayer] = useState(LAYER[1]);
    return (
        <div className="w-full h-full border my-4 relative">
            <Layer layer={layer} setLayer={setLayer} />
            <MapContainer
                className="w-full h-full min-h-96 overflow-hidden"
                center={root}
                zoom={13}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={layer.layer}
                    maxZoom={20}
                    subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />
                <LocationMarker />
            </MapContainer>
        </div>
    );
}

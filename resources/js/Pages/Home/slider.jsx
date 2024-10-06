import React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const images = [
    "https://res.cloudinary.com/dwcdtvmyy/image/upload/v1725835338/WhatsApp_Image_2024-09-09_at_06.40.08_ko2jyd.jpg",
    "https://res.cloudinary.com/dwcdtvmyy/image/upload/v1725835414/WhatsApp_Image_2024-09-09_at_06.40.06_xungyk.jpg",
    "https://res.cloudinary.com/dwcdtvmyy/image/upload/v1725835416/WhatsApp_Image_2024-09-09_at_06.40.07_yiuwe0.jpg",
];
const Content = ({ image }) => {
    return (
        <img
            className="w-full h-full object-cover"
            src={`/storage/${image.image}`}
        />
    );
};
export default function Slider({ data }) {
    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent>
                {data.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="w-full md:w-11/12 h-[30rem] mx-auto">
                            <Content image={image} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    );
}

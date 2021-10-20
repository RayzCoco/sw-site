import { useState } from "react";
import { useParams } from "react-router";
import GalleryGrid from "../../components/GalleryGrid";

const StreetGallery = () => {
    const { id } = useParams()
    const [ images, useImages ] = useState([
        { id: 1, imageURL: [
            "https://via.placeholder.com/750x919",
            "https://via.placeholder.com/750x918",
            "https://via.placeholder.com/750x917",
            "https://via.placeholder.com/750x916",
            "https://via.placeholder.com/750x915",
            "https://via.placeholder.com/750x914",
            "https://via.placeholder.com/750x913",
            "https://via.placeholder.com/750x912",
            "https://via.placeholder.com/750x911",
            "https://via.placeholder.com/750x910"
        ]},
        { id: 2, imageURL: [
            "https://via.placeholder.com/750x919",
            "https://via.placeholder.com/750x918",
            "https://via.placeholder.com/750x917",
            "https://via.placeholder.com/750x916",
            "https://via.placeholder.com/750x915",
            "https://via.placeholder.com/750x914",
            "https://via.placeholder.com/750x913",
            "https://via.placeholder.com/750x912",
            "https://via.placeholder.com/750x911",
            "https://via.placeholder.com/750x910"
        ]}
    ])

    const filteredImages = images.filter((image) => {
        return image.id == id
    })

    return (
        <div>
            <div className="flex justify-center items-center">
                <div className="px-6 py-5">
                    <h2 className="font-bebas text-3xl md:text-5xl mb-6">Street Gallery</h2>
                </div>
            </div>
            <GalleryGrid images={filteredImages} />
        </div>
    );
}
 
export default StreetGallery;
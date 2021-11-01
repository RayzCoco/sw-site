import { useState } from "react";
import { useParams } from "react-router";
import GalleryGrid from "../../components/GalleryGrid";
import useStreet from "../../img/useStreet";

const StreetGallery = () => {
    const { id } = useParams()
    const [ images, useImages ] = useState(useStreet)

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
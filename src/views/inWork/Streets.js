import { useEffect, useState } from "react";
import BottomMotto from "../../components/BottomMotto";
import ImageGrid from "../../components/ImageGrid";
import TopMotto from "../../components/TopMotto";
import street from "../../img/img";

const Streets = () => {
    const name = 'street'
    const [images, useImages] = useState([
        { id: 1, path: street.img1, url: '' },
        { id: 2, path: street.img2, url: '' },
        { id: 3, path: street.img3, url: '' },
        { id: 4, path: street.img4, url: '' },
        { id: 5, path: street.img5, url: '' },
        { id: 6, path: street.img6, url: '' },
        { id: 7, path: street.img7, url: '' },
        { id: 8, path: street.img8, url: '' },
        { id: 9, path: street.img9, url: '' }
    ])

    return (
        <div className="container mx-auto">
            <TopMotto name={name.toUpperCase()} />
            <div className="px-6 py-16">
                <ImageGrid images={images} name={name} />
            </div>
            <BottomMotto />
        </div>
    );
}
 
export default Streets;
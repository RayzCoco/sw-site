import { useState } from "react";
import BottomMotto from "../../components/BottomMotto";
import ImageGrid from "../../components/ImageGrid";
import TopMotto from "../../components/TopMotto";

const Portraits = () => {
    const name = 'portraits'
    const [images, useImages] = useState([
        { id: 1, path: '', url: '' },
        { id: 2, path: '', url: '' },
        { id: 3, path: '', url: '' },
        { id: 4, path: '', url: '' },
        { id: 5, path: '', url: '' },
        { id: 6, path: '', url: '' },
        { id: 7, path: '', url: '' },
        { id: 8, path: '', url: '' },
        { id: 9, path: '', url: '' }
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
 
export default Portraits;
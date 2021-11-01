import { useState } from "react";
import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";
import street from "../img/img";
import LazyImage from "../lazy-image";

const Work = () => {
    const [category] = useState([
        { id: 1, title: 'PORTRAITS', src: street.img1, path: '/portraits' },
        { id: 2, title: 'STREET', src: street.img2, path: '/street' },
        { id: 3, title: 'INTERIORS', src: street.img3, path: '/interiors' },
        { id: 4, title: 'PRODUCTS', src: street.img4, path: '/products' }
    ])

    return (
        <div className="container mx-auto">
            <LazyLoad classNamePrefix="loaded">
                <div className="px-6 py-2 md:py-12">
                    <div className="grid grid-cols-1 gap-20 md:grid-cols-4 md:gap-7">
                        { category.map((cat) => (
                            <Link key={cat.id} className="image-link relative ratio-3-4 h-0" to={cat.path}>
                                <div className="image ratio-3-4 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 bottom-0 right-0">
                                        <LazyImage src={cat.src} alt="" />
                                    </div>
                                </div>
                                <div className="image-overlay absolute top-0 left-0 w-full h-full bg-white"></div>
                                <div className="image-text absolute top-0 left-0 bottom-0 right-0 flex flex-col content-center justify-center text-center p-6">
                                    <h3 className="text-2xl font-bebas">{cat.title}</h3>
                                </div>
                            </Link>
                        )) }
                    </div>
                </div>
            </LazyLoad>
        </div>
    );
}
 
export default Work;
import { Link } from "react-router-dom";
import LazyImage from "../lazy-image";

const ImageGrid = ({ images, name }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            { images.map((image) => (
                <Link key={image.id} className="relative ratio-3-4 h-0 overflow-hidden" to={`/${name}/gallery/${image.id}`}>
                    <div className="ratio-3-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 bottom-0 right-0">
                            <LazyImage className="object-contain" src={image.path} height={'600px'} alt="" />
                        </div>
                    </div>
                </Link>
            )) }
        </div>
    );
}
 
export default ImageGrid;
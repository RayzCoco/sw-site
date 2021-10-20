import LazyLoad from "react-lazyload";
import { Link } from "react-router-dom";

const ImageGrid = ({ images, name }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            { images.map((image) => (
                <LazyLoad classNamePrefix="image" height={'100%'} offset={600} key={image.id}>
                    <Link to={`/${name}/gallery/${image.id}`}>
                        <img src="https://via.placeholder.com/750x919" alt="" />
                    </Link>
                </LazyLoad>
            )) }
        </div>
    );
}
 
export default ImageGrid;
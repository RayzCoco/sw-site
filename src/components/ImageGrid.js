import LazyLoad from "react-lazyload";

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
            <LazyLoad offset={200}>
                <img src="https://via.placeholder.com/750x919" alt="" />
            </LazyLoad>
        </div>
    );
}
 
export default ImageGrid;
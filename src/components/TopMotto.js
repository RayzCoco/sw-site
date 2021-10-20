import LazyLoad from "react-lazyload";

const TopMotto = ({ name }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="px-6 py-5">
                    <LazyLoad classNamePrefix="loaded">
                        <h2 className="font-bebas text-3xl md:text-5xl mb-6">{name}</h2>
                    </LazyLoad>
                </div>
            </div>
            <div className="px-6 md:py-24 flex flex-col md:flex-row md:items-center">
                <LazyLoad classNamePrefix="image" height={750} className="mb-6 md:mb-0 md:order-2">
                    <img src="https://via.placeholder.com/750x750" alt="" />
                </LazyLoad>
                <div className="md:mr-16 md:order-1">
                    <LazyLoad classNamePrefix="loaded">
                        <p className="mb-6 text-lg md:text-3xl font-bebas">MAKE IT STAND OUT.</p>
                        <p className="mb-6 text-2xl md:text-4xl font-bebas md:leading-relaxed">WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.</p>
                        <div className="md:text-xl">MAKE IT</div>
                    </LazyLoad>
                </div>
            </div>
        </>
    );
}
 
export default TopMotto;
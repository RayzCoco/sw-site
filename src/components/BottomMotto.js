import LazyLoad from "react-lazyload";

const BottomMotto = () => {
    return (
        <div className="relative px-6 md:pt-24 md:flex">
            <div className="relative z-0 md:w-2/4">
                <div className="md:w-140">
                    <LazyLoad classNamePrefix="image">
                        <img className="w-11/12 md:w-full" src="https://via.placeholder.com/1000x667" alt="" />
                    </LazyLoad>
                </div>
            </div>
            <div className="relative z-10 float-right -mt-20 md:mt-12 w-10/12 md:w-2/4">
                <LazyLoad classNamePrefix="loaded">
                    <div className="bg-gray-200 p-6 md:p-14">
                        <h3 className="text-3xl md:text-4xl font-bebas mb-4 md:mb-8">MAKE IT STAND OUT</h3>
                        <p className="text-lg md:text-xl md:leading-relaxed">It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something more. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.</p>
                        <div className="md:text-xl">MAKE IT</div>
                    </div>
                </LazyLoad>
            </div>
        </div>
    );
}
 
export default BottomMotto;
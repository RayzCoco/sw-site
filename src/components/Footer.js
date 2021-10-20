import LazyLoad from "react-lazyload";

const Footer = () => {
    return (
        <footer className="container mx-auto py-11 md:py-20 mt-auto">
            <LazyLoad classNamePrefix="loaded">
                <div className="flex flex-col text-center">
                    <div className="mb-2">@chusziwei</div>
                    <div>made with blood sweat & tears</div>
                </div>
            </LazyLoad>
        </footer>
    );
}
 
export default Footer;
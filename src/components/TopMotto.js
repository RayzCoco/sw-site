const TopMotto = ({ name }) => {
    return (
        <>
            <div className="flex justify-center items-center">
                <div className="px-6 py-5">
                    <h2 className="font-bebas text-3xl md:text-5xl mb-6">{name}</h2>
                </div>
            </div>
            <div className="px-6 md:py-24 flex flex-col md:flex-row md:items-center">
                <img className="intro-img mb-6 md:order-2 md:w-2/4" src="https://via.placeholder.com/750x750" alt="" />
                <div className="md:mr-16 md:order-1">
                    <p className="mb-6 text-lg md:text-3xl font-bebas">MAKE IT STAND OUT.</p>
                    <p className="mb-6 text-2xl md:text-4xl font-bebas md:leading-relaxed">WHATEVER IT IS, THE WAY YOU TELL YOUR STORY ONLINE CAN MAKE ALL THE DIFFERENCE.</p>
                    <div className="md:text-xl">MAKE IT</div>
                </div>
            </div>
        </>
    );
}
 
export default TopMotto;
import { BsInstagram } from 'react-icons/bs'

const Contact = () => {
    return (
        <>
            <div className="container mx-auto md:max-w-2xl">
                <div className="flex flex-col items-center justify-center text-center px-6 py-5 mb-6 md:py-8">
                    <h2 className="text-3xl md:text-5xl font-bebas mb-6">Contact</h2>
                    <p className="mb-6 md:text-xl">Brought up in the streets of Kuala Lumpur with the love of seeing life as it is and capturing it through the lens. Currently freelancing to give startups and passion projects a foothold in their respective industries.</p>
                    <div className="mb-6">.</div>
                    <h3 className="font-bold mb-3 md:text-xl">EMAIL</h3>
                    <div className="mb-6 md:text-xl">chusziwei@gmail.com</div>
                    <div className="mb-6">.</div>
                    <h3 className="font-bold mb-3 md:text-xl">PHONE</h3>
                    <div className="mb-6 md:text-xl">+60-183860938</div>
                    <div className="my-3">
                        <a rel="noreferrer" href="https://www.instagram.com/chusziwei/" target="_blank">
                            <BsInstagram className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="relative">
                    <img className="w-full h-full object-cover md:max-h-96" src="https://via.placeholder.com/1000x668" alt="" />
                    <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
                        <h3 className="p-4 text-3xl md:text-5xl font-bebas">OPEN YOUR EYES <a rel="noreferrer" href="https://www.instagram.com/chusziwei/" target="_blank"><span className="border-b span-text">TO THE PRESENT</span></a></h3>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Contact;
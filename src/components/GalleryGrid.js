import { useEffect, useState } from "react"
import { SRLWrapper } from "simple-react-lightbox"

const GalleryGrid = ({ images }) => {
    const [galleries, setGalleries] = useState(images)
    const [currentImage, setCurrentImage] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const options = {
        settings: {
            slideAnimationType: 'slide'
        },
        buttons: {
            backgroundColor: 'transparent',
            iconColor: 'rgba(255, 255, 255, 1)',
            size: '45px',
            showAutoplayButton: false,
            showDownloadButton: false,
            showFullscreenButton: false,
            showThumbnailsButton: false,
        },
        caption: {
            showCaption: false
        },
        progressBar: {
            showProgressBar: false
        }
    }

    return (
        <div className="container mx-auto px-6 py-16">
            <SRLWrapper options={options}>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    { galleries && galleries.map((gallery) => (
                        gallery['imageURL'].map((url, index) => (
                            <div key={index} className="cursor-pointer">
                                <img src={url} alt="" />
                            </div>
                        ))
                    ))}
                </div>
            </SRLWrapper>
        </div>
    );
}
 
export default GalleryGrid;
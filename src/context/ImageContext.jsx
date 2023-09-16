import { createContext, useEffect, useState } from "react";

const ImageContext = createContext({});

export const ImageProvider = ( {children} ) =>  {
    const [uploadedImage, setUploadedImage] = useState("");
    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [isImageToBig, setIsImageToBig] = useState(false); 

    useEffect(() => {
        const storedImage = localStorage.getItem("image");
        if(storedImage) {
            setUploadedImage(storedImage)
            setIsImageUploaded(true)
            console.log(uploadedImage)
        };  
    }, [])

    const handleChange = (event) => {
        const file = event.target.files[0];
        if(file) {
            const reader = new FileReader()

            reader.onload = (e) => {
                const image = new Image();
                image.src = e.target.result;

                image.onload = () => {
                    const width = image.width;
                    const height = image.height;
                
                if(width <= 1024 && height <= 1024) {
                    setIsImageToBig(false)
                    setUploadedImage(image.src);
                    setIsImageUploaded(true);
                    localStorage.setItem("image", image.src)
                } else {
                    setIsImageToBig(true)
                }
            }  
            }

            reader.readAsDataURL(file)
        }
    };

    const contextValue = {
        uploadedImage: uploadedImage,
        isImageUploaded: isImageUploaded,
        isImageToBig: isImageToBig,
        handleChange: handleChange,
    };

    return (
        <ImageContext.Provider value={contextValue}>
            {children}
        </ImageContext.Provider>
    )
}

export default ImageContext;
import { useState } from "react";
import { data } from "./Data";
 

const ImageSlider = () => {
const [slide, setSlide] = useState(0);

const handlePreviousClick = () => {
    setSlide(slide - 1);
};

const handleAfterClick = () => {
    setSlide(slide + 1);
};


    return(
        
<div className="image-container">
<button className="Previous" onClick={handlePreviousClick}>
    Previous
    </button>
    <img src= {data[slide]} className="image" alt="image"/>
    

<button className="After" onClick={handleAfterClick}>
    After
    </button>


</div>
    )
}

export default ImageSlider;
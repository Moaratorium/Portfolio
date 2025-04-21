import config from '../config.json';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons"

export function ImageSlider({imageURL}) {
    const [imageIndex, setImageIndex] = useState(0);

    function panLastImage() {
        setImageIndex(index => {
            if (index === 0) { 
                return imageURL.length - 1
            };
            return index - 1;
        })
    }

    function panNextImage() {
        setImageIndex(index => {
            if (index === imageURL.length - 1) {
                return 0
            }
            return index + 1;
        })
    }

    return (
        <div id="image-pane">
            <img src={imageURL[imageIndex]} className="slider-image"></img>
            <button className="slider-button" id="slide-left" onClick={panLastImage}><FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon></button>
            <button className="slider-button" id="slide-right" onClick={panNextImage}><FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon></button>
        </div>
    )
}
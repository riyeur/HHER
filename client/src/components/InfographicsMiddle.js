import React, { useState } from 'react';
import './styles.css';

const InfographicsMiddle = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const images = [
        { id: 1, src: '../images/infographics/postpartumdepression.png', alt: 'Postpartum Depression' },
        { id: 2, src: '../images/infographics/premenstrualsyndrome.png', alt: 'Premenstrual Syndrome' },
        { id: 3, src: '../images/infographics/endometriosis.png', alt: 'Endometriosis' },
        { id: 4, src: '../images/infographics/socialmedia&bodayimage.png', alt: 'Social Media & Body Image' },
        { id: 5, src: '../images/infographics/arthealthbenefits.png', alt: 'Art Health Benefits' },
        { id: 6, src: '../images/infographics/amenorrhea.png', alt: 'Amenorrhea' },
        { id: 7, src: '../images/infographics/breastcancer.png', alt: 'Breast Cancer' },
        { id: 8, src: '../images/infographics/womenhearthealth.png', alt: "Women's Heart Health" },
        { id: 9, src: '../images/infographics/bodypositivity.png', alt: 'Body Positivity' },
        { id: 10, src: '../images/infographics/womenshealthweek.png', alt: "Women's Health Week" },
        { id: 11, src: '../images/infographics/mentalhealth.png', alt: 'Mental Health' },
        { id: 12, src: '../images/infographics/pcos.png', alt: 'PCOS' },
        { id: 13, src: '../images/infographics/researchgaps.png', alt: 'Research Gaps' },
        { id: 14, src: '../images/infographics/pcosmythvsfact.png', alt: 'PCOS (Myth vs Fact)' },
        { id: 15, src: '../images/infographics/ovariancancerpartone.png', alt: 'Ovarian Cancer (Part 1)' },
        { id: 16, src: '../images/infographics/ovariancancerparttwo.png', alt: 'Ovarian Cancer (Part 2)' },
        { id: 17, src: '../images/infographics/indigenousfemalehealth.png', alt: 'Indigenous Female Health' },
        { id: 18, src: '../images/infographics/anemia.png', alt: 'Anemia' },
    ];

    const closeModal = () => {
        setCurrentImage(null);
    };

    return (
        <div className="infographics-middle">
            <div className="mobile-message">
                <p>To view our infographics on this website, please use a laptop/desktop.</p>
                <p>Or, you can visit this <a className="infographics-page-link" href="https://drive.google.com/drive/folders/1Xjx-J0Iynqi64gpIjAuxnZ-zYCeGVINj" target="_blank" rel="noopener noreferrer">link</a> to see all of them.</p>
            </div>
            <div className="image-button-grid">
                {images.map(image => (
                    <button
                        key={image.id}
                        onClick={() => setCurrentImage(image.src)}
                        className="image-button"
                    >
                        {image.alt}
                    </button>
                ))}
            </div>
            
            {currentImage && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-button-two" onClick={closeModal}>x</button>
                        <img
                            src={currentImage}
                            alt="Selected"
                            className="infographics-image"
                            height="350px"
                            width="auto"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default InfographicsMiddle;



import React from "react";

const SectionContent = ({ header, text1, text2, videoUrl }) => {
    return (
        <div className="section-content-flex">
            <h1>{header}</h1>
            {text1 && (
                <p>{text1}</p>
            )}
            {text2 && (
                <p>{text2}</p>
            )}
            <video
                key={videoUrl}
                controls
                className="video" >
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    )
}

export default SectionContent;
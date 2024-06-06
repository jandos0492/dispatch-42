import React from "react";

const SectionContent = ({ name, text, videoUrl }) => {
    return (
        <div className="section-content-flex">
            <h1>{name}</h1>
            {text && (
                <div className="text1">
                    {text.map((someText, index) => (
                        <p key={index}>{someText}</p>
                    ))}
                </div>
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
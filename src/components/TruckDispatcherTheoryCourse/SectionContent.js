import React from "react";

const SectionContent = ({ name, text, videoUrl, underVideoText, linkContent }) => {
    return (
        <div className="section-content-flex">
            <h1>{name}</h1>
            {text && (
                <div className="text1">
                    {text.map((someText, index) => (
                        <p key={index}>{someText}</p>
                    ))}
                    {linkContent && (
                        <a className="link-content" target="_blank" rel="noreferrer noopener" href={linkContent.url}>{linkContent.text}</a>
                    )}
                </div>
            )}
            <video
                key={videoUrl}
                controls
                className="video" >
                <source src={videoUrl} type="video/mp4" />
            </video>
            {underVideoText && (
                <div className="text2">
                    {underVideoText.map((someText, index) => (
                        <p key={index}>{someText}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SectionContent;
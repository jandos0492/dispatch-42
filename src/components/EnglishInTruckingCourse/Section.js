import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Section = ({ sectionData, isExpanded, onClick }) => {
    const { mainLink, subLink } = sectionData;
    const location = useLocation();

    return (
        <div className="section-flex">
            <div className="section-header">
                <div className="section-header-text" onClick={onClick} >
                    {mainLink}
                </div>
                {isExpanded && (
                    <div className="section-content">
                        {subLink.map((lesson, index) => (
                            <NavLink
                                key={index}
                                to={`/english-in-trucking/${mainLink.replace(/\s+/g, "-").toLowerCase()}/${lesson.name.replace(/\s+/g, "-").toLowerCase()}`}
                                className={`english-in-trucking-link ${location.pathname.includes(`/english-in-trucking/${mainLink.replace(/\s+/g, "-").toLowerCase()}/${lesson.name.replace(/\s+/g, "-").toLowerCase()}`) ? "active-lesson" : ""}`}
                            >
                                <div className="lesson-item">
                                    {lesson.name}
                                </div>
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Section;
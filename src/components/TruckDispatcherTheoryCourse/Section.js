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
                                to={lesson.route}
                                className={`english-in-trucking-link ${location.pathname.includes(`/truck-dispatcher-theory/${lesson.route}`) ? "active-lesson" : ""}`}
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
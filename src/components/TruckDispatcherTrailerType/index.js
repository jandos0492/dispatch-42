import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Section from "./Section";
import sections from "../../data/truck-dispatcher-trailer-type.json";
import SectionContent from "./SectionContent";

const TruckDispatcherTrailerType = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const location = useLocation();
    const pathStartsWithTruckDispatcherTrailerType = location.pathname.startsWith("/truck-dispatcher-trailer-type");

    const handleSelectionClick = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="english-in-trucking-course-flex">
            <div className="english-in-trucking-course-link">
                <img src="https://dispatch-42.s3.us-east-2.amazonaws.com/images/truck-dispatcher-trailer-type.jpg"
                    alt="truck dispathcer trailer type" className="section-image" />
                {pathStartsWithTruckDispatcherTrailerType && (
                    sections.map((section, index) => (
                        <Section
                            key={index}
                            sectionData={section}
                            isExpanded={expandedSection === index}
                            onClick={() => handleSelectionClick(index)}
                            className="list"
                        />
                    ))
                )}
            </div>
            <div className="english-in-trucking-course-details">
                {pathStartsWithTruckDispatcherTrailerType && (
                    <Routes>
                        {sections.map((section) =>
                            section.subLink.map((link, index) => (
                                <Route
                                    key={index}
                                    path={link.route}
                                    element={<SectionContent name={link.name} text={link.text} videoUrl={link.videoUrl} />}
                                />
                            ))
                        )}
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default TruckDispatcherTrailerType;
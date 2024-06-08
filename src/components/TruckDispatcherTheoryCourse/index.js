import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Section from "./Section";
import sections from "../../data/truck-dispatcher-theory.json";
import SectionContent from "./SectionContent";

const TruckDispatcherTheoryCourse = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const location = useLocation();
    const pathStartsWithEnglishInTrucking = location.pathname.startsWith("/truck-dispatcher-theory");

    const handleSelectionClick = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="english-in-trucking-course-flex">
            <div className="english-in-trucking-course-link">
                <img src="https://static.ecoach.com/upload/12310/image/c9e3465a-3bd4-45d3-8be1-a7513bd806de.jpg"
                    alt="truck dispatcher theory" className="section-image" />
                {pathStartsWithEnglishInTrucking && (
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
                {pathStartsWithEnglishInTrucking && (
                    <Routes>
                        {sections.map((section) =>
                            section.subLink.map((link, index) => (
                                <Route
                                    key={index}
                                    path={link.route}
                                    element={<SectionContent name={link.name} text={link.text} linkContent={link.linkContent} videoUrl={link.videoUrl} underVideoText={link.underVideoText}  />}
                                />
                            ))
                        )}
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default TruckDispatcherTheoryCourse;
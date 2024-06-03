import React, { useState } from "react";
import { useLocation, Route, Routes } from "react-router-dom";
import Section from "./Section";
import sections from "../../data/english-in-trucking-data.json";
import "./EnglishInTruckingCourse.css";
import SectionContent from "./SectionContent";

const EnglishInTruckingCourse = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const location = useLocation();
    const pathStartsWithEnglishInTrucking = location.pathname.startsWith("/english-in-trucking");

    const handleSelectionClick = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="english-in-trucking-course-flex">
            <div className="english-in-trucking-course-link">
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
                                    path={`${section.mainLink.replace(/\s+/g, "-").toLowerCase()}/${link.name.replace(/\s+/g, "-").toLowerCase()}`}
                                    element={<SectionContent header={link.header} text1={link.text1} text2={link.text2} videoUrl={link.videoUrl} />}
                                />
                            ))
                        )}
                    </Routes>
                )}
            </div>
        </div>
    );
}

export default EnglishInTruckingCourse;

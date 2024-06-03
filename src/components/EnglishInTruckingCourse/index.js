import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Section from "./Section";
import sections from "../../data/english-in-trucking-data.json";
import "./EnglishInTruckingCourse.css";

const EnglishInTruckingCourse = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const location = useLocation();
    const pathStartsWithEnglishInTrucking = location.pathname.startsWith("/english-in-trucking");

    const handleSelectionClick = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div className="english-in-trucking-course">
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
    )
}

export default EnglishInTruckingCourse;
import React, { useState } from 'react';
import Section from './Section';

const Course = () => {
    const [expandedSection, setExpandedSection] = useState(null);

    const sections = [
        {
            title: 'Section 1',
            lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'],
        },
        {
            title: 'Section 2',
            lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4', 'Lesson 5'],
        },
        {
            title: 'Bonus',
            lessons: ['Lesson 1'],
        },
    ];

    const handleSectionClick = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    return (
        <div>
            {sections.map((section, index) => (
                <Section
                    key={index}
                    title={section.title}
                    lessons={section.lessons}
                    isExpanded={expandedSection === index}
                    onClick={() => handleSectionClick(index)}
                />
            ))}
        </div>
    );
};

export default Course;
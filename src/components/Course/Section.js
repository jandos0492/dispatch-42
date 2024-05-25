import React from 'react';

const Section = ({ title, lessons, isExpanded, onClick }) => {
    return (
        <div>
            <div onClick={onClick} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
                {title}
            </div>
            {isExpanded && (
                <div style={{ paddingLeft: '20px' }}>
                    {lessons.map((lesson, index) => (
                        <div key={index}>{lesson}</div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Section;

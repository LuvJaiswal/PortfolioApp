import React from 'react';

const Bar = ({ value: { icon, name, level } }) => {
    return (
        <div className="bar">
            <div className="bar_wrapper">
                <span className="bar_name">
                    <img src={icon} alt="icon" className="bar_icon" />{name}
                </span>
                <span>{level}</span>
            </div>

        </div>
    );
};
export default Bar;

import React, { useState } from "react";
const Navbar = () => {
    const [active, setActive] = useState('About')
    return (
        <div>
            <div className="navbar">
                <div className="navbar_active">
                    {active}
                </div>
                <div className="navbar_items">
                    {active !== 'About' &&
                        <div className="navbar_item" onClick={() => setActive('About')}>About</div>
                    }
                    {active !== 'Resume' ? <div className="navbar_item" onClick={() => setActive('Resume')}>Resume</div>
                        : null
                    }
                    {active !== 'Projects' && <div className="navbar_item" onClick={() => setActive('Projects')}>Projects</div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

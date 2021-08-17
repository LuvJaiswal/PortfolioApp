import React, { useState } from "react";
import { Link } from 'react-router-dom'


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
                        <Link to="/About">
                            <div className="navbar_item" onClick={() => setActive('About')}>About</div>
                        </Link>
                    }
                    {active !== 'Resume' ?
                        <Link to="/Resume">
                            <div className="navbar_item" onClick={() => setActive('Resume')}>Resume</div>
                        </Link> : null

                    }
                    {active !== 'Projects' &&
                        <Link to="/Projects">
                            <div className="navbar_item" onClick={() => setActive('Projects')}>Projects</div>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;

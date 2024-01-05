import React from "react";
import DisplayTextWithIcon from './util/DisplayTextWithIcon';

const Header: React.FC = () => {
    return (
            <div className="flex items-center justify-between mb-2">
                <DisplayTextWithIcon iconUrl="/assets/logo.png" text="Critiq" />
            </div>
    );
};

export default Header;
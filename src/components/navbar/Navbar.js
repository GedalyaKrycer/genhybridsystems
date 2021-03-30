import React from 'react';
import SocialMediaIcon from "../ui/SocialMediaIcon/SocialMediaIcon";

const Navbar = props => {
    return (
        <nav>
            Navbar
            <SocialMediaIcon
                type={"facebook"}
                location={"contact"}
                link={"https://www.google.com"}
                height={23}
                width={23}
                viewBoxSize="0 0 23 23"
                disable={false}
            />
        </nav>
    );
}

export default Navbar;

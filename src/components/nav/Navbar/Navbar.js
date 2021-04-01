import React, {useState, useEffect} from 'react';
import './navbarStyles.scss';
import SocialMediaIcon from "../../ui/SocialMediaIcon/SocialMediaIcon";
import PrimaryCTAButton from "../../ui/PrimaryCTAButton/PrimaryCTAButton";
import Logo from '../../../assets/ghs-ribbon-logo.svg';
import useWindowDimensions from '../../../utils/useWindowDimensions';
import { useGHStContext } from '../../../utils/ContextProvider';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';

const Navbar = props => {

    const [openMenu, setOpenMenu] = useState(false);
    const [stickyNavStyle, setStickyNavStyle] = useState(true)
    const [desktopView, setDesktopView] = useState(true);
    const {width} = useWindowDimensions()
    const {setModalOpen} = useGHStContext();

    useScrollPosition(
        ({ prevPos, currPos }) => {
            const isShow = currPos.y > 20;
            if (isShow !== stickyNavStyle) setStickyNavStyle(isShow)
        },
        [stickyNavStyle],
        false,
        false,
        300
    )

    useEffect(() => {
        if(width > 676) {
            setDesktopView(true);
        } else {
            setDesktopView(false);
        }
    }, [width])

    const mailchimpModalHandler = () => {
        setModalOpen(true);
        setOpenMenu(false);
    }

    return (
        <nav
            role="navigation"
            className={`navBar ${(openMenu && width < 677) || (!stickyNavStyle && width < 677) ? "navBar--active" : null}`}
        >

            <div className="navBar__header">
                <img
                    className="navBar__logo"
                    src={Logo}
                    alt="Gen Hybrid Systems logo"
                />

                <button
                    className={`navBar__toggle ${openMenu ? "open-menu" : null}`}
                    aria-controls="menu"
                    aria-expanded={false}
                    onClick={() => setOpenMenu(curValue => !curValue)}
                >
                    <span className="navBar__toggle-lines-1" />
                    <span className="navBar__toggle-lines-2" />
                    <span className="navBar__toggle-lines-3" />
                    <span className="screen-reader-text">Menu</span>
                </button>
            </div>

            <ul
                className={`navbar__links ${openMenu || desktopView ? null : "hidden"}`}
                id="menu"
            >
                <li><a href="#crisis">crisis</a></li>
                <li><a href="#mission">mission</a></li>
                <li><a href="#videos">videos</a></li>
                <li><a href="#connect">connect</a></li>
            </ul>

            <div
                className={`navbar__social-container ${openMenu ? null : "hidden"}`}
            >
                <SocialMediaIcon
                    type={"youtube"}
                    location={"mobile-nav"}
                    height={40}
                    width={28}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"ticktock"}
                    location={"mobile-nav"}
                    height={27}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"instagram"}
                    location={"mobile-nav"}
                    height={31}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"snapchat"}
                    location={"mobile-nav"}
                    height={33}
                    width={30}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"twitter"}
                    location={"mobile-nav"}
                    height={34}
                    width={28}
                    disable={false}
                />
                <SocialMediaIcon
                    type={"facebook"}
                    location={"mobile-nav"}
                    height={30}
                    width={31}
                    disable={false}
                />
            </div>

            <div
                className={`navbar__cta-container ${openMenu || desktopView ? null : "hidden"}`}
            >
                <PrimaryCTAButton
                    handleClick={mailchimpModalHandler}
                    label="get updates"
                    icon={null}
                />
            </div>
        </nav>
    );
}

export default Navbar;

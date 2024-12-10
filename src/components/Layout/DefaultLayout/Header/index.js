//Header
//Libary
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Import CSS
//Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

//File
import styles from './Header.module.scss';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image/';
import Search from '~/components/Search';
import RoutesConfig from '~/config/routes';


//Icons
import {
    UploadIcon,
    MessageIcon,
    InboxIcon,
    ProfileIcon,
    CoinIcon,
    CreateIcon,
    SettingsIcon,
    LanguageIcon,
    HelpIcon,
    ShortcutsIcon,
    MoonIcon,
    LogoutIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

// MENU ITEM NO USER
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
                {
                    code: 'zh-cn',
                    title: 'Chinese',
                },
                {
                    code: 'ja',
                    title: 'Japanese',
                },
                {
                    code: 'ko',
                    title: 'Korean',
                },
                {
                    code: 'fr',
                    title: 'French',
                },
                {
                    code: 'fi',
                    title: 'Suomi', // Finland
                },
                {
                    code: 'no',
                    title: 'Norsk', // Norway
                },
                {
                    code: 'se',
                    title: 'Svenska', // Sweden
                },
                {
                    code: 'dk',
                    title: 'Dansk', // Denmark
                },
                {
                    code: 'ch',
                    title: 'Schweizerdeutsch', // Switzerland (Swiss German)
                },
                {
                    code: 'nl',
                    title: 'Nederlands', // Netherlands
                },
                {
                    code: 'de',
                    title: 'Deutsch', // Germany
                },
                {
                    code: 'es',
                    title: 'Español', // Spain
                },
                {
                    code: 'pt',
                    title: 'Português', // Portugal
                },
                {
                    code: 'it',
                    title: 'Italiano', // Italy
                },
                {
                    code: 'ru',
                    title: 'Русский', // Russia
                },
                {
                    code: 'tr',
                    title: 'Türkçe', // Turkey
                },
                {
                    code: 'ar',
                    title: 'العربية', // Arabic
                },
                {
                    code: 'hi',
                    title: 'हिन्दी', // Hindi (India)
                },
                {
                    code: 'th',
                    title: 'ไทย', // Thai (Thailand)
                },
                {
                    code: 'id',
                    title: 'Bahasa Indonesia', // Indonesian (Indonesia)
                },
                {
                    code: 'ms',
                    title: 'Bahasa Melayu', // Malay (Malaysia)
                },
                {
                    code: 'bn',
                    title: 'বাংলা', // Bengali (Bangladesh/India)
                },
                {
                    code: 'ur',
                    title: 'اردو', // Urdu (Pakistan/India)
                },
                {
                    code: 'pl',
                    title: 'Polski', // Polish (Poland)
                },
                {
                    code: 'uk',
                    title: 'Українська', // Ukrainian (Ukraine)
                },
                {
                    code: 'he',
                    title: 'עברית', // Hebrew (Israel)
                },
                {
                    code: 'el',
                    title: 'Ελληνικά', // Greek (Greece)
                },
                {
                    code: 'hu',
                    title: 'Magyar', // Hungarian (Hungary)
                },
                {
                    code: 'cs',
                    title: 'Čeština', // Czech (Czech Republic)
                },
                {
                    code: 'ro',
                    title: 'Română', // Romanian (Romania)
                },
                {
                    code: 'sk',
                    title: 'Slovenčina', // Slovak (Slovakia)
                },
                {
                    code: 'bg',
                    title: 'Български', // Bulgarian (Bulgaria)
                },
                {
                    code: 'sr',
                    title: 'Српски', // Serbian (Serbia)
                },
                {
                    code: 'hr',
                    title: 'Hrvatski', // Croatian (Croatia)
                },
                {
                    code: 'sw',
                    title: 'Kiswahili', // Swahili (East Africa)
                },
                {
                    code: 'ta',
                    title: 'தமிழ்', // Tamil (India/Sri Lanka)
                },
                {
                    code: 'te',
                    title: 'తెలుగు', // Telugu (India)
                },
                {
                    code: 'fa',
                    title: 'فارسی', // Persian (Iran)
                },
                {
                    code: 'am',
                    title: 'አማርኛ', // Amharic (Ethiopia)
                },
                {
                    code: 'my',
                    title: 'မြန်မာစာ', // Burmese (Myanmar)
                },
                {
                    code: 'km',
                    title: 'ភាសាខ្មែរ', // Khmer (Cambodia)
                },
                {
                    code: 'tl',
                    title: 'Filipino', // Tagalog/Filipino (Philippines)
                },
            ],
        },
    },
    {
        icon: <HelpIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <ShortcutsIcon />,
        title: 'Keyboard shortcuts',
    },
];

// MENU ITEM USER
const menuItemsUser = [
    {
        icon: <ProfileIcon />,
        title: 'View profile',
        to: '/viewprofile',
        // separate: true, // sử dung linh động dấu gạch ngang borderTop
    },
    {
        icon: <CoinIcon />,
        title: 'Coins',
        to: '/coins',
        // separate: true, // sử dung linh động dấu gạch ngang borderTop
    },
    {
        icon: <CreateIcon />,
        title: 'Creator tools',
        to: '/creatortools',
        // separate: true, // sử dung linh động dấu gạch ngang borderTop
    },
    {
        icon: <SettingsIcon />,
        title: 'Setting',
        to: '/setting',
        // separate: true, // sử dung linh động dấu gạch ngang borderTop
    },
    ...MENU_ITEMS,
    {
        icon: <MoonIcon />,
        title: 'Dark mode',
        // separate: true, // sử dung linh động dấu gạch ngang borderTop
        // children: {
        //     title: 'Dark mode',
        //     data: [
        //         {
        //             // code: 'en',
        //             title: 'Use device theme',
        //         },
        //         {
        //             // code: 'vi',
        //             title: 'Dark mode',
        //         },
        //         {
        //             // code: 'vi',
        //             title: 'Light mode',
        //         },
        //     ],
        // },
    },
    {
        icon: <LogoutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true, // sử dung linh động dấu gạch ngang borderTop
    },
];

// Handle logic changes languages
function handleMenuChange(menuItem) {
    console.log(menuItem);
}

function Header() {
    // TRẠNG THÁI USER LOGIN
    const currentUser = true;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* lOGO */}
                <Link to={RoutesConfig.home} className={cx('logo')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 118 42"
                        id="logo-dark-c4561408"
                        width="118"
                        height="42"
                        fill="currentColor"
                        alt="TikTok"
                    >
                        <>
                            <path
                                fill="#25F4EE"
                                d="M9.875 16.842v-1.119A9 9 0 0 0 8.7 15.64c-4.797-.006-8.7 3.9-8.7 8.708a8.7 8.7 0 0 0 3.718 7.134A8.68 8.68 0 0 1 1.38 25.55c0-4.737 3.794-8.598 8.495-8.707"
                            />
                            <path
                                fill="#25F4EE"
                                d="M10.086 29.526c2.14 0 3.89-1.707 3.967-3.83l.006-18.968h3.463a7 7 0 0 1-.11-1.202h-4.726l-.006 18.969a3.98 3.98 0 0 1-3.967 3.829 3.9 3.9 0 0 1-1.846-.46 3.95 3.95 0 0 0 3.22 1.662m13.905-16.36v-1.055a6.5 6.5 0 0 1-3.583-1.068 6.57 6.57 0 0 0 3.583 2.123"
                            />
                            <path
                                fill="#FE2C55"
                                d="M20.409 11.044a6.54 6.54 0 0 1-1.616-4.316h-1.265a6.56 6.56 0 0 0 2.88 4.316M8.706 20.365a3.98 3.98 0 0 0-3.973 3.976c0 1.528.869 2.858 2.134 3.523a3.94 3.94 0 0 1-.754-2.321 3.98 3.98 0 0 1 3.973-3.976c.409 0 .805.07 1.175.185v-4.833a9 9 0 0 0-1.175-.083c-.07 0-.134.006-.204.006v3.708a4 4 0 0 0-1.176-.185"
                            />
                            <path
                                fill="#FE2C55"
                                d="M23.992 13.166v3.676c-2.453 0-4.727-.786-6.58-2.116v9.622c0 4.8-3.902 8.713-8.706 8.713a8.67 8.67 0 0 1-4.988-1.579 8.7 8.7 0 0 0 6.368 2.781c4.797 0 8.707-3.906 8.707-8.714v-9.621a11.25 11.25 0 0 0 6.579 2.116v-4.73q-.72-.002-1.38-.148"
                            />
                            <path
                                fill="black"
                                d="M17.413 24.348v-9.622a11.25 11.25 0 0 0 6.58 2.116v-3.676a6.57 6.57 0 0 1-3.584-2.123 6.6 6.6 0 0 1-2.888-4.315H14.06l-.006 18.968a3.98 3.98 0 0 1-3.967 3.83A3.99 3.99 0 0 1 6.86 27.87a3.99 3.99 0 0 1-2.133-3.523A3.98 3.98 0 0 1 8.7 20.372c.409 0 .805.07 1.175.185v-3.708c-4.701.103-8.495 3.964-8.495 8.701 0 2.29.888 4.373 2.338 5.933a8.67 8.67 0 0 0 4.988 1.58c4.798 0 8.707-3.913 8.707-8.714m12.635-11.17h14.775l-1.355 4.232h-3.832v15.644h-4.778V17.41l-4.804.006zm38.984 0h15.12l-1.355 4.232h-4.17v15.644h-4.785V17.41l-4.804.006zM45.73 19.502h4.733v13.553h-4.708zm6.617-6.374h4.733v9.257l4.689-4.61h5.646l-5.934 5.76 6.644 9.52h-5.213l-4.433-6.598-1.405 1.362v5.236H52.34V13.128zm50.143 0h4.734v9.257l4.688-4.61h5.647l-5.934 5.76 6.643 9.52h-5.206l-4.433-6.598-1.405 1.362v5.236h-4.734zm-54.397 4.826a2.384 2.384 0 0 0 2.382-2.384 2.384 2.384 0 1 0-2.382 2.384"
                            />
                            <path
                                fill="#25F4EE"
                                d="M83.545 24.942a8.11 8.11 0 0 1 7.473-8.087 9 9 0 0 0-.709-.026c-4.478 0-8.106 3.631-8.106 8.113s3.628 8.113 8.106 8.113c.21 0 .498-.013.71-.026-4.178-.326-7.475-3.823-7.475-8.087"
                            />
                            <path
                                fill="#FE2C55"
                                d="M92.858 16.83c-.217 0-.505.012-.716.025a8.11 8.11 0 0 1 7.468 8.087 8.11 8.11 0 0 1-7.468 8.087c.211.02.499.026.716.026 4.478 0 8.106-3.631 8.106-8.113s-3.628-8.113-8.106-8.113"
                            />
                            <path
                                fill="black"
                                d="M91.58 28.887a3.94 3.94 0 0 1-3.94-3.945 3.94 3.94 0 1 1 7.882 0c0 2.18-1.77 3.945-3.942 3.945m0-12.058c-4.477 0-8.106 3.631-8.106 8.113s3.629 8.113 8.106 8.113 8.106-3.631 8.106-8.113-3.628-8.113-8.106-8.113"
                            />
                        </>
                    </svg>
                </Link>

                {/* SEARCH BAR */}
                <Search />

                {/* ACTIONS */}
                <div className={cx('actions')}>
                    {/* LOGIC GIAO DIEN YES/NO LOGIN */}
                    {currentUser
                        ? ({
                              /* ACTIONS YES LOGIN */
                          },
                          (
                              <>
                                  {/* ACTIONS Upload CloudUp */}
                                  <Tippy delay={(0, 200)} content="Upload video" placement="bottom">
                                      <button className={cx('actions-btn')}>
                                          <UploadIcon />
                                      </button>
                                  </Tippy>

                                  {/* ACTIONS Message */}
                                  <Tippy delay={(0, 200)} content="Message" placement="bottom">
                                      <button className={cx('actions-btn')}>
                                          <MessageIcon />
                                      </button>
                                  </Tippy>

                                  {/* ACTIONS Message */}
                                  <Tippy delay={(0, 200)} content="Inbox" placement="bottom">
                                      <button className={cx('actions-btn')}>
                                          <InboxIcon />
                                      </button>
                                  </Tippy>
                              </>
                          ))
                        : ({
                              /* ACTIONS NO LOGIN */
                          },
                          (
                              <>
                                  <Button text>Upload</Button>
                                  <Button primary>Login</Button>
                                  {/* <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>Login</Button> */}
                              </>
                          ))}

                    {/* ACTIONS MENU */}
                    <Menu items={currentUser ? menuItemsUser : MENU_ITEMS} onChange={handleMenuChange}>
                        {/* LOGIC (LOGO/...) CURRENT USER YES/NO LOGIN */}
                        {currentUser ? (
                            <Image
                                src="https://b.fssta.com/uploads/application/soccer/headshots/885.vresize.350.350.medium.14.png"
                                alt="Avatar"
                                className={cx('user-avatar')}
                                // customFallBack='https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png'
                                // Nếu xóa đoạn comment trên thì ảnh khi bị lỗi sẽ hiện mặc định là ảnh 'f8' ngược lại sẽ lấy ảnh 'no-image'
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

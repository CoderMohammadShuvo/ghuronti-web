import Navbar from "@/components/Shared/Navbar";
import React from "react";
import styles from "./Signup.module.css";
import Footer from "@/components/Shared/Footer/Footer";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import FilledInput from "@mui/material/FilledInput";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "next/link";

const Signup = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div>
            <Navbar />
            <div className={styles.loginMain}>
                <img
                    src="/images/welcome.png"
                    alt="Welcome"
                    className={styles.loginImage}
                />
                <div className={styles.loginArea}>
                    <TextField
                        id="outlined-basic"
                        label="User Name"
                        variant="outlined"
                        className={styles.textBox}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Email Address"
                        variant="outlined"
                        className={styles.textBox}
                        style={{ marginTop: "20px" }}
                    />
                    <FormControl
                        variant="outlined"
                        className={styles.textBox}
                        style={{ marginTop: "20px" }}
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Link href="/">
                        <button className={styles.loginButton}>Sign Up</button>
                    </Link>

                    <div className={styles.orBUtton}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={208}
                            height={2}
                            fill="none"
                        >
                            <path
                                stroke="#B0B8BA"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M1 1h206"
                            />
                        </svg>
                        <p className={styles.or}>or</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={208}
                            height={2}
                            fill="none"
                        >
                            <path
                                stroke="#B0B8BA"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="M1 1h206"
                            />
                        </svg>
                    </div>
                    <button className={styles.signUpButton}>Sign Up as Agent</button>
                    <button className={styles.createAcoutn}>Create your account</button>
                    <div className={styles.oAUtoh}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={68}
                            height={68}
                            fill="none"
                        >
                            <g filter="url(#a)">
                                <circle cx={34} cy={30} r={30} fill="#fff" />
                            </g>
                            <g fillRule="evenodd" clipPath="url(#b)" clipRule="evenodd">
                                <path
                                    fill="#FBBC05"
                                    d="M24.542 30.5c0-1.137.189-2.227.526-3.25l-5.898-4.503a17.49 17.49 0 0 0-1.797 7.753c0 2.786.647 5.414 1.795 7.747l5.894-4.513a10.352 10.352 0 0 1-.52-3.234Z"
                                />
                                <path
                                    fill="#EA4335"
                                    d="M34.898 20.16c2.47 0 4.7.874 6.452 2.306l5.098-5.091C43.342 14.67 39.358 13 34.898 13a17.473 17.473 0 0 0-15.728 9.747l5.898 4.504a10.328 10.328 0 0 1 9.83-7.092Z"
                                />
                                <path
                                    fill="#34A853"
                                    d="M34.898 40.841c-4.597 0-8.471-2.967-9.83-7.092l-5.898 4.503A17.472 17.472 0 0 0 34.898 48c4.274 0 8.355-1.517 11.418-4.361l-5.598-4.328c-1.58.995-3.57 1.53-5.82 1.53Z"
                                />
                                <path
                                    fill="#4285F4"
                                    d="M51.627 30.5c0-1.034-.16-2.148-.399-3.182h-16.33v6.762h9.4c-.47 2.305-1.75 4.077-3.58 5.23l5.599 4.328c3.217-2.985 5.31-7.434 5.31-13.138Z"
                                />
                            </g>
                            <defs>
                                <clipPath id="b">
                                    <path fill="#fff" d="M17 13h35v35H17z" />
                                </clipPath>
                                <filter
                                    id="a"
                                    width={68}
                                    height={68}
                                    x={0}
                                    y={0}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix values="0 0 0 0 0.9 0 0 0 0 0.971808 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_1_901"
                                    />
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_1_901"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={68}
                            height={68}
                            fill="none"
                        >
                            <g filter="url(#a)">
                                <circle cx={34} cy={30} r={30} fill="#fff" />
                            </g>
                            <g clipPath="url(#b)">
                                <path
                                    fill="#1777F2"
                                    fillRule="evenodd"
                                    d="M45.335 15A3.667 3.667 0 0 1 49 18.665v22.67A3.667 3.667 0 0 1 45.335 45h-6.239V33.696H43l.742-4.84h-4.645v-3.142c0-1.325.65-2.616 2.73-2.616h2.111v-4.121s-1.916-.327-3.748-.327c-3.826 0-6.326 2.318-6.326 6.516v3.69H29.61v4.84h4.253V45H22.665A3.667 3.667 0 0 1 19 41.335v-22.67A3.667 3.667 0 0 1 22.665 15h22.67Z"
                                    clipRule="evenodd"
                                />
                            </g>
                            <defs>
                                <clipPath id="b">
                                    <path fill="#fff" d="M19 15h30v30H19z" />
                                </clipPath>
                                <filter
                                    id="a"
                                    width={68}
                                    height={68}
                                    x={0}
                                    y={0}
                                    colorInterpolationFilters="sRGB"
                                    filterUnits="userSpaceOnUse"
                                >
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feColorMatrix
                                        in="SourceAlpha"
                                        result="hardAlpha"
                                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    />
                                    <feOffset dy={4} />
                                    <feGaussianBlur stdDeviation={2} />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix values="0 0 0 0 0.9 0 0 0 0 0.971808 0 0 0 0 1 0 0 0 1 0" />
                                    <feBlend
                                        in2="BackgroundImageFix"
                                        result="effect1_dropShadow_1_911"
                                    />
                                    <feBlend
                                        in="SourceGraphic"
                                        in2="effect1_dropShadow_1_911"
                                        result="shape"
                                    />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Signup;

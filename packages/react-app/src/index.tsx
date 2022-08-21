import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { CloseOutlined } from '@ant-design/icons';
import ReactModal from 'react-modal';
import { cssTransition, toast } from 'react-toastify';
import Root from 'app/Root';

import 'react-toastify/dist/ReactToastify.css';
import 'index.scss';

ReactModal.setAppElement('#root');

toast.configure({
    className: 'toaster-container',
    toastClassName: 'toaster',
    bodyClassName: 'toaster__message',
    closeButton: <CloseOutlined />,
    hideProgressBar: true,
    position: 'top-center',
    transition: cssTransition({
        enter: `Toastify__slide-enter`,
        exit: `Toastify__slide-exit`,
        duration: [350, 1400],
        appendPosition: true,
    }),
});

const colors = {
    brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
    }
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false
};

const theme = extendTheme({ colors, config });

const rootElement = document.getElementById("root");
ReactDOM.render(
    <ChakraProvider theme={theme}>
        <Root />
    </ChakraProvider>,
    rootElement
);


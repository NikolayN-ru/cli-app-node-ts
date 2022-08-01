"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const ink_1 = require("ink");
const react_1 = __importStar(require("react"));
const ink_big_text_1 = __importDefault(require("ink-big-text"));
const App = () => {
    const [time, setTime] = (0, react_1.useState)((0, date_fns_1.format)(new Date(), 'dd-MM-yyyy HH:mm:ss'));
    (0, react_1.useEffect)(() => {
        const timer = setInterval(() => {
            getTime();
            // getStat();
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, []);
    const getTime = () => {
        setTime((0, date_fns_1.format)(new Date(), 'dd-MM-yyyy HH:mm:ss'));
    };
    // const getStat = async () => {
    //     const { data } = await axios.get('your_url', {
    //         params: {
    //             part: 'statictics',
    //             id: 'ID!',
    //             key: process.env.KEY
    //         }
    //     });
    //     setText(data.YOU_DATA)
    // }
    return (react_1.default.createElement(ink_1.Box, { borderStyle: 'round', borderColor: 'magenta', padding: 1, flexDirection: 'column' },
        react_1.default.createElement(ink_1.Text, { color: 'redBright' },
            react_1.default.createElement(ink_big_text_1.default, { text: 'Testing_message' })),
        react_1.default.createElement(ink_1.Text, null, time)));
};
(0, ink_1.render)(react_1.default.createElement(App, null));

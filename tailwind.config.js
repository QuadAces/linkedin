// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        // ...
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [
      nextui({
        addCommonColors: true,
        themes: {
          
          light: {
            
        colors: {
          primary: {
          DEFAULT: "#E2B53E",
          foreground: "#FFFFFF",

          
            "50": '#fff6de',
            "100": '#f7e5b6',
            "200": '#efd58d',
            "300": '#e8c362',
            "400": '#e1b337',
            "500": '#c8991e',
            "600": '#9b7715',
            "700": '#6f550d',
            "800": '#443303',
            "900": '#191100',
          
        }
      }
          },
          dark: {
            background: "#FFFFFF", 
            foreground: "#11181C",
            colors: {
              primary: {
                DEFAULT: "#E2B53E",
                foreground: "#0A0A0A",
                
              }
            }
          

          },
        },
      }),
    ],
};

export default config;

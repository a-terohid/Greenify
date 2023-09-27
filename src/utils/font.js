import localFont from "next/font/local";


export const Kaoly = localFont({
    display: 'swap',
    variable: '--font-Kaoly',
    src: [
        {
            path: "../../public/font/kaoly/Kaoly Demo-Regular.ttf",
            style: "normal",
        },
    ]
})


export const Lato = localFont({
    display: 'swap',
    variable: '--font-Lato',
    src: [
        {
            path: "../../public/font/Lato/Lato-Regular.ttf",
            weight : "400",
            style: "normal",
        },
        {
            path: "../../public/font/Lato/Lato-Bold.ttf",
            weight : "700",
            style: "normal",
        },
        {
            path: "../../public/font/Lato/Lato-Light.ttf",
            weight : "300",
            style: "normal",
        }
    ]
}) 

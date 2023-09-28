import localFont from "next/font/local";


const Kaoly = localFont({
    display: 'swap',
    variable: '--font-Kaoly',
    src: [
        {
            path: "../../public/font/kaoly/Kaoly Demo-Regular.ttf",
            style: "normal",
        },
    ]
})


const Lato = localFont({
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

const Montserrat = localFont({
    display : 'swap',
    variable: '--font-Montserrat',
    src:[
        {
            path: "../../public/font/Montserrat/static/Montserrat-Regular.ttf",
            weight : "400",
            style: "normal",
        },
        {
            path: "../../public/font/Montserrat/static/Montserrat-Bold.ttf",
            weight : "700",
            style: "normal",
        },
        {
            path: "../../public/font/Montserrat/static/Montserrat-Light.ttf",
            weight : "300",
            style: "normal",
        }
    ]
})



export const FONTS = ` 
                        ${ Kaoly.variable } 
                        ${ Lato.variable } 
                        ${ Montserrat.variable } 
                    `
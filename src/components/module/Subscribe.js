import side from "@/public/img/side.png"
import Image from "next/image";
import fainal_butter from "@/public/icons/fainal-butter.svg"
import fainla_lea from "@/public/icons/fainla-lea.svg"

const Subscribe = () => {
    return (
        <div className=" bg-side-background w-screen bg-no-repeat flex items-center justify-center bg-cover py-16  " >
            <div className=" -mt-80" >
                <Image src={ fainal_butter } className=" absolute left-5 -mt-80 w-16 md:w-20 md:-mt-96 lg:-mt-32" />
                <Image src={ fainla_lea } className=" absolute right-5 -mt-[20.5rem] w-14 opacity-60 md:w-20 md:-mt-96 md:right-10 lg:-mt-32 " />
            </div>
            <div className=' bg-white con rounded-3xl flex flex-col lg:flex-row-reverse items-center justify-center w-[300px] pt-10 md:w-[400px] lg:w-fit lg:pt-0 ' >
                <div  className="flex flex-col items-center justify-center text-center px-7 ">
                    <h1 className=" font-montserrat font-bold text-2xl mb-3" >Subscribe to our Newsletter</h1>
                    <p className=" text-sm " >Join our green community and receive exclusive offers and insightful content straight to your inbox!</p>
                    <input placeholder='Enter your name' className="mt-8 mb-5 border placeholder-black outline-black border-black rounded-md px-3 py-2 w-full underline underline-offset-1 text-xs text-black lg:w-64"  />
                    <input placeholder='Enter your E-mail' className="border placeholder-black outline-black border-black rounded-md px-3 py-2 w-full underline underline-offset-1 text-xs text-black lg:w-64 " />
                    <button className=' px-9 py-2 my-9 bg-PrimaryGreen text-white rounded-lg text-sm border-b-4 border-NeutralGrey' >SUBSCRIBE</button>
                </div>
                <Image src={ side } className="w-screen lg:w-[300px]" />
            </div>
        </div>
    );
};

export default Subscribe;
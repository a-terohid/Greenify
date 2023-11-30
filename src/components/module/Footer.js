import phone from "@/public/icons/phone icon.svg"
import mail from "@/public/icons/mail icon.svg"
import location from "@/public/icons/location icon.svg"
import facebook from "@/public/icons/face book icon.svg"
import instagram from "@/public/icons/instagram icon.svg"
import twitter from "@/public/icons/twitter icon.svg"
import linkedin from "@/public/icons/linkedin icon.svg"
import earth from "@/public/items/earth.svg"
import Branch_1 from "@/public/items/Branch_1.svg"
import Image from "next/image";

const Footer = () => {
    return (
        <div className=' bg-NeutralGrey' >
            <div className="flex justify-between z-10 container p-0 " >
                <Image alt="object" className="-mt-20 md:-mt-32  md:w-20 absolute left-0" src={ Branch_1 } />
                <Image alt="object" className="-mt-20 md:-mt-32 right-5 lg:-mt-44 md:w-60 absolute lg:right-10 " src={ earth } />
            </div>
            <div className=' container py-10 text-white font-lato' >
                <div>
                    <h1 className=' font-kaoly text-PrimaryGreen py-1 px-6 bg-white w-fit rounded-lg text-lg lg:text-2xl' >Greenify</h1>
                </div>
                <div className='mt-10' >
                    <p className=' text-lg mb-4' >Pages</p>
                    <ul className="flex gap-x-3 md:gap-x-6 items-center text-sm" >
                            <li>Home</li>
                            <li>Shop</li>
                            <li>Categories</li>
                            <li>AboutUs</li>
                            <li>ContactUs</li>
                    </ul>
                </div>
                <div className="flex flex-col md:flex-row md:gap-x-14 lg:gap-x-20" >
                    <div className='mt-10' >
                        <p className=' text-lg mb-6' >Contact us</p>
                        <div className="flex flex-col gap-y-3 text-sm" >
                            <div className=" flex gap-x-5 items-center" >
                                <Image alt="phone_icon" className="w-4" src={ phone } />
                                <p className=" font-bold" >+91 123456789</p>
                            </div>
                            <div className=" flex gap-x-5 items-center" >
                                <Image alt="mail_icon" className="w-4" src={ mail } />
                                <p className=" font-bold" >info@greenify.com</p>
                            </div>
                            <div className=" flex gap-x-5 items-center" >
                                <Image alt="location_icon" className="w-4" src={ location } />
                                <p className=" font-bold" >102-Complex, Xyz Road City name, State, 136458</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-10 md:mt-20' >
                        <div className="flex gap-x-4" >
                            <Image alt="media_icon" src={ facebook } />
                            <Image alt="media_icon" src={ instagram } />
                            <Image alt="media_icon" src={ linkedin } />
                            <Image alt="media_icon" src={ twitter } />
                        </div>
                        <p className="my-5 text-sm" >terms & services</p>
                        <p className="text-sm" >Greenify @ all right reserved 2023</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
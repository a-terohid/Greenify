
import Image from "next/image";
import burgerMenu from "@/public/icons/burgerMenu.svg"
import cartNoti from "@/public/icons/Group 83.svg"
import profile from "@/public/icons/profile.svg"
import down from "@/public/icons/down.svg"

const Navbar = () => {

    return (
        <div className=' fixed z-30 bg-white w-full  ' >
            <div className=" container py-3 flex justify-between" >
                <div className=" flex gap-x-3 " >
                    <Image src={ burgerMenu } className=" w-4 lg:hidden" />
                    <h1 className=' font-kaoly text-PrimaryGreen text-lg lg:text-2xl' >Greenify</h1>
                </div>
                <div className="hidden lg:flex text-lg" >
                    <ul className="flex gap-x-5 items-center font-lato" >
                        <li>Home</li>
                        <li>Shop</li>
                        <li className="flex gap-x-1 items-center" >
                            <p>Categories</p>
                            <Image src={ down } className="w-3" />
                        </li>
                        <li>About us</li>
                        <li>Contact us</li>
                    </ul>
                </div>
                <div className=" flex gap-x-2 " >
                    <Image src={ cartNoti } className=" lg:w-6" />
                    <Image src={ profile } className=" lg:w-6" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
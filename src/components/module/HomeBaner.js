import Image from 'next/image';
import bannertotal from "@/public/icons/bannertotal.svg"
import lamp from "@/public/icons/lamp.svg"
import bannerR_Butterfly from "@/public/icons/bannerR-Butterfly.svg"
import bannerL_Butterfly from "@/public/icons/bannerL-Butterfly.svg"

const HomeBaner = () => {
    return (
        <div className='md:flex md:container md:mt-5 pb-52' >
            <div className=' container md:p-0 mt-5 md:mt-16' >
                <div className='flex flex-col items-center md:items-start gap-y-6  md:gap-y-10  '>
                    <div className='hidden md:flex justify-end w-full -ml-10 -mt-20 lg:-mt-12 mb-16' >
                            <Image src={ bannerR_Butterfly } alt="object"  className=' md:w-16 lg:w-20' />
                    </div>
                    <div className=' flex flex-col gap-y-3 items-center md:items-start font-montserrat text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:-mt-20' >
                        <h3 className=' font-bold' >Welcome to Greenify</h3>
                        <h3>Your Sustainable</h3>
                        <h3 className='font-bold text-PrimaryGreen' >Shopping Destination</h3>
                    </div>
                    <div className='flex flex-col items-center md:items-start justify-center text-xs md:text-sm lg:text-base' >
                        <p>Discover Sustainability. Embrace Greenify. </p>
                        <p>Your Eco-Friendly Haven for Conscious Shopping.</p>
                    </div>
                    <div className='hidden md:flex justify-end w-[250px] -mt-6' >
                        <Image src={ bannerL_Butterfly } alt="object" />
                    </div>
                    <button className=' px-9 py-2 bg-PrimaryGreen text-white rounded-lg border-b-4 border-NeutralGrey md:-mt-16' >SHOP NOW</button>
                    <div className='flex justify-between w-full container md:hidden' >
                        <Image src={ bannerL_Butterfly } alt="object"  className=' w-8 sm:w-12 sm:ml-10' />
                        <Image src={ bannerR_Butterfly } alt="object"  className=' w-12 sm:w-16 -mr-2 -mt-20 sm:-mt-48' />
                    </div>
                </div>
                <div className=' mt-32 hidden md:flex' >
                <Image alt="object"  src={ lamp } className=' -mt-24 w-52' />
            </div>
            </div>
            <div className='flex justify-end mt-12 md:-mt-12 md:flex right-0 md:w-3/4  ' >
                    <Image src={ bannertotal } alt="banner Img"  className=' w-2/3 md:w-full '/>
            </div>
            <div className=' mt-5 ml-4 md:hidden' >
                <Image alt="object"  src={ lamp } className=' -mt-24 w-1/4' />
            </div>
            <div className='flex items-center justify-center w-full md:hidden' >
                <div className=' w-1/3 h-1 rounded-xl bg-gray-500 ' ></div>
            </div>
        </div>
    );
};

export default HomeBaner;




import Image from 'next/image';
import bannerR_Butterfly from "@/public/icons/bannerR-Butterfly.svg"

const Aboutus = () => {
    return (
        <div className='pb-52 container text-center mt-14' >
            <div className='flex justify-end' >
                <Image src={ bannerR_Butterfly } alt="object"  className=' md:w-16 lg:w-20' />
            </div>
            <div  >
                <h1 className=' font-montserrat font-bold text-2xl lg:text-3xl' >About us</h1>
                <h2 className=' text-center my-8 font-kaoly text-PrimaryGreen py-1 px-6 bg-white rounded-lg text-lg lg:text-2xl' >Greenify</h2>
            </div>
            <div className=' font-lato flex flex-col gap-y-5' >
                <p className='text-xs md:text-sm'>At Greenify, we are more than just an e-commerce website; we are a passionate community dedicated to fostering a sustainable and eco-friendly lifestyle. Our mission is to empower environmentally conscious consumers by offering a curated selection of high-quality, sustainable products that inspire positive change and make a difference in the world.</p>
                <h4 className='font-bold md:text-lg' >Mission Statement</h4>
                <p className='text-xs md:text-sm'>"To be the leading platform for sustainable living, providing eco-friendly products and fostering a green community that promotes conscious consumption and environmental responsibility."</p>
                <h4 className='font-bold md:text-lg' >Vision Statement</h4>
                <p className='text-xs md:text-sm'>"To create a greener future for generations to come, where every choice matters, and sustainability is at the core of everyday living. We envision a world where eco-friendly practices are the norm, and together, we can make a significant impact on the health of our planet."</p>
            </div>
        </div>
    );
};

export default Aboutus;
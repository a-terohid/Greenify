import { bestSelling } from '@/public/data/bestSelling';
import Image from 'next/image';
import bigLeafL from "@/public/icons/bigLeafL.svg"
import bigLeafR from "@/public/icons/bigLeafR.svg"
import bannerR_Butterfly from "@/public/icons/bannerR-Butterfly.svg"

const BestSelling = () => {
    return (
        <div className='container mt-28 relative' >
            <div className='w-full flex justify-end'>
                <Image src={ bigLeafR } alt='icon' className='w-2/3 -z-10 -mt-56 absolute md:w-1/3  ' />
            </div>
            <div className='w-full md:flex hidden ' >
                <Image src={ bannerR_Butterfly } alt="object"  className=' md:w-16 lg:w-20 -mb-12 -ml-6' />
            </div>
            <div className='flex justify-center font-montserrat font-bold text-2xl lg:text-3xl text-center' >
                <h1>Our Best-Selling Sustainable Products</h1>
            </div>
            <div className='mt-10 flex  justify-center items-center gap-x-12 gap-y-10 flex-wrap' >
                {
                    bestSelling.map( ( item ) => (<div key={ item.id } className='w-[360px]  ' >
                        <Image src={ item.img } alt={ item.title } className='w-full rounded-2xl' />
                        <div className=' mt-6 font-lato' >
                            <h1 className='mb-5 font-bold ' >{ item.title }</h1>
                            <div className=' flex justify-between items-end' >
                                <div className='flex gap-x-2 items-end' >
                                    <p className='font-bold' >{ item.costWithOff } Rs.</p>
                                    <p className=' text-sm text-gray-500 line-through	' >{ item.cost } Rs.</p>
                                </div>
                                <p className='text-sm underline' >{ item.reviews } Reviews</p>
                            </div>
                            <div className='flex items-center justify-center mt-5' >
                                <button className=' px-9 py-2 bg-PrimaryGreen text-white rounded-lg border-b-4 border-NeutralGrey' >BUY NOW</button>
                            </div>
                        </div>
                    </div>))
                }
            </div>
            <div className=' flex items-center justify-center mt-10' >
                <button className=' px-9 py-2 bg-NeutralGrey text-white rounded-lg border-b-4 border-PrimaryGreen' >EXPLORE MORE</button>
            </div>
            <div className='w-full flex justify-start'>
                <Image src={ bigLeafL } alt='icon' className='w-2/3 -z-10 -mt-80  absolute md:w-1/3  ' />
            </div>
        </div>
    );
};

export default BestSelling;
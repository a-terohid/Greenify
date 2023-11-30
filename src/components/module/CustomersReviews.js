import { customers } from '@/public/data/customers';
import Image from 'next/image';
import stars from '@/public/icons/stars.svg';
import smile from '@/public/icons/smile.svg';
import circle from '@/public/icons/circle.svg';
import Leaf from '@/public/icons/2Leaf.svg';
import fan from '@/public/icons/fan.svg';


const CustomersReviews = () => {
    return (
        <div className=' container mt-5'>
            <div className='flex justify-between -mt-20' >
                <Image src={ circle } alt='icon' className='md:w-28 lg:w-32' />
                <Image src={ Leaf } alt='icon' className='md:w-28 lg:w-32' />
            </div>
            <div className='flex justify-center mb-6 font-montserrat font-bold text-2xl lg:text-3xl text-center' >
                <h1>Customer Reviews</h1>
            </div>
            <div className='flex overflow-auto gap-x-3 items-center' >
                {
                    customers.map( ( customer ) => (<div key={ customer.id } className='min-w-[290px] min-h-[430px]  font-lato p-4 rounded-xl border-2 border-PrimaryGreen' >
                        <div className='flex justify-end' >
                            <div className='w-6 h-6 bg-PrimaryGreen rounded-full'></div>
                        </div>
                        <div className='flex flex-col p-4 gap-y-4 text-center justify-center items-center' >
                            <Image src={ customer.img } alt={ customer.name } className=' rounded-full border-2 border-black' />
                            <h1 className='font-bold' >{ customer.name }</h1>
                            <p className='text-xs' >{ customer.review }</p>
                        </div>
                        <div className='flex justify-between mt-4' >
                        <Image src={ stars } alt='icon' />
                        <Image src={ smile } alt='icon' />
                        </div>
                    </div>) )
                }
            </div>
            <div className='flex justify-end mt-8 mr-7 lg:mr-20' >
                <Image src={ fan } alt='icon' className='md:w-28 w-20 lg:w-32' />
            </div>
        </div>
    );
};

export default CustomersReviews;
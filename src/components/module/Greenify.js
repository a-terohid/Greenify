import { greenify } from '@/public/data/Greenify';
import Image from 'next/image';
import React from 'react';

const Greenify = () => {
    return (
        <div className=' container pb-52 mt-14 ' >
            <div className='flex justify-center font-montserrat font-bold text-2xl' >
                <h1>Why Choose Greenify?</h1>
            </div>
            <div className='mt-10 flex  justify-center items-center gap-x-12 gap-y-10 flex-wrap' >
                {
                    greenify.map( ( item ) => ( <div key={ item.id } className='flex flex-col justify-center items-center text-center max-w-[250px]'  >
                        <Image src={ item.img} alt={ item.title } />
                        <h3 className=' text-xl font-bold font-montserrat mt-5 mb-3' >{ item.title }</h3>
                        <p className=' text-xs' >{ item.description }</p>
                    </div> ) )
                }
            </div>
        </div>
    );
};

export default Greenify;
import Image from 'next/image';
import React from 'react';

const BlogItem = ({blog}) => {
    return (
        <div className='bg-white rounded-2xl flex flex-col items-center font-lato pb-5 min-h-[460px] w-[300px]'>
            <Image src={ blog.img } alt={ blog.img } className='full rounded-2xl mb-5'/>
            <div className='flex flex-col items-center gap-y-10 px-6 text-center' >
                <h3 className='font-bold text-lg' >{ blog.title }</h3>
                <p className='text-sm' >{ blog.info }</p>
                <button className=' px-9 py-2 bg-PrimaryGreen text-white rounded-lg border-b-4 border-NeutralGrey' >READ MORE</button>
            </div>
        </div>
    );
};

export default BlogItem;
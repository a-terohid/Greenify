import BlogItem from '@/elements/BlogItem';
import { blogs } from '@/public/data/blogs';
import w_butter from "@/public/icons/w-butter.svg"
import Image from 'next/image';

const Blogs = () => {
    return (
        <div className=' bg-PrimaryGreen' >
            <div className=' container' >
                <div className=' absolute' >
                    <Image src={ w_butter } className='w-10 md:w-16  lg:w-24 ml-5 mt-4  md:mt-6  ' />
                </div>
                <div className=' py-10' >
                    <div className='text-center text-white font-montserrat' >
                        <h1 className='mb-6 font-montserrat font-bold text-2xl lg:text-3xl' >Blogs</h1>
                    </div>
                    <div className='flex flex-wrap gap-x-5 gap-y-10 items-start justify-center' >
                        {
                            blogs.map( (blog) => <BlogItem key={blog.id} blog={ blog } /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import bottomLeafGroup from "@/public/icons/bottomLeafGroup.svg"
import banner from "@/public/img/banner.png"
import bannerBorder from "@/public/icons/bannerBorder.svg"
import Image from "next/image";

const BannerImg = () => {
    return (
        <div >
            <div>
                {/* <div className=" absolute w-full flex items-center justify-center" > */}
                <Image src={ banner } className=" w-[ 10rem ] mt-8 ml-7" />
                {/* </div> */}
                <Image src={ bannerBorder } />
            </div>
        </div>
    );
};

export default BannerImg;
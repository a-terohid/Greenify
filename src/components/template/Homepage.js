import Aboutus from "@/module/Aboutus";
import BestSelling from "@/module/BestSelling";
import Greenify from "@/module/Greenify";
import HomeBaner from "@/module/HomeBaner";

const Homepage = () => {
    return (
        <div>
            <HomeBaner />
            <Greenify />
            <BestSelling />
            <Aboutus />
        </div>
    );
};

export default Homepage;
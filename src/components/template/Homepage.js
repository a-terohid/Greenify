import BestSelling from "@/module/BestSelling";
import Greenify from "@/module/Greenify";
import HomeBaner from "@/module/HomeBaner";

const Homepage = () => {
    return (
        <div>
            <HomeBaner />
            <Greenify />
            <BestSelling />
        </div>
    );
};

export default Homepage;
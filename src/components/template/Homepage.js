import Aboutus from "@/module/Aboutus";
import BestSelling from "@/module/BestSelling";
import CustomersReviews from "@/module/CustomersReviews";
import Greenify from "@/module/Greenify";
import HomeBaner from "@/module/HomeBaner";

const Homepage = () => {
    return (
        <div>
            <HomeBaner />
            <Greenify />
            <BestSelling />
            <Aboutus />
            <CustomersReviews />
        </div>
    );
};

export default Homepage;
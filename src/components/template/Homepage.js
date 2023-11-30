import Aboutus from "@/module/Aboutus";
import BestSelling from "@/module/BestSelling";
import Blogs from "@/module/Blogs";
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
            <Blogs />
        </div>
    );
};

export default Homepage;
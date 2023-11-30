import Aboutus from "@/module/Aboutus";
import BestSelling from "@/module/BestSelling";
import Blogs from "@/module/Blogs";
import CustomersReviews from "@/module/CustomersReviews";
import Greenify from "@/module/Greenify";
import HomeBaner from "@/module/HomeBaner";
import Subscribe from "@/module/Subscribe";

const Homepage = () => {
    return (
        <div>
            <HomeBaner />
            <Greenify />
            <BestSelling />
            <Aboutus />
            <CustomersReviews />
            <Blogs />
            <Subscribe />
        </div>
    );
};

export default Homepage;
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";
import RightSideNavbar from "../Shared/RightSideNavbar/RightSideNavbar";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";




const Home = () => {
    const allNews = useLoaderData()
    return (
        <div className="py-2">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
                <div >
                    <LeftSideNavbar></LeftSideNavbar>
                </div>
                <div className="md:col-span-2 ">
                    {
                        allNews.map(SingleNews => <NewsCard key={SingleNews._id} SingleNews={SingleNews}></NewsCard>)
                    }
                </div>
                <div >

                    <RightSideNavbar></RightSideNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;
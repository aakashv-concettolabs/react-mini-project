import "./home.css";
import Topbar from "../Components/topbar/Topbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import Rightbar from "../Components/Rightbar/Rightbar";
import Feed from "../Components/Feed/Feed";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};

export default Home;

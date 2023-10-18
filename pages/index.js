import LatestArticle from "../components/LatestArticle";
import Discover from "../components/Discover";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      
      {/* Navbar Section */}
      <Navbar />

      {/* Jumbotron Section */}
      <Jumbotron />

      {/* Discover Section */}
      {/* <div className="mx-auto sm:mx-36"> */}
      
        <Discover />

      {/* Article List Section */}
      <div className="mx-auto">
        <LatestArticle />
      </div>

      <div className="h-96 bg-quaternary mt-96"></div>
      
    </div>
  );
}

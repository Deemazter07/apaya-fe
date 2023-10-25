import LatestArticle from "../components/LatestArticle";
import Discover from "../components/Discover";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { getArticleList } from "@/controller/articles.controller";

export async function getServerSideProps() {
  const params = {
    pageNumber: 1,
    pageSize: 10,
  };

  const { data: articleList } = await getArticleList(params);

  // Pass data to the page via props
  return { props: { articles: articleList.data.rows } };
}

export default function Home({ articles }) {
  console.log(`data ${articles}`);
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
        <LatestArticle articles={articles} />
      </div>

      <div className="h-96 bg-quaternary mt-96"></div>
      
    </div>
  );
}

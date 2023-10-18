"use client";
import axios from "axios";
import React from "react";
import ArticleCard from "./card/ArticleCard";

export default function LatestArticle() {
  // const exampleData = ["1", "2", "3"];
  const exampleData = ["1", "2", "3", "4"];
  const [posts, setPosts] = React.useState();
  // console.log(`posts ${posts}`);
  React.useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => axios
    .get("https://dummyjson.com/posts")
    .then(function (response) {
      // handle success
      // console.log(response.data.posts);
      setPosts(response.data.posts);
    })
    .catch(function (error) {
      // handle error
      console.log(`err ${error}`);
    });
  return (
    <>
      <section className="container mx-auto mt-28">
        <h2 className="text-4xl font-PlayfairDisplay">Latest Articles</h2>
      
      <div className="h-auto py-10 overflow-x-scroll">
        <div className="flex ">
          {posts?.map((item, index) => (
            <div className={`${index === 0 ? "mr-10" : "mx-10"}`} key={index}>
              <ArticleCard
                title={item.title}
                description={
                  item.body
                }
                date={"10 Oct 2023"}
                image={`/images/sample-1.jpeg`}
              />
            </div>
          ))}
        </div>
      </div></section>
    </>
  );
}

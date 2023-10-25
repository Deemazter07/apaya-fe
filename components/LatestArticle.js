"use client";
import axios from "axios";
import React from "react";
import ArticleCard from "./card/ArticleCard";
import {
  reformatArticleContent,
  reformatArticleUploadDate,
} from "@/utils/utility";

export default function LatestArticle({ articles = [] }) {
  const exampleData = ["1", "2", "3", "4", "5"];

  function trimArticleTitle(title) {
    if (title.length >= 40) {
      title = `${title.substring(0, 40)}...`;
    }

    return title;
  }

  function trimArticleContent(content) {
    let cleanContent = reformatArticleContent(content);

    if (cleanContent.length >= 70) {
      cleanContent = `${cleanContent.substring(0, 70)}...`;
    }

    return cleanContent;
  }

  // const FetchData = () => axios
  //   .get("https://dummyjson.com/posts")
  //   .then(function (response) {
  //     // handle success
  //     // console.log(response.data.posts);
  //     setPosts(response.data.posts);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(`err ${error}`);
  //   });
  return (
    <>
      <section className="container mx-auto mt-28">
        <h2 className="text-4xl ml-4 md:ml-0 font-PlayfairDisplay">
          Artikel Terbaru
        </h2>
      </section>
      <div className="h-auto py-10 overflow-x-scroll">
        <div className="flex ml-4 md:ml-20">
          {articles.map((item, index) => (
            <div className={`${index === 0 ? "mr-10" : "mx-10"}`} key={index}>
              <ArticleCard
                title={trimArticleTitle(item.title)}
                description={trimArticleContent(item.content)}
                date={reformatArticleUploadDate(item.created_at)}
                image={`${item.thumbnail.storage}${item.thumbnail.path}`}
                // image={`/images/sample-${item}.jpeg`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

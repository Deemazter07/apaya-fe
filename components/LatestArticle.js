import React from "react";
import ArticleCard from "./card/ArticleCard";

export default function LatestArticle() {
  // const exampleData = ["1", "2", "3"];
  const exampleData = ["1", "2", "3", "4"];

  return (
    <>
      <section className="container mx-auto mt-28">
        <h2 className="text-4xl font-PlayfairDisplay mb-12">Latest Articles</h2>
      </section>
      <div className="flex ml-4 md:ml-20 overflow-x-auto overflow-y-visible bg-purple-100">
        {exampleData.map((item, index) => (
          <div className={`${index === 0 ? "mr-10" : "mx-10"}`} key={index}>
            <ArticleCard
              title={"Noteworthy technology acquisitions"}
              description={
                "Here are the biggest enterprise technology acquisitions of 2021 so far"
              }
              date={"10 Oct 2023"}
              image={`/images/sample-${item}.jpeg`}
            />
          </div>
        ))}
      </div>
    </>
  );
}

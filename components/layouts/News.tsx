"use client";

import React, { useEffect } from "react";

interface ArticleProp {
  title?: string;
  url?: string;
  urlToImage?: string;
  description?: string;
  content?: string;
  publishedAt?: string;
  source?: {
    id: string;
    name: string;
  };
  author?: string;
}

const News = () => {
  const [news, setNews] = React.useState([]);
  const [articleNum, setArticleNum] = React.useState(3);

  useEffect(() => {
    fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data.articles);
      });
  }, []);

  return (
    <div className="text-gray-700 bg-gray-100 pt-2 space-y-3 rounded-xl">
      <h4 className="font-bold text-xl px-4">What&apos;s happening</h4>
      {news.slice(0, articleNum).map((article: ArticleProp) => (
        <div key={article.url}>
          <a href={article.url} target="_blank">
            <div className="flex items-center space-x-1 px-4 py-2 hover:bg-gray-200 transition duration-200">
              <div className="space-y-0.5">
                <h6 className="text-sm font-bold">{article.title}</h6>
                <p className="text-xs font-medium text-gray-500">
                  {article.source?.name}
                </p>
              </div>

              <img
                src={article.urlToImage!}
                width={50}
                className="rounded-xl"
              />
            </div>
          </a>
        </div>
      ))}

      <button
        onClick={() => setArticleNum(articleNum + 3)}
        className="text-sm text-blue-300 pl-4 pb-3 hover:text-blue-400"
      >
        Load more
      </button>
    </div>
  );
};

export default News;

import React from "react";
import NewsItem from "../NewsItem/NewsItem";
import "./NewsList.scss"; 
interface News {
  id: string;
  title: string;
  text: string;
  userEmail: string;
}

interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  return (
    <div className="news-list">
      {news.map((item) => (
        <NewsItem key={item.id} news={item} />
      ))}
    </div>
  );
};

export default NewsList;
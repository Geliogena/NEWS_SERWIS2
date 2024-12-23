import React from "react";
import { Link } from "react-router-dom";
import "./NewsItem.scss"; 

interface News {
  id: string;
  title: string;
  text: string;
  userEmail: string;
}

interface NewsItemProps {
  news: News;
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <div className="news-item">
      <h2 className="news-item__title">
        <Link to={`/news/${news.id}`}>{news.title}</Link>
      </h2>
      <p className="news-item__snippet">
        {news.text.length > 100 ? `${news.text.slice(0, 100)}...` : news.text}
      </p>
      <small className="news-item__author">Автор: {news.userEmail}</small>
    </div>
  );
};

export default NewsItem;
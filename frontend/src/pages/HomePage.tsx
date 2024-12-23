import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface News {
  id: string;
  title: string;
  text: string;
  userEmail: string;
}

function HomePage() {
  const [news, setNews] = useState<News[]>([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/news`)
      .then(response => {
        console.log("Новини отримано:", response.data);
        setNews(response.data);
      })
      .catch(error => {
        console.error("Помилка отримання новин:", error.response || error.message);
      });
  }, []);

  return (
    <div>
      <h1>Новини</h1>
      <Link to="/login">Увійти</Link>
      <Link to="/add">Додати новину</Link>
      <div>
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <h2>
              <Link to={`/news/${item.id}`}>{item.title}</Link>
            </h2>
            <p className="news-snippet">
              {item.text.length > 100 ? `${item.text.slice(0, 100)}...` : item.text}
            </p>
            <small>Автор: {item.userEmail}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
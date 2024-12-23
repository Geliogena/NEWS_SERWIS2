import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

interface News {
  id: string;
  title: string;
  text: string;
  userEmail: string;
}

function NewsDetails() {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState<News | null>(null);

  useEffect(() => {
    axios.get(`/api/news/${id}`)
      .then(response => setNewsItem(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!newsItem) return <p>Завантаження...</p>;

  return (
    <div>
      <h1>{newsItem.title}</h1>
      <p>{newsItem.text}</p>
      <small>Автор: {newsItem.userEmail}</small>
      <Link to={`/edit/${id}`}>Редагувати</Link>
      <Link to="/">Повернутись до списку новин</Link>
    </div>
  );
}

export default NewsDetails;
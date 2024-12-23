import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsForm.scss";

interface NewsFormProps {
  onSubmit: (data: { title: string; text: string }) => void;
  initialData?: { title: string; text: string };
}

const NewsForm: React.FC<NewsFormProps> = ({ onSubmit, initialData }) => {
  const [title, setTitle] = useState(initialData?.title || "");
  const [text, setText] = useState(initialData?.text || "");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, text });
    navigate("/"); 
  };

  return (
    <form className="news-form" onSubmit={handleSubmit}>
      <div className="news-form__group">
        <label htmlFor="title" className="news-form__label">Заголовок</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="news-form__input"
        />
      </div>
      <div className="news-form__group">
        <label htmlFor="text" className="news-form__label">Текст</label>
        <textarea
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="news-form__textarea"
        />
      </div>
      <button type="submit" className="news-form__button">Зберегти</button>
    </form>
  );
};

export default NewsForm;
       
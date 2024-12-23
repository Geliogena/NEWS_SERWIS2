import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddEditNews: React.FC = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/news`,
        { title, text },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      navigate("/");
    } catch (error) {
      console.error("Помилка додавання новини:", error);
    }
  };

  return (
    <div>
      <h1>Додати новину</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Текст новини"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Додати</button>
      </form>
    </div>
  );
};

export default AddEditNews;
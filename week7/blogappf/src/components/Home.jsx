import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config/api";
import {
  articleCardClass,
  articleGrid,
  articleTitle,
  ghostBtn,
  loadingClass,
  errorClass,
  timestampClass,
} from "../styles/common.js";

function Home() {
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await axios.get(`${API_URL}/user-api/articles`);

        if (res.status === 200) {
          setArticles(res.data.payload);
        }
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    getArticles();
  }, []);

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const openArticle = (article) => {
    navigate(`/article/${article._id}`, {
      state: article,
    });
  };

  if (loading) {
    return <p className={loadingClass}>Loading articles...</p>;
  }

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1d1d1f] tracking-tight">
          Latest Articles
        </h1>
        <p className="text-sm text-[#6e6e73] mt-2">
          Read published articles from our authors.
        </p>
      </div>

      {error && <p className={errorClass}>{error}</p>}

      {!error && articles.length === 0 ? (
        <p className="text-[#a1a1a6] text-sm text-center py-10">
          No articles available yet
        </p>
      ) : (
        <div className={articleGrid}>
          {articles.map((article) => (
            <article className={articleCardClass} key={article._id}>
              <div className="flex flex-col h-full">
                <div>
                  <p className={articleTitle}>{article.title}</p>

                  <p className="text-sm text-[#6e6e73] mt-1">
                    {article.content.slice(0, 80)}...
                  </p>

                  <p className={`${timestampClass} mt-2`}>
                    {formatDateIST(article.createdAt)}
                  </p>
                </div>

                <button
                  className={`${ghostBtn} mt-auto pt-4 text-left`}
                  onClick={() => openArticle(article)}
                >
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}

export default Home;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { API_URL } from "../config/api";
import {
  articleCardClass,
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
    <main className="bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <section className="border-b border-[#e8e8ed] pb-8 mb-8">
          <p className="text-xs font-semibold uppercase text-[#0066cc] mb-3">
            MyBlog Journal
          </p>
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#1d1d1f] leading-tight">
                Fresh ideas, stories, and notes from our authors.
              </h1>
              <p className="text-base text-[#6e6e73] mt-4 max-w-2xl leading-relaxed">
                Explore the latest published articles without signing in.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#f5f5f7] p-5">
                <p className="text-3xl font-bold text-[#1d1d1f]">
                  {articles.length}
                </p>
                <p className="text-sm text-[#6e6e73] mt-1">
                  Articles live
                </p>
              </div>
              <div className="bg-[#f5f5f7] p-5">
                <p className="text-3xl font-bold text-[#1d1d1f]">
                  {new Set(articles.map((article) => article.category)).size}
                </p>
                <p className="text-sm text-[#6e6e73] mt-1">
                  Categories
                </p>
              </div>
            </div>
          </div>
        </section>

        {error && <p className={errorClass}>{error}</p>}

        {!error && articles.length === 0 && (
          <p className="text-[#a1a1a6] text-sm text-center py-10">
            No articles available yet
          </p>
        )}

        {!error && articles.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-[#1d1d1f]">
                Latest Articles
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {articles.map((article) => (
                <article
                  className={`${articleCardClass} border border-[#e8e8ed]`}
                  key={article._id}
                >
                  <div className="flex flex-col h-full">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="text-xs text-[#0066cc] bg-white px-3 py-1 rounded-full">
                          {article.category}
                        </span>
                      </div>

                      <p className={articleTitle}>{article.title}</p>

                      <p className="text-sm text-[#6e6e73] mt-2 leading-relaxed">
                        {article.content.slice(0, 90)}...
                      </p>

                      <p className={`${timestampClass} mt-3`}>
                        {formatDateIST(article.createdAt)}
                      </p>
                    </div>

                    <button
                      className={`${ghostBtn} mt-auto pt-5 text-left`}
                      onClick={() => openArticle(article)}
                    >
                      Read Article
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

export default Home;

import { useParams, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { API_URL } from "../config/api";
import {
  articlePageWrapper,
  articleHeader,
  articleCategory,
  articleMainTitle,
  articleAuthorRow,
  authorInfo,
  articleContent,
  articleFooter,
  articleActions,
  editBtn,
  deleteBtn,
  loadingClass,
  errorClass,
  inputClass,
  commentsWrapper,
  commentCard,
  commentHeader,
  commentUserRow,
  avatar,
  commentUser,
  commentTime,
  commentText,
} from "../styles/common.js";
import { useForm } from "react-hook-form";

function ArticleById() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const user = useAuth((state) => state.currentUser);

  const [article, setArticle] = useState(location.state || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // get article
  useEffect(() => {
    if (article) return;

    const getArticle = async () => {
      setLoading(true);

      try {
        const res = await axios.get(
          `${API_URL}/user-api/article/${id}`,
          {
            withCredentials: true,
          }
        );

        setArticle(res.data.payload);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    getArticle();
  }, [id]);

  // format date
  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  // delete/restore article
  const toggleArticleStatus = async () => {
    const newStatus = !article.isArticleActive;

    const confirmMsg = newStatus
      ? "Restore this article?"
      : "Delete this article?";

    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axios.patch(
        `${API_URL}/author-api/articles`,
        {
          articleId: article._id,
          isArticleActive: newStatus,
        },
        {
          withCredentials: true,
        }
      );

      setArticle(res.data.payload);
    } catch (err) {
      setError(err.response?.data?.message || "Operation failed");
    }
  };

  // edit article
  const editArticle = (articleObj) => {
    navigate("/edit-article", {
      state: articleObj,
    });
  };

  // add comment
  const addComment = async (commentObj) => {
    try {
      commentObj.articleId = article._id;

      const res = await axios.put(
        `${API_URL}/user-api/articles`,
        commentObj,
        {
          withCredentials: true,
        }
      );

      if (res.status === 200) {
        setArticle(res.data.payload);
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (loading)
    return <p className={loadingClass}>Loading article...</p>;

  if (error)
    return <p className={errorClass}>{error}</p>;

  if (!article) return null;

  return (
    <div className={articlePageWrapper}>

      {/* HEADER */}
      <div className={articleHeader}>
        <span className={articleCategory}>
          {article.category}
        </span>

        <h1 className={`${articleMainTitle} uppercase`}>
          {article.title}
        </h1>

        <div className={articleAuthorRow}>
          <div className={authorInfo}>
            ✍️ {article.authorData?.name || "Author"}
          </div>

          <div>
            {formatDate(article.createdAt)}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className={articleContent}>
        {article.content}
      </div>

      {/* AUTHOR ONLY */}
      {user?.role?.toLowerCase() === "author" && (
        <div className={articleActions}>
          <button
            className={editBtn}
            onClick={() => editArticle(article)}
          >
            Edit
          </button>

          <button
            className={deleteBtn}
            onClick={toggleArticleStatus}
          >
            {article.isArticleActive ? "Delete" : "Restore"}
          </button>
        </div>
      )}

      {/* USER ONLY COMMENT */}
      {user?.role?.toLowerCase() === "user" && (
        <div className={articleActions}>
          <form onSubmit={handleSubmit(addComment)}>
            <input
              type="text"
              {...register("comment", {
                required: true,
              })}
              className={inputClass}
              placeholder="Write your comment here..."
            />

            <button
              type="submit"
              className="bg-amber-600 text-white px-5 py-2 rounded-2xl mt-5"
            >
              Add Comment
            </button>
          </form>
        </div>
      )}

      {/* COMMENTS */}
      <div className={commentsWrapper}>
        {article.comments?.length === 0 && (
          <p className="text-[#a1a1a6] text-sm text-center">
            No comments yet
          </p>
        )}

        {article.comments?.map((commentObj, index) => {
          const name = commentObj.user?.email || "User";
          const firstLetter = name.charAt(0).toUpperCase();

          return (
            <div key={index} className={commentCard}>

              {/* COMMENT HEADER */}
              <div className={commentHeader}>
                <div className={commentUserRow}>
                  <div className={avatar}>
                    {firstLetter}
                  </div>

                  <div>
                    <p className={commentUser}>
                      {name}
                    </p>

                    <p className={commentTime}>
                      {formatDate(
                        commentObj.createdAt || new Date()
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* COMMENT */}
              <p className={commentText}>
                {commentObj.comment}
              </p>
            </div>
          );
        })}
      </div>

      {/* FOOTER */}
      <div className={articleFooter}>
        Last updated: {formatDate(article.updatedAt)}
      </div>
    </div>
  );
}

export default ArticleById;

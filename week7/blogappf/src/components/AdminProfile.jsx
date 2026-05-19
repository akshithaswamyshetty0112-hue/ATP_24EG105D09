import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import { API_URL } from "../config/api";
import {
  pageBackground,
  pageWrapper,
  headingClass,
  cardClass,
  mutedText,
  primaryBtn,
  secondaryBtn,
  errorClass,
  successClass,
  emptyStateClass,
} from "../styles/common";

function AdminProfile() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();
  const [managedAccounts, setManagedAccounts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [articlesLoading, setArticlesLoading] = useState(true);
  const [error, setError] = useState(null);
  const [articlesError, setArticlesError] = useState(null);

  const fetchAccounts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/admin-api/users`, {
        withCredentials: true,
      });
      setManagedAccounts(res.data.payload.users || []);
      setStats(res.data.payload.stats || null);
      setError(null);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Could not load admin data");
    } finally {
      setLoading(false);
    }
  };

  const fetchArticles = async () => {
    try {
      setArticlesLoading(true);
      const res = await axios.get(`${API_URL}/admin-api/articles`, {
        withCredentials: true,
      });
      setArticles(res.data.payload || []);
      setArticlesError(null);
    } catch (err) {
      console.error(err);
      setArticlesError(
        err.response?.data?.message || "Could not load articles",
      );
    } finally {
      setArticlesLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
    fetchArticles();
  }, []);

  const toggleStatus = async (account) => {
    try {
      const updatedStatus = !account.isUserActive;
      await axios.patch(
        `${API_URL}/admin-api/users/${account._id}/status`,
        { isUserActive: updatedStatus },
        { withCredentials: true },
      );
      toast.success(
        `${account.role} ${updatedStatus ? "unblocked" : "blocked"} successfully`,
      );
      fetchAccounts();
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Could not update account status",
      );
    }
  };

  const onLogout = async () => {
    await logout();
    navigate("/login");
  };

  const toggleArticleStatus = async (article) => {
    const nextStatus = !article.isArticleActive;
    const confirmMsg = nextStatus
      ? "Restore this article?"
      : "Delete this article?";

    if (!window.confirm(confirmMsg)) return;

    try {
      const res = await axios.patch(
        `${API_URL}/admin-api/articles/${article._id}/status`,
        { isArticleActive: nextStatus },
        { withCredentials: true },
      );

      setArticles((currentArticles) =>
        currentArticles.map((currentArticle) =>
          currentArticle._id === article._id ? res.data.payload : currentArticle,
        ),
      );
      toast.success(nextStatus ? "Article restored" : "Article deleted");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Could not update article");
    }
  };

  const deleteComment = async (articleId, commentId) => {
    if (!window.confirm("Delete this comment?")) return;

    try {
      const res = await axios.delete(
        `${API_URL}/admin-api/articles/${articleId}/comments/${commentId}`,
        { withCredentials: true },
      );

      setArticles((currentArticles) =>
        currentArticles.map((article) =>
          article._id === articleId ? res.data.payload : article,
        ),
      );
      toast.success("Comment deleted");
    } catch (err) {
      console.error(err);
      toast.error(err.response?.data?.message || "Could not delete comment");
    }
  };

  const formatDateIST = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  return (
    <div className={`${pageBackground} py-12`}>
      <div className={pageWrapper}>
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className={headingClass}>Admin Dashboard</h1>
            <p className={mutedText}>
              Welcome back, {currentUser?.firstName} {currentUser?.lastName}.
              Manage users and authors from here.
            </p>
          </div>

          <button
            onClick={onLogout}
            className="bg-[#ff3b30] text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#d62c23] transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-4 mb-8">
          <div className={`${cardClass} p-6`}>
            <h2 className="text-sm font-semibold text-[#6e6e73] uppercase tracking-[0.18em] mb-2">
              Total accounts
            </h2>
            <p className="text-4xl font-bold text-[#1d1d1f]">
              {stats?.totalAccounts ?? "--"}
            </p>
          </div>
          <div className={`${cardClass} p-6`}>
            <h2 className="text-sm font-semibold text-[#6e6e73] uppercase tracking-[0.18em] mb-2">
              Authors
            </h2>
            <p className="text-4xl font-bold text-[#1d1d1f]">
              {stats?.totalAuthors ?? "--"}
            </p>
          </div>
          <div className={`${cardClass} p-6`}>
            <h2 className="text-sm font-semibold text-[#6e6e73] uppercase tracking-[0.18em] mb-2">
              Users
            </h2>
            <p className="text-4xl font-bold text-[#1d1d1f]">
              {stats?.totalUsers ?? "--"}
            </p>
          </div>
          <div className={`${cardClass} p-6`}>
            <h2 className="text-sm font-semibold text-[#6e6e73] uppercase tracking-[0.18em] mb-2">
              Blocked accounts
            </h2>
            <p className="text-4xl font-bold text-[#1d1d1f]">
              {stats?.blockedAccounts ?? "--"}
            </p>
          </div>
        </div>

        <div className={`${cardClass} p-6 mb-8`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h2 className={headingClass}>Articles and comments</h2>
              <p className={mutedText}>
                Review all articles, hide or restore articles, and remove
                comments when needed.
              </p>
            </div>
            <button onClick={fetchArticles} className={secondaryBtn}>
              Refresh articles
            </button>
          </div>

          {articlesLoading && <p className={mutedText}>Loading articles...</p>}
          {articlesError && <p className={errorClass}>{articlesError}</p>}

          {!articlesLoading && !articlesError && articles.length === 0 && (
            <p className={emptyStateClass}>No articles available yet.</p>
          )}

          {!articlesLoading && !articlesError && articles.length > 0 && (
            <div className="space-y-5">
              {articles.map((article) => {
                const authorName = article.author
                  ? `${article.author.firstName || ""} ${article.author.lastName || ""}`.trim()
                  : "Unknown author";

                return (
                  <div
                    key={article._id}
                    className="bg-white border border-[#e8e8ed] p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-[#0066cc] bg-[#0066cc]/10 px-3 py-1 rounded-full">
                            {article.category}
                          </span>
                          <span
                            className={
                              article.isArticleActive
                                ? "text-xs font-semibold text-[#248a3d] bg-[#34c759]/10 px-3 py-1 rounded-full"
                                : "text-xs font-semibold text-[#cc2f26] bg-[#ff3b30]/10 px-3 py-1 rounded-full"
                            }
                          >
                            {article.isArticleActive ? "Active" : "Deleted"}
                          </span>
                        </div>

                        <h3 className="text-lg font-semibold text-[#1d1d1f]">
                          {article.title}
                        </h3>
                        <p className="text-sm text-[#6e6e73] mt-1">
                          By {authorName || "Unknown author"} |{" "}
                          {formatDateIST(article.createdAt)}
                        </p>
                        <p className="text-sm text-[#6e6e73] mt-3 leading-relaxed">
                          {article.content.slice(0, 140)}...
                        </p>
                      </div>

                      <button
                        onClick={() => toggleArticleStatus(article)}
                        className={`${primaryBtn} ${
                          article.isArticleActive
                            ? "bg-[#ff3b30] hover:bg-[#d62c23]"
                            : "bg-[#0066cc] hover:bg-[#004499]"
                        }`}
                      >
                        {article.isArticleActive ? "Delete article" : "Restore"}
                      </button>
                    </div>

                    <div className="mt-5 border-t border-[#e8e8ed] pt-4">
                      <h4 className="text-sm font-semibold text-[#1d1d1f] mb-3">
                        Comments ({article.comments?.length || 0})
                      </h4>

                      {article.comments?.length === 0 && (
                        <p className={mutedText}>No comments yet.</p>
                      )}

                      {article.comments?.length > 0 && (
                        <div className="space-y-3">
                          {article.comments.map((comment) => {
                            const commenter = comment.user?.email || "User";

                            return (
                              <div
                                key={comment._id}
                                className="bg-[#f5f5f7] p-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                              >
                                <div>
                                  <p className="text-sm font-semibold text-[#1d1d1f]">
                                    {commenter}
                                  </p>
                                  <p className="text-sm text-[#6e6e73] mt-1">
                                    {comment.comment}
                                  </p>
                                </div>

                                <button
                                  onClick={() =>
                                    deleteComment(article._id, comment._id)
                                  }
                                  className="text-sm font-semibold text-[#ff3b30] hover:text-[#d62c23]"
                                >
                                  Delete comment
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className={`${cardClass} p-6`}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
            <div>
              <h2 className={headingClass}>Managed accounts</h2>
              <p className={mutedText}>
                Block or unblock registered users and authors.
              </p>
            </div>
            <button onClick={fetchAccounts} className={secondaryBtn}>
              Refresh list
            </button>
          </div>

          {loading && <p className={mutedText}>Loading accounts...</p>}
          {error && <p className={errorClass}>{error}</p>}

          {!loading && !error && managedAccounts.length === 0 && (
            <p className={emptyStateClass}>
              No users or authors to manage yet.
            </p>
          )}

          {!loading && !error && managedAccounts.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left border-separate border-spacing-y-3">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                      Name
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                      Role
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                      Email
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                      Status
                    </th>
                    <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {managedAccounts.map((account) => (
                    <tr
                      key={account._id}
                      className="bg-white border border-[#e8e8ed] rounded-3xl"
                    >
                      <td className="px-4 py-4 text-sm font-medium text-[#1d1d1f]">
                        {account.firstName} {account.lastName}
                      </td>
                      <td className="px-4 py-4 text-sm text-[#6e6e73]">
                        {account.role}
                      </td>
                      <td className="px-4 py-4 text-sm text-[#6e6e73]">
                        {account.email}
                      </td>
                      <td className="px-4 py-4 text-sm">
                        <span
                          className={
                            account.isUserActive ? successClass : errorClass
                          }
                        >
                          {account.isUserActive ? "Active" : "Blocked"}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          onClick={() => toggleStatus(account)}
                          className={`${primaryBtn} ${account.isUserActive ? "bg-[#ff3b30] hover:bg-[#d62c23]" : "bg-[#0066cc] hover:bg-[#004499]"}`}
                        >
                          {account.isUserActive ? "Block" : "Unblock"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;

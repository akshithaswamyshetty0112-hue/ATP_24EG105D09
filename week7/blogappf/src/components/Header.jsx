import { NavLink } from "react-router";
import { useAuth } from "../store/authStore";

import {
  navbarClass,
  navContainerClass,
  navBrandClass,
  navLinksClass,
  navLinkClass,
  navLinkActiveClass,
} from "../styles/common";

function Header() {

  const isAuthenticated = useAuth(
    (state) => state.isAuthenticated
  );

  const user = useAuth(
    (state) => state.currentUser
  );

  // profile route
  const getProfilePath = () => {

    if (!user) return "/";

    switch (
      user.role?.toLowerCase()
    ) {

      case "author":
        return "/author-profile";

      case "admin":
        return "/admin-profile";

      default:
        return "/user-profile";
    }
  };

  // write article route
  const getWritePath = () => {

    if (
      !user ||
      user.role?.toLowerCase() !== "author"
    ) {
      return null;
    }

    return "/author-profile/write-article";
  };

  return (
    <nav className={navbarClass}>

      <div className={navContainerClass}>

        {/* LOGO */}
        <NavLink
          to="/"
          className={navBrandClass}
        >
          MyBlog
        </NavLink>

        <ul className={navLinksClass}>

          {/* HOME */}
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? navLinkActiveClass
                  : navLinkClass
              }
            >
              Home
            </NavLink>
          </li>

          {/* NOT LOGGED IN */}
          {!isAuthenticated && (
            <>

              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    isActive
                      ? navLinkActiveClass
                      : navLinkClass
                  }
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? navLinkActiveClass
                      : navLinkClass
                  }
                >
                  Login
                </NavLink>
              </li>

            </>
          )}

          {/* LOGGED IN */}
          {isAuthenticated && (
            <>

              {/* USER */}
              {user?.role?.toLowerCase() === "user" && (
                <li>
                  <NavLink
                    to="/user-profile"
                    className={({ isActive }) =>
                      isActive
                        ? navLinkActiveClass
                        : navLinkClass
                    }
                  >
                    Articles
                  </NavLink>
                </li>
              )}

              {/* AUTHOR */}
              {user?.role?.toLowerCase() === "author" && (
                <>
                  <li>
                    <NavLink
                      to="/author-profile"
                      className={({ isActive }) =>
                        isActive
                          ? navLinkActiveClass
                          : navLinkClass
                      }
                    >
                      Profile
                    </NavLink>
                  </li>

                  {/* WRITE ARTICLE */}
                  {getWritePath() && (
                    <li>
                      <NavLink
                        to={getWritePath()}
                        className={({ isActive }) =>
                          isActive
                            ? navLinkActiveClass
                            : navLinkClass
                        }
                      >
                        Write Article
                      </NavLink>
                    </li>
                  )}
                </>
              )}

              {/* ADMIN */}
              {user?.role?.toLowerCase() === "admin" && (
                <li>
                  <NavLink
                    to="/admin-profile"
                    className={({ isActive }) =>
                      isActive
                        ? navLinkActiveClass
                        : navLinkClass
                    }
                  >
                    Admin
                  </NavLink>
                </li>
              )}

            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default Header;
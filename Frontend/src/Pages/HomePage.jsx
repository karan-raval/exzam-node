import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-solid-svg-icons";
import user3 from "../assets/images/user-01.jpg";
import lamp from "../assets/images/lamp-400.jpg";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../App.css";
import Popularpost from "../Components/Popularpost";
import axios from "axios";

import { Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]); 

  const handleLike = async (blogId) => {
    try {
      const response = await fetch(`http://localhost:5010/${blogId}/like`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ userId: localStorage.getItem("UserId") }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.msg);
        return;
      }

      const updatedBlog = await response.json();
      setBlogs((prevBlogs) =>
        prevBlogs.map((blog) =>
          blog._id === updatedBlog._id ? updatedBlog : blog
        )
      );
    } catch (error) {
      console.error("Error liking the blog:", error);
    }
  };


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:5010/allBlogs"); // Adjust the URL as needed
        if (!response.ok) {
          throw new Error("Failed to fetch blogs");
        }
        const data = await response.json();
        console.log(data);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <section className="s-pageheader s-pageheader--home">
        <Header />
        <div className="pageheader-content row">
          <div className="col-full">
            <div className="featured">
              <div className="featured__column featured__column--big">
                <div className="entry bg1">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Music</a>
                    </span>

                    <h1>
                      <a>
                        What Your Music Preference Says About You and Your
                        Personality.
                      </a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 29, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="featured__column featured__column--small">
                <div className="entry bg2">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>Management</a>
                    </span>

                    <h1>
                      <a>The Pomodoro Technique Really Works.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 27, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="entry bg3">
                  <div className="entry__content">
                    <span className="entry__category">
                      <a>LifeStyle</a>
                    </span>

                    <h1>
                      <a title="">Throwback To The Good Old Days.</a>
                    </h1>

                    <div className="entry__info">
                      <a className="entry__profile-pic">
                        <img className="avatar" src={user3} alt="" />
                      </a>

                      <ul className="entry__meta">
                        <li>
                          <a>John Doe</a>
                        </li>
                        <li>December 21, 2017</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s-content">
        <div className="row masonry-wrap">
          <div className="masonry" id="sy3">
            <div className="grid-sizer"></div>

            {blogs.map((el) => (
              <article
                key={el.id}
                className="masonry__brick entry format-standard aos-init aos-animate"
                data-aos="fade-up"
                id={`sy${el.id}`}
              >
                <div className="entry__thumb">
                  <Link to={`/allblogs/${el._id}`} className="entry__thumb-link">
                    <img src={el.image} alt="" />
                  </Link>
                </div>

                <div className="entry__text">
                  <div className="entry__header">
                    <div className="entry__date">
                      <a>{el.date}</a>
                    </div>
                    <h1 className="entry__title"><Flex maxW="300px">
                      <Text truncate>
                        {el.title}
                      </Text>
                    </Flex>

                    </h1>
                  </div>
                  <div className="entry__excerpt">
                    <p>
                      <Flex maxW="300px">
                        <Text lineClamp="2">
                          {el.description}
                        </Text>
                      </Flex>

                    </p>
                  </div>
                  <br />
                  <div className="entry__meta">
                    <span className="entry__meta-links">
                      <a>{el.category}</a>
                    </span>
                  </div>
                  <br /><br />
                  <div className="entry__actions">
                    <FontAwesomeIcon
                      icon={faHeart}
                      onClick={() => handleLike(el._id)}
                      style={{
                        cursor: 'pointer',
                        color: el.likedBy.includes(localStorage.getItem("UserId")) ? 'red' : 'black',
                      }}
                    />
                    <span style={{ marginLeft: '8px' }}>{el.like} Likes</span>
                    <FontAwesomeIcon
                      icon={faBookmark}
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Popularpost />
      <Footer />
    </>
  );
};

export default HomePage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const SingleBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5010/allblogs/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        setBlog(data);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className="container mt-5">
        {/* Blog Content */}
        <div className="card mb-5 shadow">
          <img
            src={blog.image}
            className="card-img-top"
            alt={blog.title}
            style={{ maxHeight: "400px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h1 className="card-title text-center">{blog.title}</h1>
            <p className="card-text text-center text-muted">
              <small>
                Published on {blog.date} | Category:{" "}
                <span className="text-primary">{blog.category}</span>
              </small>
            </p>
            <p className="lead">{blog.description}</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="comments-section mb-5">
          <h2 className="text-center mb-4">Comments</h2>
          <div className="list-group">
            {/* Sample Comments */}
            <div className="list-group-item">
              <div className="d-flex align-items-start">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h5 className="mb-1">John Doe</h5>
                  <small className="text-muted">Dec 16, 2017 @ 23:05</small>
                  <p className="mb-1 mt-2">
                    Duis sed odio sit amet nibh vulputate cursus a sit amet
                    mauris. Morbi accumsan ipsum velit.
                  </p>
                  <a href="#" className="text-primary">
                    Reply
                  </a>
                </div>
              </div>
            </div>

            {/* More Comments */}
            <div className="list-group-item">
              <div className="d-flex align-items-start">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="rounded-circle me-3"
                  width="50"
                  height="50"
                />
                <div>
                  <h5 className="mb-1">Jane Doe</h5>
                  <small className="text-muted">Dec 16, 2017 @ 24:05</small>
                  <p className="mb-1 mt-2">
                    Duis sed odio sit amet nibh vulputate cursus a sit amet
                    mauris.
                  </p>
                  <a href="#" className="text-primary">
                    Reply
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Comment Form */}
        <div className="card shadow">
          <div className="card-body">
            <h3 className="card-title text-center mb-4">Add a Comment</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Comment
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your comment here..."
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default SingleBlog;

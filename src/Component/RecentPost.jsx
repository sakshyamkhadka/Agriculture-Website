import React from 'react';
import { FaUser, FaTag, FaArrowRight } from 'react-icons/fa';
import '../Styles/Recentpost.css';

const RecentPosts = () => {
    

    const posts = [
        {
            id: 1,
            title: "Necessitatibus eius consequatur",
            date: "DECEMBER 12",
            excerpt: "Eum ad dolor et. Autem aut fugiat debitis",
            author: "Julia Parker",
            category: "Politics",
            readMoreLink: "./blog",
            image: "https://images.unsplash.com/photo-1637589308599-3478cc55510d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1296"
        },
        {
            id: 2,
            title: "Et repellendus molestiae qui est`np sed omnis",
            date: "DECEMBER 12",
            excerpt: "",
            author: "Mario Douglas",
            category: "Sports",
            readMoreLink: "./blog",
            image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1307"
        },
        {
            id: 3,
            title: "Quia assumenda est et veritati tirana ploder",
            date: "September 17",
            excerpt: "",
            author: "Lisa Hunter",
            category: "Economics",
            readMoreLink: "./blog",
            image: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
        }
    ];

    return (
        <div className="recent-posts-container">

            <div className="recent-posts-header"data-aos="fade-up">
                <h2>Recent Posts</h2>
                <p className=''>Necessitatibus eius consequatur</p>

            </div>

            <div className="posts-grid-three" data-aos="fade-up">
                {posts.map((post) => (
                    <div key={post.id} className="post-card">
                        {/* Image Box */}
                        <div className="image-box">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="post-image"
                            />
                            <div className="date-box">
                                {post.date}
                            </div>
                        </div>

                        {/* Text Box */}
                        <div className="recent-text">
                            <h3 className="post-title">{post.title.length>31? post.title.slice(0,31)+"...":post.title }</h3>
                            <div className="post-content">
                                <div className="author-line">
                                    <span className="author-info">
                                        <FaUser className="icon author-icon" />
                                        <span className="recent-author">{post.author}</span>
                                    </span>
                                    <span className="separator"> / </span>
                                    <span className="category-info">
                                        <FaTag className="icon category-icon" />
                                        <span className="category">{post.category}</span>
                                    </span>
                                </div>
                                <a href={post.readMoreLink} className="read-more">
                                    Read More   <FaArrowRight className="icon readmore-icon" />

                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentPosts;
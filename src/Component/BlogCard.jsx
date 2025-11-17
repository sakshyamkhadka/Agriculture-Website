import React, { useState } from 'react';
import { FaUser, FaTag, FaArrowRight, FaStar, FaRegStar, FaHeart, FaRegHeart } from 'react-icons/fa';
import '../Styles/BlogCard.css';
import Blogpagination from './Blogpagination';

const BlogCard = () => {
    const initialPosts = [
        {
            id: 1,
             title:"The Rise of Modern Sports Analytics",
            date: "DECEMBER 12",
            author: "Julia Parker",
            category: "Politics",
            readMoreLink: "/blogdetails",
            image: "https://images.unsplash.com/photo-1637589308599-3478cc55510d?auto=format&fit=crop&q=80&w=1296",
            rating: 4,
            favorite: false
        },
        {
            id: 2,
            title:"Global Economic Shifts in 2025",
            date: "NOVEMBER 30",
            author: "Mario Douglas",
            category: "Sports",
            readMoreLink: "/blogdetails"
            , image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&q=80&w=1307",
            rating: 5,
            favorite: false
        },
        {
            id: 3,
            title:"Political Campaign Strategies That Work",
            date: "AUGUST 17",
            author: "Lisa Hunter",
            category: "Economics",
            readMoreLink: "/blogdetails",
            image: "https://images.unsplash.com/photo-1612178991541-b48cc8e92a4d?auto=format&fit=crop&q=80&w=1170",
            rating: 3,
            favorite: false
        },
        {
            id: 4,
            title: "Top Fitness Trends for Modern Athletes",
            date: "DECEMBER 17",
            author: "Julia White",
            category: "Economics",
            readMoreLink: "/blogdetails",
            image: "https://plus.unsplash.com/premium_photo-1683120730432-b5ea74bd9047?auto=format&fit=crop&q=80&w=1170", rating: 4, favorite: false
        },
        {
            id: 5,
            title: "Investing in a Post-Pandemic Economy",
            date: "NOVEMBER 01",
            author: "John Parker",
            category: "Sports",
            readMoreLink: "/blogdetails",
            image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1170",
            rating: 5, favorite: false
        },
        {
            id: 6,
            title: "Emerging Political Leaders to Watch",
            date: "SEPTEMBER 09",
            author: "Maria Doe",
            category: "Economics",
            readMoreLink: "/blogdetails",
            image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1170",
            rating: 2,
            favorite: false
        },
        {
            id: 7
            , title: "How Technology is Changing Sports Performance",
            date: "OCTOBER 10",
            author: "Alex Smith",
            category: "Politics",
            readMoreLink: "/blogdetails",
             image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1170",
            rating: 3,
            favorite: false
        },
        {
            id: 8,
            title: "Understanding Inflation and Its Effects",
            date: "NOVEMBER 20",
            author: "Emma Brown",
            category: "Sports",
            readMoreLink: "/blogdetails",
            image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&q=80&w=1170",
            rating: 4,
            favorite: false
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;
    const [blogPosts, setBlogPosts] = useState(initialPosts);

    const toggleFavorite = (id) => {
        setBlogPosts(prev =>
            prev.map(post =>
                post.id === id ? { ...post, favorite: !post.favorite } : post
            )
        );
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="container blog-posts-container">
            <div className="blog-grid-three">
                {currentPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <div className="blog-img">
                            <img src={post.image} alt={post.title} className="blog-image" />
                            <div className="favorite-btn" onClick={() => toggleFavorite(post.id)}>
                                {post.favorite ? <FaHeart className="fav-icon active" /> : <FaRegHeart className="fav-icon" />}
                            </div>
                        </div>
                        <div className="blog-text px-3">
                            <div className="text-container d-flex align-items-end justify-content-between">
                                <div className="blog-box d-flex">
                                    <p>{post.date.split(" ")[1]}</p>
                                    <p>{post.date.split(" ")[0]}</p>
                                </div>
                                <div className="blog-author">
                                    <span className="blog-author-info">
                                        <FaUser className="blog-icon me-2" /> {post.author}
                                    </span>
                                    <span className="blog-separator"> / </span>
                                    <span className="blog-category-info">
                                        <FaTag className="blog-icon me-2" /> {post.category}
                                    </span>
                                </div>
                            </div>
                            <h3 className="blog-title">{post.title}</h3>
                            <div className="blog-rating">
                                {[...Array(5)].map((_, i) =>
                                    i < post.rating ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
                                )}
                            </div>
                            <div className="blog-content">
                                <a href={post.readMoreLink} className="blog-read-more">
                                    Read More <FaArrowRight className="readmore-icon" />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Blogpagination
                totalPages={Math.ceil(blogPosts.length / postsPerPage)}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default BlogCard;

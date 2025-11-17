import React from 'react';
import "../Styles/Blogpagination.css";

const Blogpagination = ({ totalPages, currentPage, onPageChange }) => {

    const handlePageClick = (page) => {
        onPageChange(page);
    };

    const handlePrev = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className="blogpagination">
            <div className="container">
                <div className="d-flex justify-content-center">
                    <ul>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handlePrev(); }}>
                                <i className='bi bi-chevron-left'></i>
                            </a>
                        </li>

                        {Array.from({ length: totalPages }, (_, i) => (
                            <li key={i + 1}>
                                <a
                                    href="#"
                                    className={currentPage === i + 1 ? 'active' : ''}
                                    onClick={(e) => { e.preventDefault(); handlePageClick(i + 1); }}
                                >
                                    {i + 1}
                                </a>
                            </li>
                        ))}

                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleNext(); }}>
                                <i className='bi bi-chevron-right'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


 


export default Blogpagination;

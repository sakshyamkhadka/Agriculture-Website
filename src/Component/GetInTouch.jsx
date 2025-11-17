import React from 'react'
import '../Styles/Getintouch.css'
import { FaCheck } from 'react-icons/fa';

const GetInTouch = () => {
    return (
        <div className="getintouch">
            <div className="container h1-hero-container" >
                <div className="row align-items-center">
                    {/* text */}
                    <div className="container py-5 gettouch-text col-md-6" data-aos="fade-up">
                        <h1 className="hero-title  mb-4">Plants Make Life Better</h1>
                        <p className="hero-description mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Enim necessitatibus placeat, atque qui voluptatem velit explicabo
                            vitae repellendus architecto provident nisi ullam minus asperiores commodi!
                            Tenetur, repellat aliquam nihil illo.
                        </p>
                        <ul className="list-unstyled hero-list mb-4">
                            <li className="mb-2">
                                <i className="bi bi-check2 text-success me-2"></i> Lorem ipsum dolor sit amet
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check2 text-success me-2"></i> Velit explicabo vitae repellendu
                            </li>
                            <li className="mb-2">
                                <i className="bi bi-check2 text-success me-2"></i> Repellat aliquam nihil illo
                            </li>
                        </ul>
                        <a href="#">
                            <button type="button" className="btn btn-success hero-btn">GET IN TOUCH</button>
                        </a>
                    </div>



                    {/* Image  */}
                    <div className=" col-md-6 d-flex justify-content-center position-relative">
                        <img
                            src="../static/image/Farmerimage.avif"
                            alt="Plant"
                            className="h1-hero-img"
                            data-aos="fade-down"
                        />
                        <div className="button-layout">
                            <div className="pulsating-play-btn">

                                    <div className="play-btn"></div>
                                <div className="play"  >

                                </div>
                            </div>

                        </div>
                        {/* </a> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch

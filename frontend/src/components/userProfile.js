import React from "react"




class UserProfile extends React.Component{



render(){
    return(
        <div>
            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-sidebar">
                                <div className="sidebar-widget mb-50">
                                    <img src="assets/img/blog/blog-sidebar.jpg" alt=""/>
                                    <div className="sidebar-img-content">
                                        <p>On the other hand, dislike men who are so beguiled and the demoralized by the charms of pleasure of the moment.</p>
                                        <h4>Tayeb rayed</h4>
                                        <span>UI UX Designer</span>
                                        <div className="sidebar-img-social">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-social-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-social-tumblr"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-social-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <i className="ion-social-instagram-outline"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-widget mb-50">
                                    <h3 className="sidebar-title">Search Products</h3>
                                    <div className="sidebar-search">
                                        <form action="#">
                                            <input placeholder="Search Products..." type="text"/>
                                            <button><i className="ion-ios-search-strong"></i></button>
                                        </form>
                                    </div>
                                </div>
                               
                                <div className="sidebar-widget mb-50">
                                    <h3 className="sidebar-title">Recent Posts</h3>
                                    <div className="sidebar-top-rated-all">
                                        <div className="sidebar-top-rated mb-30">
                                            <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/1.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-top-rated mb-30">
                                            <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/2.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-top-rated mb-30">
                                            <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/3.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-top-rated mb-30">
                                            <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/4.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                              
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog-details-style">
                                <div className="blog-part">
                                <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/4.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                            <br/>
                                            <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img src="assets/img/product/sidebar-product/4.jpg" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                    <span>Feb 13,  2018</span>
                                                    <h4><a href="#">Diffrent title gose here. Thisisdemo title.</a></h4>
                                                </div>
                                            </div>
                                    
                                </div>
                                
                                <div className="leave-comment">
                                    <h3 className="leave-comment-text">Write a comment</h3>
                                    <form action="#">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="leave-form">
                                                    <input placeholder="Name*" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="leave-form">
                                                    <input placeholder="Email*" type="text"/>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="text-leave">
                                                    <textarea placeholder="Comment*"></textarea>
                                                    <button className="submit btn-hover" type="submit">Send Commant</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
    )
}



}

export default UserProfile



import React from "react"
import {connect} from "react-redux"
import {fetchUser} from "../actions/userinfo"
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';




class UserProfile extends React.Component{

    state={
        items:[],
        itemSelected:{},
        modal: false
    }

    componentWillMount(){

        this.props.fetchUser()
        
    }
    toggle (index){
        
        this.setState({
            itemSelected:this.state.items.slice(index,index+1)[0],
          modal: !this.state.modal
        });
      }

      toggleClose (){
        
        this.setState({
           
          modal: !this.state.modal
        });
      }


    componentWillReceiveProps(next){
        
        if(next.items.length>0){
            this.setState({
                items:next.items
            })
        }
    }



render(){
    return(
        <div>
            
    <MDBContainer>
      <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
        <MDBModalHeader toggle={this.toggle.bind(this)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
        <div className="leave-form">
         <input  value={this.state.itemSelected.name} type="text"/>
        </div>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggleClose.bind(this)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
            <div className="blog-area pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-sidebar">
                                <div className="sidebar-widget mb-50">
                                    <img src={this.props.user.image_url} alt=""/>
                                    <div className="sidebar-img-content">
                                        <h3>{this.props.user.first_name} {this.props.user.last_name}</h3>
                                        <p>{this.props.user.email}</p>
                                        <p>{this.props.user.phone}</p>

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
                               
                             
                               
                              
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="blog-details-style">
                                <div className="blog-part">
                                    <h4>Products List:</h4>
                                    <br/>
                                    {this.state.items.map((item,index)=>{
                                        if(item.status === "available"){
                                        return <div key={index}>
                                        <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img onClick={this.toggle.bind(this,index)} src="data:image/png;base64,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" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                <span>{item.name}</span>
                                                    <h4><a href="#">{item.description}.</a></h4>
                                                </div>
                                            </div>
                                            <br/></div>
                                    }else{
                                        return <div key={index}>
                                        <div className="single-top-rated">
                                                <div className="top-rated-img">
                                                    <a href="#"><img onClick={this.toggle.bind(this,index)} src="data:image/png;base64,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" alt=""/></a>
                                                </div>
                                                <div className="top-rated-text">
                                                <span>{item.name}</span>
                                                    <h4><a href="#">{item.description}.</a></h4>
                                                </div>
                                            </div>
                                            <br/></div>

                                    }
                                }
                                    )}
                                
                                            <br/>
                                           
                                    
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

const mapStateToProps = state => ({
    user:state.userInfo.user,
    items:state.userInfo.items
    
  });

export default connect(mapStateToProps,{fetchUser})(UserProfile)



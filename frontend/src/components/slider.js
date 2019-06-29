import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import "react-alice-carousel/lib/alice-carousel.css"
import {Link} from "react-router-dom"
 
class SimpleSlider extends React.Component {
  
 
  responsive = {
    0: { items: 0 },
    1024: { items: 3 },
  }
 
  onSlideChange(e) {
    console.debug('Item`s position during a change: ', e.item)
    console.debug('Slide`s position during a change: ', e.slide)
  }
 
  onSlideChanged(e) {
    console.debug('Item`s position after changes: ', e.item)
    console.debug('Slide`s position after changes: ', e.slide)
  }
 
  render() {
    return (
        <div>
        <br/>
        <br/>
      <AliceCarousel
        // items={this.state.galleryItems}
        responsive={this.responsive}
        autoPlayInterval={2000}
        autoPlayDirection="rtl"
        autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        // playButtonEnabled={true}
        disableAutoPlayOnAction={true}
        onSlideChange={this.onSlideChange}
        onSlideChanged={this.onSlideChanged}
      
      >
        <div onClick={e => {
              this.props.search(e, "2");
            }}>
                <Link to="/itemsList"><img  src="./images/Car-PNG-Photos.png" alt=""/></Link>
                 </div>

                 <div onClick={e => {
              this.props.search(e, "3");
            }}>
                <Link to="/itemsList"> <img src="./images/png-hd-of-homes-ordinary-drem-homes-10-house-png-602.png"/></Link>
                 </div>

                 <div onClick={e => {
              this.props.search(e, "4");
            }}>
              <Link to="/itemsList"><img src="./images/Home-Appliances1-1024x768-1.jpg"/></Link>
            </div>

            <div onClick={e => {
              this.props.search(e, "6");
            }}>
              <Link to="itemsList"><img src="./images/events.png"/></Link>
            </div>
        
            <div onClick={e => {
              this.props.search(e, "5");
            }}>
              <Link to="itemsList"><img src="./images/Hand-Tools.png" /></Link>
            </div>

            <div onClick={e => {
              this.props.search(e, "1");
            }}>
              <Link to="itemsList"> <img src="./images/Sport-PNG-Free-Download.png"/></Link>
            </div>

            <div onClick={e => {
              this.props.search(e, "7");
            }}>
              <Link to="itemsList"><img src="./images/4607733867_470x313.png"/> </Link>
            </div>
         
        
         

      </AliceCarousel>
      </div>
    )
  }
}

export default SimpleSlider
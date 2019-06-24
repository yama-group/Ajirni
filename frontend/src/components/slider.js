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
              this.props.search(e, "2");
            }}>
                <Link to="/itemsList"> <img src="./images/png-hd-of-homes-ordinary-drem-homes-10-house-png-602.png"/></Link>
                 </div>
        
         <img src="./images/Home-Appliances1-1024x768-1.jpg"/>
         <img src="./images/events.png"/> 
         <img src="./images/Hand-Tools.png" />
         <img src="./images/Sport-PNG-Free-Download.png"/>
         <img src="./images/4607733867_470x313.png"/>

      </AliceCarousel>
      </div>
    )
  }
}

export default SimpleSlider
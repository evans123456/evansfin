import React, { Component } from 'react'
import './Photography.css'
import {TweenMax,TweenLite, Power2, TimelineLite} from "gsap/TweenMax";
import * as ScrollMagic from 'scrollmagic'



 class Photography extends Component {
  constructor(props){
    console.log('constructor')
    super(props);
    // reference to the DOM node
    this.myElement = null;
    // reference to the animation
    this.myTween = null;
  }

  componentDidMount(){
    console.log('componentdidmount')

    // use the node ref to create the animation
    this.myTween = TweenLite.to(this.myElement, 1, {x: 100, y: 100});
    console.log(this.myTween)
  }


  

  render() {
    console.log('render')
    return (
      <div className='Container' >
    

          <header className='bird-box'>

                <div className = 'fore-bird' ref={div => this.myElement = div} >
                 
                </div>

          </header> 


        <h1>photography </h1>
      </div>
    )
  }
}

export default Photography;

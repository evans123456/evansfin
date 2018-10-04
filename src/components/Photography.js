import React, { Component } from 'react'
import './Photography.css'
import $ from 'jquery'

 class Photography extends Component {

  componentWillMount(){
    $(window).on('scroll',function(){
      console.log('inside jquery')
    })
    console.log('OUTSIDE JQUERY')
  }

  handleResize(){
    $(window).scroll(function(){
      console.log('inside jquery')
    })
    console.log('OUTSIDE JQUERY')

  }
  

  render() {
    return (
      <div className='Container' >
      {this.handleResize()}



          <header className='bird-box'>

                <div className = 'fore-bird' >
                 
                </div>

          </header> 


        <h1>photography </h1>
      </div>
    )
  }
}

export default Photography;

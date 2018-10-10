import React , { Component } from 'react'
import {Grid , Cell} from 'react-mdl'
import './../App.css'
//import {Link} from 'react-router-dom';

class Landing extends Component{


    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}} >
                <Grid className='landing-grid' >
                    <Cell col={12} >  </Cell> 
                        <img
                            src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
                            alt='avatar'
                            className='avatar-img'
                        />
                        {/* <div className='intro-text' >
                            Hi there, welcome to my website. feel free to browse and contact.
                            friend,son,brother,hard worker and student of life
                        </div> */}
                        <div className='banner-text' >
                        <h1>Full stack web developer</h1>
                        <hr/>
                        <p> HTML/CSS | REACT/javascript | python | C |C++| MATLAB </p>
                        <div className='social-links' >
                            <a href='https://github.com/evans123456' target='_blank' rel='noopener noreferrer' >
                                <i class="fab fa-github" aria-hidden='true' />
                            </a>
                            <a href='https://www.instagram.com/darity100/' target='_blank'  rel='noopener noreferrer' >
                                <i class="fab fa-instagram" aria-hidden='true' />
                            </a>
                            <a href='https://www.youtube.com/watch?v=FUgNYV8A9vg&t=23s' target='_blank'  rel='noopener noreferrer' >
                                <i class="fab fa-youtube" aria-hidden='true' />
                            </a>
                            <a href='https://twitter.com/Evanpersie3V' target='_blank' rel='noopener noreferrer' >
                                <i class="fab fa-twitter" aria-hidden='true' />
                            </a>

                        </div>

                        </div>
                    
                   

                </Grid>

            </div>
            
                
        )
    }
}

export default Landing;
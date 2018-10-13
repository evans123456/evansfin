import React, { Component } from 'react'
import {Grid, Cell } from 'react-mdl'
import Education from './Education'
import Experience from './Experience'
import Skills from './Skills'

export default class Resume extends Component {
  render() {
    return (
      <div>
         <Grid>
           <Cell col={4} >
              <div style={{ textAlign:'center' }} >
                  <img
                    src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png'
                    alt='avatar'
                    style={{height:'200px'}}
                  />
              </div>
              <h2 style={{paddingTop:'1em'}} >Evans Wahome</h2>
              <h4 style={{color:'grey'}} >Programmer</h4>
              <hr style={{borderTop:'3px solid #833fb2', width:'50%'}} />
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...</p>
           
           </Cell>
           <Cell className='resume-right-col' col={8} > 
              <h3>Education</h3>
                  <Education 
                  startYear={2015}
                  endYear={2019}
                  schoolName={'University Of Nairobi'}
                  schoolDescription={' Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
                  />

                  <Education 
                  startYear={2011}
                  endYear={2014}
                  schoolName={'Sunshine Secondary School'}
                  schoolDescription={' Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
                  />
              <hr style={{borderTop:'3px solid #e22947'}} />
              <h3>Experience</h3>
              <Experience 
              startYear={2014}
              endYear={2015}
              jobName={'Camoflauge'}
              jobDescription={' (webdeveloper)Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
             />
             <Experience 
              startYear={2015}
              endYear={2015}
              jobName={'IT support'}
              jobDescription={' (WTO)Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
             />
             <Experience 
              startYear={2016}
              endYear={2016}
              jobName={'Internet SOLutionsS'}
              jobDescription={' (installing fancy software in kengen)Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
             />
             <Experience 
              startYear={2018}
              endYear={2018}
              jobName={'Cloud Data'}
              jobDescription={' (Network fixing sthn)Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
             />
             <Experience 
              startYear={2018}
              endYear={2018}
              jobName={'DHIS2/Health IT'}
              jobDescription={' (programming the metadata dictionary)Lorem ipsum dolor sit amet, consectetur  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris sagittis pellentesque lacus eleifend lacinia...adipiscing elit. Mauris sagittis pellentesque lacus eleifend lacinia...'}
             />

          <hr style={{borderTop:'3px solid #e22947'}} />

          <h3>Skills</h3>

            <Skills
              skill={'Python'}
              progress = {77}
            />
            <Skills
              skill={'C'}
              progress = {80}
            />
            <Skills
              skill={'MATLAB'}
              progress = {60}
            />
            <Skills
              skill={'HTML/CSS'}
              progress = {80}
            />

              
           </Cell>

         </Grid>
      </div>
    )
  }
}

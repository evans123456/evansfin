import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './LandingPage'
import Resume from './Resume'
import About from './AboutMe'
import Projects from './Projects'
import Contact from './Contact'
import Photography from './Photography';



const Main = () => (
    <Switch>
        <Route exact path ="/" component = {Landing} />
        <Route path ="/aboutme" component = {About} />
        <Route path ="/resume" component = {Resume} />
        <Route path ="/projects" component = {Projects} />
        <Route path ="/contact" component = {Contact} />
        <Route path ="/photography" component = {Photography} />



    </Switch>
)

export default Main;

// photography
// videography
// web development
// software development 
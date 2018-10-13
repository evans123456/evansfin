import React, { Component } from 'react'
import './../App.css'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button,CardText,CardMenu, IconButton} from 'react-mdl'


class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 0 };
}

toggleCategories=()=>{
  if(this.state.activeTab === 0){
    return(
    <div className='projects-grid'  >
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#000', height: '176px', background: 'url(https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LMbeeBDU7TeGUiygHOR%2Favatar.png?generation=1537190047097058&alt=media) center / cover'}}>MetaData Dictionary</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored href='https://github.com/evans123456/MetaDataDHIS2'>Github</Button>
                <Button colored href='https://hiskenya.org/dhis-web-commons/security/login.action' >live demo</Button>
                
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>

       <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
 
      
       </div>)
      //  project 2
  }else if(this.state.activeTab === 1){
    return(
      <div className='projects-grid'  >
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn3.macworld.co.uk/cmsdata/features/3635912/learn_python_mac_thumb800.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>live demo</Button>
                
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>

       <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn3.macworld.co.uk/cmsdata/features/3635912/learn_python_mac_thumb800.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn3.macworld.co.uk/cmsdata/features/3635912/learn_python_mac_thumb800.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
 
      
       </div>
    )
    //project 3
  }else if(this.state.activeTab === 2){
    return(
      <div className='projects-grid'  >
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ytimg.com/vi/9lYR_bWMd-4/maxresdefault.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText><div>this is C/C++</div>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>live demo</Button>
                
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>

       <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ytimg.com/vi/9lYR_bWMd-4/maxresdefault.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.ytimg.com/vi/9lYR_bWMd-4/maxresdefault.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
 
      
       </div>
    )
  }else if(this.state.activeTab === 3){
    return(
      <div className='projects-grid'  >
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://autotechreview.com/images/articles/main/20f898136168c22285627099a1664e0b_XL.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText><div>this is C/C++</div>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>live demo</Button>
                
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>

       <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://autotechreview.com/images/articles/main/20f898136168c22285627099a1664e0b_XL.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
      <Card shadow={0} style={{minwidth: '450px', margin: 'auto'}}>
        <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://autotechreview.com/images/articles/main/20f898136168c22285627099a1664e0b_XL.jpg) center / cover'}}>Welcome</CardTitle>
            <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Mauris sagittis pellentesque lacus eleifend lacinia...
            </CardText>
            <CardActions border>
                <Button colored>Get Started</Button>
            </CardActions>
            <CardMenu style={{color: '#000'}}>
                <IconButton name="share" />
            </CardMenu>
      </Card>
 
      
       </div>
    )
  }
}

render() {
    return (
        <div className="category-tabs">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                <Tab>React</Tab>
                <Tab>Python</Tab>
                <Tab>C/C++</Tab>
                <Tab>MATLAB</Tab>

            </Tabs>
           
                <Grid >
                    <Cell col={12} > 
                        <div className='content' >
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>                                   

            
        </div>    
    );
  }
}

export default Projects;


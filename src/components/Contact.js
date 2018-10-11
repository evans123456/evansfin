import React, { Component } from 'react'
import { Grid, Cell,List,ListItem ,ListItemContent} from 'react-mdl'

export default class Contact extends Component {
  render() {
    return (
      <div className='contact-body' >
        <Grid className='contact-grid' >
          <Cell col={6} >
              <h2>Evans Wahome G.</h2>
              <img 
                src='https://mbtskoudsalg.com/images/male-avatar-png-1.png'
                alt='avatar'
                style={{ height: '250px' }}
              />
              <p style={{ width:'75%', margin: 'auto' , paddingTop:'1em' }} > 
              text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. I
              </p>
          
          </Cell>
          <Cell col={6} >
              <h2> Contact Me </h2>
              <hr/>
            <div className='contact-list' >
              
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize:'25px', fontFamily:'Anton' }} >
                  <i className='fa fa-phone-square' aria-hidden='true' />
                  (+254) 701-802-417
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize:'25px', fontFamily:'Anton' }} >
                  <i className='fa fa-fax' aria-hidden='true' />
                  (+254) 701-802-417
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize:'25px', fontFamily:'Anton' }} >
                  <i className='fa fa-envelope' aria-hidden='true' />
                  evanpersie3@gmail.com
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{ fontSize:'25px', fontFamily:'Anton' }} >
                  <i className='fa fa-skype' aria-hidden='true' />
                  (+254) 701-802-417
                  </ListItemContent>
                </ListItem>
            </List>

            </div>


          
          </Cell>

        
        </Grid>
  

      </div>
    )
  }
}

import React from 'react';
import Cards, { Card } from 'react-swipe-card'
import './Cards.css';

export const Wrapper = (props) => {
  console.log(props);
  return (
      <Cards onEnd={console.log('end')} alertLeft={<div>No</div>} alertRight={<div>Yes</div>} className='master-root'>
        {props.restaurantData.map((item, i) =>
            <Card key={i}
             onSwipeLeft={()=>props.swipeLeft(item,i)}
             onSwipeRight={()=>props.swipeRight(item.dish,i)}
             >
               <div>
                <h2>{item.name}</h2>
                <h2>{item.dish}</h2>
                <h2>{i}</h2>
              </div>
            </Card>

        )}
      </Cards>
  )
}

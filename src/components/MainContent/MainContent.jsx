import React from 'react';
import StoriesIcon from '../StoriesIcon/StoriesIcon';
import user1 from '../../images/user-1.png';
import './MainContent.css';
import PostInstagram from '../PostInstagram/PostInstagram';

function MainContent() {
  return (
    <main>
      <div className='box-stories'>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
        <StoriesIcon srcImg={ user1 } user='voidmille'/>
      </div>

      <div>
        <PostInstagram />
        <PostInstagram />
      </div>
    </main>
  );
}

export default MainContent;
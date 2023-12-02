import React from 'react';
import StoriesIcon from '../StoriesIcon/StoriesIcon';
import user1 from '../../images/user-1.png';
import './MainContent.css';
import PostInstagram from '../PostInstagram/PostInstagram';

function MainContent() {
  return (
    <main>
      <div className='box-stories'>
        <StoriesIcon 
          srcImg={ user1 } 
          user='voidmille'
        />
        <StoriesIcon 
          srcImg='https://pbs.twimg.com/profile_images/1602668502317469701/psi2e-Lj_400x400.jpg' 
          user='vincent'
        />
        <StoriesIcon 
          srcImg='https://pbs.twimg.com/profile_images/547307708878036992/vx_R2cb1_400x400.jpeg'
          user='jules'
        />
        <StoriesIcon 
          srcImg='https://pbs.twimg.com/profile_images/488840858431541248/5TEfOj9A_400x400.png'
          user='ordell'
        />
        <StoriesIcon
          srcImg='https://i.guim.co.uk/img/media/22283ec0c510716c1b00fdab81b19277dfd595f8/0_0_2832_1701/master/2832.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=ed1e3e8fad985993c0b7aeaf45be05c4'
          user='jackie'
        />
        <StoriesIcon 
          srcImg='https://images.8tracks.com/cover/i/000/563/349/john-bender-2-3513.jpg?rect=95,0,400,400&q=98&fm=jpg&fit=max'
          user='bender'
        />
        <StoriesIcon
          srcImg='https://pbs.twimg.com/profile_images/1242205257096142861/lALDYFIU_400x400.jpg'
          user='mr_fox'
        />
        <StoriesIcon 
          srcImg='https://miro.medium.com/v2/resize:fit:400/1*1R32L2P8PPTkB-ZYzri9bQ.jpeg'
          user='moana'
        />
      </div>

      <div>
        <PostInstagram
          profilePicture={ user1 }
          user='cami_tim'
          postPicture='https://upload.wikimedia.org/wikipedia/pt/4/45/Blue_Beetle_%28cartaz_de_filme%29.jpg'
          description='Velha atirando com o chapeu da estrela vermelha'
          likes='26.008'
        />
        <PostInstagram 
          profilePicture='https://pbs.twimg.com/profile_images/1602668502317469701/psi2e-Lj_400x400.jpg'
          user='vicent_vega'
          postPicture='https://a-static.mlcdn.com.br/450x450/vinil-pulp-fiction-music-from-the-motion-pictures-importado-33-rpm-soundtrack/umusicstore/578/3ccfc2a37b43eb9136be18ba5cd8449b.jpeg'
          description='This is a tasty burger'
          likes='3.195'
        />
        <PostInstagram
          profilePicture='https://pbs.twimg.com/profile_images/1242205257096142861/lALDYFIU_400x400.jpg'
          user='mr_fox'
          postPicture='https://external-preview.redd.it/ugqeATu310fiW7Jk4s7VMbyFQNQMqRXuxZ0a07UL2Cg.jpg?auto=webp&s=b01a3618f8be86754fe5c2486cc42a4db041b4e1'
          description='Não saio daqui sem essa gravata!'
          likes='1.464'
        />
        <PostInstagram
          profilePicture='https://images.8tracks.com/cover/i/000/563/349/john-bender-2-3513.jpg?rect=95,0,400,400&q=98&fm=jpg&fit=max'
          user='john_bender'
          postPicture='https://i.pinimg.com/1200x/c7/17/8d/c7178d397470297a8765efd1b24531cb.jpg'
          description='Todos nós somos bem bizarros...'
          likes='10.10'
        />
        <PostInstagram
          profilePicture='https://miro.medium.com/v2/resize:fit:400/1*1R32L2P8PPTkB-ZYzri9bQ.jpeg'
          user='moana_motunui'
          postPicture='https://s2.glbimg.com/zlvUiKHP3o0CURWsJfae7uaSrsA=/620x400/s2.glbimg.com/cic0sVOCxbZM6NZi6urWWKUG04M=/s.glbimg.com/jo/g1/f/original/2015/10/08/moana-disney.jpg'
          description='Eu sou Moana de Motunui e vc vai embarcar nesse barco'
          likes='25.020'
        />
      </div>
    </main>
  );
}

export default MainContent;
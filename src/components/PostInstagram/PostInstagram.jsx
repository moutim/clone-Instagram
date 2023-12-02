import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { BsSend } from 'react-icons/bs';
import './postInstagram.css';
import user1 from '../../images/user-1.png';
import post1 from '../../images/post-1.png';

function PostInstagram() {
  return (
    <div className='post-instagram'>
      <div className='secao-nome-foto'>
        <div className='nome-foto-perfil'>
          <div className='foto-perfil-postagem'>
            <img src={ user1 } alt="Foto de perfil" />
          </div>
          <p>flowgamestv</p>
          <MdVerified className='simbolo-verificado' />
          <BsDot className='simbolo-dot' />
          <p>5 h</p>
        </div>

        <div>
          <HiDotsHorizontal />
        </div>
      </div>

      <div className='imagem-postagem'>
        <div>
          <img src={ post1 } alt="Imagem da postagem" />
        </div>
        <div>
          <FaRegHeart />
          <IoChatbubbleOutline />
          <BsSend />
        </div>
      </div>

      <div className='comentarios-postagem'>
        <p><span>2.281 curtidas</span></p>
        <p><span>flowgamestv</span> oh minha gata, morada dos meus sonhos</p>
        <p><span>Ver tradução</span></p>
        <p className='comentario-cor'>Ver todos os 18 comentários</p>
        <p className='comentario-cor'>Adicione um comentário...</p>
      </div>
    </div>
  );
}

export default PostInstagram;
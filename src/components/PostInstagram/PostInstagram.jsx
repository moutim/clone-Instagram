import React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BsDot } from 'react-icons/bs';
import { MdVerified } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { BsSend } from 'react-icons/bs';
import './postInstagram.css';
import PropTypes from 'prop-types';

function PostInstagram({ profilePicture, user, postPicture, likes, description }) {
  return (
    <div className='post-instagram'>
      <div className='secao-nome-foto'>
        <div className='nome-foto-perfil'>
          <div className='foto-perfil-postagem'>
            <img src={ profilePicture } alt="Foto de perfil" />
          </div>
          <p>{ user }</p>
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
          <img src={ postPicture } alt="Imagem da postagem" />
        </div>
        <div>
          <FaRegHeart />
          <IoChatbubbleOutline />
          <BsSend />
        </div>
      </div>

      <div className='comentarios-postagem'>
        <p><span>{ likes }</span></p>
        <p><span>{ user }</span> { description }</p>
        <p><span>Ver tradução</span></p>
        <p className='comentario-cor'>Ver todos os 18 comentários</p>
        <p className='comentario-cor'>Adicione um comentário...</p>
      </div>
    </div>
  );
}

PostInstagram.propTypes = {
  profilePicture: PropTypes.string.isRequired,
  postPicture: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PostInstagram;
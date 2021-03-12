import {React, useState, useEffect } from 'react';
import axios from 'axios';
import banner from './banner.png'

import { Container, Content, AnimeCard, AnimesContainer, BannerImage } from './styles';

function index() {
  const [animes, setAnimes] = useState([]);
  const [find, setFind] = useState('');

  function handleFind() {
    axios.get(`https://api.jikan.moe/v3/search/anime?q=${find}`).then(response => {
      console.log(find);
      const data = response.data;
      setAnimes(data.results);
    })
  }

  return (
    <Container>
      <Content>
        <input 
        type="text" 
        placeholder="Pesquise pelo seu anime favorito" 
        value={find}
        onChange={e => setFind(e.target.value)}
        onKeyUp={(e) => {
          if(e.key === 'Enter') {
            handleFind()
          }
        }} />

        <AnimesContainer>
          {animes.length > 0 ? animes.map(value => (
            <AnimeCard key={value.mal_id}>
              <img src={value.image_url}/>
              <div>
                <h3>{value.title}</h3>
                <p>{value.synopsis}</p>
              </div>
            </AnimeCard>
          )) : 
          
            <BannerImage src={banner}/>
          }
        </AnimesContainer>
      </Content>
    </Container>
  );
}

export default index;
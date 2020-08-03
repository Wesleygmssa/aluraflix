import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../components/data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{ background: "#141414" }}>

      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Auxiliamos na tomada de decisões para o crescimento do seu negócio com eficiência e eficácia."}

      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}

      />

      {/* <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      /> */}
      
      <Footer/>
    </div>
  );
}

export default Home;

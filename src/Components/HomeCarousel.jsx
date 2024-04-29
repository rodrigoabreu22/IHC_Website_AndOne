import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeCarousel.css'; 
import { Link } from 'react-router-dom';



function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item as={ Link } to="/sapatilhas">
        <img src="https://d3pnpe87i1fkwu.cloudfront.net/wp-content/uploads/2017/10/Wide-Basketball-Shoes.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3 className="carousel-text">Sapatilhas</h3>
          <h5 className="carousel-text">Clica aqui para ver os nossos modelos! </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={ Link } to="/equipamentos">
        <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c981ebd4-0377-4ce2-af1e-46fb67688bba/pdp.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3 className="carousel-text">Equipamento</h3>
          <h5 className="carousel-text">Clica aqui para ver os nossos equipamentos! </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={ Link } to="/acessorios">
        <img src="https://images-cdn.ubuy.co.id/652e455e0cad854c0734a883-podinor-elite-basketball-crew-socks-for.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3 className="carousel-text">Acessórios</h3>
          <h5 className="carousel-text">Clica aqui para ver os nossos acessórios! </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={ Link } to="/conjuntos">
        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/c2d814a366ae15d7f134a4b9dda33fc67c199f128d9d47fc86dfcd46220415f9.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3 className="carousel-text">Conjuntos</h3>
          <h5 className="carousel-text">Clica aqui para ver os nossos conjuntos! </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item as={ Link } to="/material">
        <img src="https://i2.pickpik.com/photos/684/300/60/basketball-rim-hoop-net-a0b55ecdd3892f46d6ac8cbeabdf555e.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3 className="carousel-text">Material</h3>
          <h5 className="carousel-text">Clica aqui para ver o nosso material! </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;

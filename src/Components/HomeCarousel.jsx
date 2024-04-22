import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../HomeCarousel.css'; 



function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://www.desktopbackground.org/download/1366x768/2015/12/12/1056485_basketball-shoes_1600x900_h.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3>Sapatilhas</h3>
          <p>Clica aqui para ver os nossos modelos! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://static.nike.com/a/images/t_prod/w_1920,c_limit,f_auto,q_auto/c981ebd4-0377-4ce2-af1e-46fb67688bba/pdp.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3>Equipamento</h3>
          <p>Clica aqui para ver os nosso equipamento! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images-cdn.ubuy.co.id/652e455e0cad854c0734a883-podinor-elite-basketball-crew-socks-for.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3>Acessórios</h3>
          <p>Clica aqui para ver os nossos acessórios! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://images2.minutemediacdn.com/image/upload/c_fill,w_1440,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/c2d814a366ae15d7f134a4b9dda33fc67c199f128d9d47fc86dfcd46220415f9.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3>Conjuntos</h3>
          <p>Clica aqui para ver os nossos conjuntos! </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://i2.pickpik.com/photos/684/300/60/basketball-rim-hoop-net-a0b55ecdd3892f46d6ac8cbeabdf555e.jpg" 
        className="d-block w-100 carousel-image"
        alt="Sapatilhas"
        />
        <Carousel.Caption>
          <h3>material</h3>
          <p>Clica aqui para ver o nosso material! </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

import 'bootstrap/dist/css/bootstrap.min.css';
export default HomeCarousel;

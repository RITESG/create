import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home__container">
        <img
            className='home__image'
            src='https://logos-world.net/wp-content/uploads/2021/02/Amazon-Prime-Video-Symbol.png'
            alt=''
            />
    
            <div className="home__row">
            <Product
            title="The lean Startup"
            price={29,99}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
            rating={3}
            />
            <Product
            id="49538094" 
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses is a book by Eric Ries describing his proposed lean startup strategy for startup companies."
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" 
            rating={3}
            />
            </div>

            <div className="home__row">
            <Product
            id="4903850"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/91o08DsRplL._AC_SL1500_.jpg"
             />
            <Product
            id="23445930"
            title="Amazon Echo (3rd Generation) | Smart Speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://www.powerplanetonline.com/cdnassets/amazon_echo_dot_3_gen_negro_antracita_altavoz_inteligente_alexa_01_l.jpg"
            
            />
            <Product
            id="3245353545"
            title="New Apple iPad Pro"
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SX342_.jpg"
            
            
            />

            </div>

            <div className="home__row">
            <Product
            id="67453783"
            title="All new Macbook Pro"
            price={999}
            rating={5}
            image="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=600&hei=315&fmt=jpeg&qlt=95&.v=1604347427000" />
            
            </div>

        </div>
    </div>
  );
}

export default Home;

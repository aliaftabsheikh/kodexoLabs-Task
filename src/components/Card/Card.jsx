import { useState, useEffect } from 'react';
import './Card.scss';
import { images } from '../../constants';

const Card = ({ prop }) => {
  const [state, setState] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const addTOFav = (id) => {
    let favouriteItem = JSON.parse(localStorage.getItem('favourite')) || [];
    if (Array.isArray(favouriteItem)) {
      const result = favouriteItem.find((item) => id === item);
      if (result == undefined) {
        favouriteItem.push(id);
        localStorage.setItem('favourite', JSON.stringify(favouriteItem));
        console.log('undefined');
      } else {
        favouriteItem.map((item, ind) => {
          if (item === id) {
            favouriteItem.splice(ind, 1);
            localStorage.setItem('favourite', JSON.stringify(favouriteItem));
          }
        });
      }
    }
    setRefresh(!refresh);
  };
  useEffect(() => {
    let favouriteItem = JSON.parse(localStorage.getItem('favourite'));
    if (Array.isArray(favouriteItem)) {
      setState(favouriteItem);
    }
  }, [refresh]);

  return (
    <div className="app__card-container">
      <div className="app__card">
        <div className="app__card-heart" onClick={() => addTOFav(prop.mlsId)}>
          <img
            src={
              state.find((item) => item === prop.mlsId)
                ? images.heartFill
                : images.heartStroke
            }
            alt="Heart"
          />
        </div>
        <div className="app__card-image">
          <img src={prop.photos[0]} alt="img" />
        </div>
      </div>
      <div className="app__card-content">
        <div className="app__card-details">
          {prop.property.bedrooms} BR | {prop.property.bathsFull} Bath |{' '}
          {prop.property.area} Sq Ft
        </div>
        <div className="app__card-price">
          ${prop.listPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </div>
        <div className="app__card-address">
          {prop.address.streetNumber}-{prop.address.streetName}
        </div>
        <div className="app__card-date">
          Listed: {prop.listDate.slice(0, 10).split('-').reverse().join('/')}
        </div>
      </div>
    </div>
  );
};

export default Card;

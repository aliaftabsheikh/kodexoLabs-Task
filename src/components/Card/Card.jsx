import {useState} from 'react';
import './Card.scss';
// import Sky from '../../assets/sky-diving.jpeg';
// import Heart from '../../assets/heart-fill.svg';
import { images } from '../../constants';

const Card = () => {

  const [like, setLike] = useState(false)
  const [likeActive, setLikeActive] = useState(true)

  const likef = ()=>{
    if(likeActive){
      setLikeActive(false)
      setLike(true)
    }else{
      setLikeActive(true)
      setLike(false)
    }
  }

  const favourites = () => {
    localStorage.setItem('like', '1');
  };

  // const check = () => {
  //   if (localStorage.getItem('like' === '1')) {
  //     images.heartFill;
  //   } else {
  //     images.heartStroke;
  //   }
  // };

  return (
    <div className="app__card-container">
      <div className="app__card">
        <div className="app__card-heart" onClick={likef}>
          <img src={likeActive ? images.heartFill : images.heartStroke}  alt="Heart" /> 
        </div>
        <div className="app__card-image">
          
          <img src={images.Sky} alt="img" />
        </div>
      </div>
      <div className="app__card-details">2 BR | 2.5 Bath | 1500 Sq Ft</div>
      <div className="app__card-price">$3,750,000</div>
      <div className="app__card-address">1839 Berkely Way, Folsom, CA</div>
      <div className="app__card-date">Listed: 12/13/21</div>
    </div>
  );
};

export default Card;

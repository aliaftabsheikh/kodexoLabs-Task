import {useState, useEffect} from 'react';
import './Card.scss';
import Sky from '../../assets/sky-diving.jpeg';
import Heart from '../../assets/heart-fill.svg';
import { images } from '../../constants';


// const getLike = ()=>{

//   let likee = localStorage.getItem('like')
//   console.log(likee);

//   if (likee) {
//     return JSON.parse(localStorage.getItem(likee));
//   }else{
//     return [];
//   }
// }



const Card = ({prop}) => {
  

  // const getLocalId = () => {
  //   let Id = localStorage.getItem('mlsId')
  //   console.log(Id);

  //   if(Id){
  //     return JSON.parse(localStorage.getItem('mlsId'))
  //   }else{
  //     return []
  //   }
  // }

  
  
  // const Id = prop.mlsId
  // console.log(Id);
  
  // const [like, setLike] = useState(false)
  // const [likeActive, setLikeActive] = useState(true)
  // const [id, setId] = useState([])

  // useEffect(() => {
  //   window.localStorage.setItem('likeInfo', JSON.stringify(likeArr));
  // }, [like])

  // if(!Id){
  //   return;
  // }

  // let likeArr = []
  // let likeInfo ={
  //   mlsId : Id
  // }
  // likeArr.push(likeInfo)
  // console.log(likeArr);

  // const likef = ()=>{
  //   if(likeActive){
  //     setLikeActive(false)
  //     setLike(true)
  //     setId(JSON.parse(localStorage.getItem('likeInfo')).likeInfo)
  //   }else{
  //     setLikeActive(true)
  //     setLike(false)
  //     // setId(localStorage.removeItem('mlsId', prop.mlsId))
      
  //   }
  // }
  // const check = JSON.parse(localStorage.getItem('likeInfo'))
  // console.log(check.likeInfo);

  
  // const data =  localStorage.getItem('mlsId') 
  // console.log(data);

//   const id = (JSON.parse(localStorage.getItem('mlsId')))
//   console.log(id.mlsId);
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
        <div className="app__card-heart"  onClick={() => addTOFav(prop.mlsId)}>
        
          <img src={state.find((item) => item === prop.mlsId)
                ? images.heartFill
                : images.heartStroke}  alt="Heart" /> 
        </div>
        <div className="app__card-image">
          
          <img src={prop.photos[0]} alt="img" />
        </div>
      </div>
      <div className="app__card-content">
      <div className="app__card-details">{prop.property.bedrooms} BR | {prop.property.bathsFull} Bath | {prop.property.area} Sq Ft</div>
      <div className="app__card-price">${prop.listPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
      <div className="app__card-address">{prop.address.streetNumber}-{prop.address.streetName}</div>
      <div className="app__card-date">Listed: {prop.listDate.slice(0,10).split('-').reverse().join('/')}</div>
    </div>
      </div>
  );
};

export default Card;

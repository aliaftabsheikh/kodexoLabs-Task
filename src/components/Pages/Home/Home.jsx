import Card from 'components/Card/Card';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.scss';

const API_URL = `https://api.simplyrets.com/properties`;

const Home = () => {
  const [results, setResults] = useState([]);

  const homeDetails = async () => {
    try {
      const response = await axios.get(API_URL, {
        headers: {
          Accept: '*/*',
          Authorization: 'Basic c2ltcGx5cmV0czpzaW1wbHlyZXRz',
        },
      });
      const data = await response.data;
      setResults(data);
      console.log(data);

      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    homeDetails();
  }, []);

  return (
    <div className="app__home-container">
      {results.map((data) => (
        <Card key={data.mlsId} prop={data} />
      ))}
    </div>
  );
};

export default Home;

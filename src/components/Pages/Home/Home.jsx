import Card from 'components/Card/Card';
import React, { useEffect } from 'react';
import axios from 'axios';
import btoa from 'btoa';
import './Home.scss';

const Home = () => {
  const homeDetails = async () => {
    const API_URL = `https://api.simplyrets.com/properties`;
    try {
      const username = 'simplyrets';
      const password = 'simplyrets';

      const response = await axios.get(API_URL, {
        headers: {
          Authorization: `${username}:${password}`,
        },
      });
      const { results } = response.data;

      console.log(results);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    homeDetails();
  }, []);

  return (
    <div className="check">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Home;

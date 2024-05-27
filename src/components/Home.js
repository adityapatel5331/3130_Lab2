import React, { useEffect } from 'react';

const Home = ({ setVisits }) => {
  useEffect(() => {
    setVisits(prev => prev + 1);
  }, [setVisits]);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <h2>My Name is ADITYA PATEL</h2>
      <h3>My banner id is B00930387</h3>
    </div>
  );
};

export default Home;

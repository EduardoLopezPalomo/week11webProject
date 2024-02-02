import React, { useState, useEffect } from 'react';

const About = () => {
  const [data, setData] = useState([]);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const result = await response.json();

        if (mounted) {
          setData(result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      setMounted(false);
    };
  }, []); 

  return (
    <div>
      <h2>About</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default About;


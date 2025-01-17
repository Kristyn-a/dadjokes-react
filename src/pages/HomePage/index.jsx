import './style.css';
import { useEffect, useState } from 'react';
import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/Czechitas-podklady-WEB/daweb-test/deploy/jokes.json',
      );
      const data = await response.json();
      setJokes(data);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes &&
        jokes.map((joke, name) => (
          <Joke
            key={name}
            avatar={joke.avatar}
            name={joke.name}
            text={joke.text}
            likes={joke.likes}
            dislikes={joke.dislikes}
          />
        ))}
    </div>
  );
};

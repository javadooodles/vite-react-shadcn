import React from 'react';
import styled, { keyframes } from 'styled-components';

const flicker = keyframes`
  0% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  10% {
    color: #fff;
    text-shadow: none;
  }
  20% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  30% {
    color: #fff;
    text-shadow: none;
  }
  40% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  50% {
    color: #fff;
    text-shadow: none;
  }
  60% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  70% {
    color: #fff;
    text-shadow: none;
  }
  80% {
    color: #fff;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff;
  }
  90% {
    color: #fff;
    text-shadow: none;
  }
  100% {
    color: #ffd700;
    text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 15px #ffd700;
  }
`;

const AnimatedText = styled.h2`
  color: #fff;
  text-align: center;
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: bold;
  margin: 0;
  padding-top: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.7);
  animation: ${flicker} 1.5s ease-in-out forwards;
`;

const LightBulbAnimation: React.FC = () => {
  return (
    <AnimatedText>
      Turning Ideas Into Reality
    </AnimatedText>
  );
};

export default LightBulbAnimation; 
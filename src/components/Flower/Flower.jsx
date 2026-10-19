import React from 'react';
import './Flower.css'
import flowerIcon from '../../assets/flower.svg';

export function Flower({ className }) {
  return (
    <img 
      src={flowerIcon} 
      className={className} 
      aria-hidden="true" 
      alt="" 
    />
  );
}
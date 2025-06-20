import React from 'react';
import '../styles/Card.css';

export const Card = ({ children }) => (
  <div className="custom-card">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="custom-card-content">{children}</div>
);

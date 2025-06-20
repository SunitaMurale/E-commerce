import React from 'react';

const NotPlaced = ({ title = '⚠️ Content Not Available', message = 'This section is under construction or currently has no data.' }) => {
  return (
    <div className="text-center p-5 bg-white rounded shadow-sm">
      <h3 className="text-danger">{title}</h3>
      <p className="text-muted">{message}</p>
    </div>
  );
};

export default NotPlaced;

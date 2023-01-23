import React from 'react';

const Feature = ({ feature }) => {
  const { title, description, feature_thumbnail } = feature;
  return (
    <div>
      <img src={feature_thumbnail} className="h-52" alt="Shoes" />
      <div className="text-center p-4">
        <h2 className="text-center text-xl font-semibold">
          {title}
        </h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
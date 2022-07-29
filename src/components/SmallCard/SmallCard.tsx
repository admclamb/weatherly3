import React from 'react';

type Props = {};

const SmallCard = (props: Props) => {
  return (
    <article>
      <h4>Fri</h4>
      <div className="icon"></div>
      <div className="weather">
        <p>
          <em>93&deg;</em>
        </p>
        <p>80&deg;</p>
      </div>
    </article>
  );
};

export default SmallCard;

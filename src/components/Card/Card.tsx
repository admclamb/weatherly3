import React from 'react';

type Props = {
  children: React.ReactNode;
  classes: string;
  padding: string;
  border: string;
  borderRadius: string;
};

const Card = ({ children, classes, padding, border, borderRadius }: Props) => {
  return (
    <article
      className={`${padding} ${classes} ${border && border} ${
        borderRadius && borderRadius
      }`}
    >
      {children}
    </article>
  );
};

Card.defaultProps = {
  classes: '',
  padding: 'p-2',
  border: 'border-[1px]',
  borderRadius: 'rounded',
};

export default Card;

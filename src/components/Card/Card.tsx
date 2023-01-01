import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <article className="p-1">{children}</article>;
};

export default Card;

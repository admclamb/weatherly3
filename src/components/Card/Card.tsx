import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Card = ({ children }: Props) => {
  return <article className="p-2">{children}</article>;
};

export default Card;

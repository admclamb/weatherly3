import React from 'react';

type Props = {
  icon: string;
  description: string;
};

const Icon = ({ icon, description }: Props) => {
  return (
    icon && (
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
    )
  );
};

export default Icon;

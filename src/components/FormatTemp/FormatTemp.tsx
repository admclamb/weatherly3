import React from 'react';

type Props = {
  temp: number;
  fontSize: string;
  fontWeight: string;
  degreeSize: string;
  degreeWeight: string;
};

const FormatTemp = ({
  temp,
  fontSize,
  fontWeight,
  degreeSize,
  degreeWeight,
}: Props) => {
  return (
    <span className={`${fontSize} ${fontWeight}`}>
      {temp.toFixed(0)}
      <span
        className={`${degreeSize ? degreeSize : fontSize} ${
          degreeWeight ? degreeWeight : fontWeight
        }`}
      >
        &deg;
      </span>
    </span>
  );
};

FormatTemp.defaultProps = {
  fontSize: '',
  fontWeight: '',
  degreeSize: '',
  degreeWeight: '',
};

export default FormatTemp;

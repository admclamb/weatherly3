import React from 'react';

type Props = {
  temp: number;
  fontSize: string;
  fontWeight: string;
  degreeSize: string;
  degreeWeight: string;
  classes: string;
};

const FormatTemp = ({
  temp,
  fontSize,
  fontWeight,
  degreeSize,
  degreeWeight,
  classes,
}: Props) => {
  return (
    <span className={`${fontSize} ${fontWeight} ${classes}`}>
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
  classes: '',
};

export default FormatTemp;

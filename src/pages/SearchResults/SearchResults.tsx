import React from 'react';
import { useLocation } from 'react-router-dom';
type Props = {
  setLocation: (value: Location) => void;
};

const SearchResults = ({ setLocation }: Props) => {
  const { state } = useLocation();
  console.log('state: ', state);
  return <div>SearchResults</div>;
};

export default SearchResults;

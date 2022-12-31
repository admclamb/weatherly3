import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../layout/Layout';
import { storage } from '../../utils/Storage';
type Props = {
  setLocation: (value: Location) => void;
};

const SearchResults = ({ setLocation }: Props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { results, search } = state;

  const noResultsHeader = (
    <p className="py-2">
      No Results for <strong className="font-bold">{search}</strong>
    </p>
  );

  const resultsHeader = (
    <p className="py-2">
      Showing{' '}
      <strong className="font-bold">
        {(Array.isArray(results) && results.length) || 0}
      </strong>{' '}
      results for <strong className="font-bold">{search}</strong>
    </p>
  );

  const handleClick = async (event: { target: HTMLInputElement }) => {
    const { id: index = -1 } = event.target;
    if (index > -1) {
      // add to recent storage
      storage.append(
        'searchHistory',
        `${results[index].name}${
          results[index]?.state && `, ${results[index].state}`
        } `
      );
      const { lat, lon } = results[index].name;
      return navigate(`/weather/${lat}/${lon}`);
    }
  };
  return (
    <Layout>
      <main className="p-2">
        {Array.isArray(results) && results.length > 1
          ? resultsHeader
          : noResultsHeader}
        <ul className="border-t-[1px]">
          {Array.isArray(results) &&
            results.map((result, index) => {
              return (
                <li key={result?.name + index + result?.state}>
                  <button
                    className="text-start w-full block py-3 border-b-[1px] hover:brightness-95 active:brightness-95"
                    onClick={handleClick}
                    id={index}
                  >{`${result.name}, ${result.state}`}</button>
                </li>
              );
            })}
        </ul>
      </main>
    </Layout>
  );
};

export default SearchResults;

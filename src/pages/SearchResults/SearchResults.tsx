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
  console.log(results);
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

  const handleClick = async (event: React.FormEvent<EventTarget>) => {
    const { index = -1 } = event.currentTarget.dataset;
    if (index > -1) {
      await setLocation(results[index]);
      // add to recent storage
      // storage.append(
      //   'searchHistory',
      //   `${results[index].name}${
      //     results[index]?.state && `, ${results[index].state}`
      //   } `
      navigate('/');
      );
      console.log('history: ', storage.get('searchHistory'));
    }
    console.log(index);
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
                    data-index={index}
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

import { useQuery } from '@apollo/client';
import { GET_CONTINENTS } from 'api/graphql/query/continents';
import { createContext, ReactNode, useContext } from 'react';
import { IContinent } from 'utils/interfaces';

const ContinentContext = createContext({
  continents: [] as IContinent[],
  loadingContinents: true,
});

function ContinentProvider({ children }: { children: ReactNode }) {
  const { data: continents, loading: loadingContinents } = useQuery(
    GET_CONTINENTS,
    {
      onError: (err) => console.log(err),
    }
  );

  return (
    <ContinentContext.Provider
      value={{
        continents: continents?.continents,
        loadingContinents,
      }}
    >
      {children}
    </ContinentContext.Provider>
  );
}

const useContinent = () => useContext(ContinentContext);

export { ContinentProvider, useContinent };

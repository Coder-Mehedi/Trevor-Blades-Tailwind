import gql from 'graphql-tag';

export const GET_LANGUAGES = gql`
  query languages {
    languages {
      name
      native
      code
      rtl
    }
  }
`;

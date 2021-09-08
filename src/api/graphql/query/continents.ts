import gql from 'graphql-tag';

export const GET_CONTINENTS = gql`
  query continents {
    continents {
      code
      name
      countries {
        code
        name
        native
        phone
        capital
        currency
        languages {
          name
          native
          code
          rtl
        }
        emoji
        emojiU
        states {
          code
          name
        }
      }
    }
  }
`;

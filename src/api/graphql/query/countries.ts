import gql from 'graphql-tag';

export const GET_COUNTRIES = gql`
  query countries {
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
`;

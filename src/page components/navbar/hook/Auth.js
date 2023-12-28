import { gql } from "@apollo/client";

const GET_ROLE = gql`
  query getRole($id: ID) {
    usersPermissionsUser(id: $id) {
      data {
        id
        attributes {
          username
          role {
            data {
              attributes {
                type
              }
            }
          }
        }
      }
    }
  }
`;
const GET_Users = gql`
  query getuser {
    usersPermissionsUsers {
      data {
        id
        attributes {
          username
          email
        }
      }
      meta {
        pagination {
          total
        }
      }
    }
  }
`;
export { GET_ROLE };

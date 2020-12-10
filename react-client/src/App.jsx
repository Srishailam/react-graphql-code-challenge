import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'
import UserList from './components/UserList/UserList';


const getUsersQuery = gql`
query users {
  users {
    id
    name
    email
    phone
  }
}
`
function App({data,loading, error}) {
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error :(</div>;
  return (
      <div className="App">
        <UserList users={data.users}/>
      </div>
  )
};

export default graphql(getUsersQuery)(App);


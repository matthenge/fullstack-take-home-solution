import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.REACT_APP_DATA_API_URL,
  cache: new InMemoryCache(),
});

const query = async (variables: any): Promise<any> => {
  return client.query(variables);
};

const customClient: any = { ...client, query };

export default customClient;

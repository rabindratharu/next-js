import { ApolloProvider } from "@apollo/client";
import client from "./apollo";

const Provider = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default Provider;

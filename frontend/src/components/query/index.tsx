import React from "react";
import { Query as QueryWrapper, ApolloProvider } from "react-apollo";
import client from "../../apollo/client";

interface QueryProps {
  clientOnly?: boolean;
  children: any;
  query: any;
}

const Query = ({
  clientOnly = true,
  children,
  query,
  ...others
}: QueryProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  });

  return (
    <>
      {(!clientOnly || (clientOnly && mounted)) && (
        // @ts-ignore
        <ApolloProvider client={client}>
          <QueryWrapper
            query={query}
            errorPolicy="all"
            fetchPolicy="cache-first"
            {...others}
          >
            {(all: any) => {
              return <>{children(all.loading, Boolean(all.error), all.data)}</>;
            }}
          </QueryWrapper>
        </ApolloProvider>
      )}
    </>
  );
};

Query.propTypes = QueryWrapper.propTypes;
Query.defaultProps = { fetchPolicy: "network-only" };

export default Query;

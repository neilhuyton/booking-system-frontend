import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import Router from "next/router";
import styled from "styled-components";
import Unit from "./Unit";

const ALL_UNITS_QUERY = gql`
  query ALL_UNITS_QUERY {
    units {
      id
      title
      description
    }
  }
`;

class Units extends Component {
  // static getInitialProps({ query }) {
  //   return { query };
  // }

  render() {
    const { query } = this.props.router;
    const { arrive, depart } = query;

    return (
      <div>
        <Query query={ALL_UNITS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.units.map(unit => (
                  <Unit
                    arrive={arrive}
                    depart={depart}
                    unit={unit}
                    key={unit.id}
                    clickHandler={this.clickHandler}
                  />
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withRouter(Units);
export { ALL_UNITS_QUERY };

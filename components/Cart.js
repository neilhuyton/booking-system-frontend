import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import CartUnit from "./CartUnit";

const CART_QUERY = gql`
  query CART_QUERY {
    cart {
      cartUnits {
        id
        arrive
        depart
        quantity
        unit {
          id
          title
        }
      }
    }
  }
`;

class Units extends Component {
  render() {
    const { query } = this.props.router;

    return (
      <div>
        <Query query={CART_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.cart.cartUnits.map(cartUnit => (
                  <CartUnit
                    cartUnit={cartUnit}
                    key={cartUnit.id}
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

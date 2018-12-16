import React, { Component } from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import gql from "graphql-tag";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!, $arrive: String!, $depart: String!) {
    addToCart(id: $id, arrive: $arrive, depart: $depart) {
      id
      arrive
      depart
    }
  }
`;

export default class Unit extends Component {
  static propTypes = {
    unit: PropTypes.object.isRequired
  };

  render() {
    const { unit, arrive, depart } = this.props;

    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id: unit.id, arrive, depart }}
      >
        {(addToCart, { loading, error }) => (
          <button
            onClick={() => {
              addToCart().catch(err => alert(err.message));
            }}
            title="Add To Booking"
          >
            {unit.title}
          </button>
        )}
      </Mutation>
    );
  }
}

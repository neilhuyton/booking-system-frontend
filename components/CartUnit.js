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

export default class CartUnit extends Component {
  static propTypes = {
    cartUnit: PropTypes.object.isRequired
  };

  render() {
    const { cartUnit } = this.props;
    const { id, arrive, depart } = cartUnit;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{ id, arrive, depart }}
      >
        {(addToCart, { loading, error }) => (
          <button
            onClick={() => {
              addToCart().catch(err => alert(err.message));
            }}
            title="Add To Booking"
          >
            {cartUnit.unit.title}
          </button>
        )}
      </Mutation>
    );
  }
}

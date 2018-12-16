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

export default class BookingUnit extends Component {
  static propTypes = {
    bookingUnit: PropTypes.object.isRequired
  };

  render() {
    const { bookingUnit } = this.props;
    return <>Hello {bookingUnit.id}</>;
  }
}

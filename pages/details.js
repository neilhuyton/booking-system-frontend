import { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Cart from "../components/Cart";

const CREATE_BOOKING_MUTATION = gql`
  mutation createBooking(
    $customerId: ID!
    $firstName: String!
    $lastName: String!
    $address1: String!
    $address2: String!
    $town: String!
    $county: String!
    $postCode: String!
    $country: String!
    $phone1: String!
    $phone2: String!
    $email: String!
  ) {
    createBooking(
      customerId: $customerId
      firstName: $firstName
      lastName: $lastName
      address1: $address1
      address2: $address2
      town: $town
      county: $county
      postCode: $postCode
      country: $country
      phone1: $phone1
      phone2: $phone2
      email: $email
    ) {
      id
    }
  }
`;

class DetailsPage extends Component {
  state = {
    customerId: "cjpora03yj97a0a00hzr8ibjq",
    firstName: "Neil",
    lastName: "Huyton",
    address1: "56 McClintock House",
    address2: "The Boulevard",
    town: "Leeds",
    county: "West Yorkshire",
    postCode: "LS10 1LP",
    country: "United Kingdom",
    phone1: "01524765423",
    phone2: "0777777777",
    email: "neil.huyton@gmail.com"
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  render() {
    return (
      <div>
        <Cart />
        <Mutation mutation={CREATE_BOOKING_MUTATION} variables={this.state}>
          {(createBooking, { loading }) => (
            <form
              data-test="form"
              onSubmit={async e => {
                e.preventDefault();
                const res = await createBooking();
                Router.push({
                  pathname: "/complete",
                  query: { id: res.data.createBooking.id }
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <label htmlFor="firstName">
                  First Name
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    required
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="lastName">
                  Last Name
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="address1">
                  Address 1
                  <input
                    type="text"
                    id="address1"
                    name="address1"
                    placeholder="Address 1"
                    required
                    value={this.state.address1}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="address2">
                  Address 2
                  <input
                    type="text"
                    id="address2"
                    name="address2"
                    placeholder="Address 2"
                    required
                    value={this.state.address2}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="town">
                  Town
                  <input
                    type="text"
                    id="town"
                    name="town"
                    placeholder="Town"
                    required
                    value={this.state.town}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="county">
                  County
                  <input
                    type="text"
                    id="county"
                    name="county"
                    placeholder="County"
                    required
                    value={this.state.county}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="postCode">
                  Post Code
                  <input
                    type="text"
                    id="postCode"
                    name="postCode"
                    placeholder="Post Code"
                    required
                    value={this.state.postCode}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="country">
                  Country
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="Country"
                    required
                    value={this.state.country}
                    onChange={this.handleChange}
                  />
                </label>
                <label htmlFor="email">
                  Email
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

export default DetailsPage;

import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from "next/router";
import Router from "next/router";
import styled from "styled-components";
import BookingUnit from "./BookingUnit";

const BOOKING_QUERY = gql`
  query BOOKING_QUERY($id: ID!) {
    booking(id: $id) {
      id
      bookingUnits {
        id
        unit {
          id
          title
        }
      }
    }
  }
`;

class BookingUnits extends Component {
  render() {
    const { query } = this.props.router;

    return (
      <div>
        <Query query={BOOKING_QUERY} variables={{ id: query.id }}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <div>
                {data.booking.bookingUnits.map(bookingUnit => (
                  <>
                    {bookingUnit.toString()}
                    <BookingUnit
                      bookingUnit={bookingUnit}
                      key={bookingUnit.id}
                      clickHandler={this.clickHandler}
                    />
                  </>
                ))}
              </div>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default withRouter(BookingUnits);
export { ALL_UNITS_QUERY };

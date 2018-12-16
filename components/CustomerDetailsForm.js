import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

export default class CustomerDetailsForm extends Component {
  render() {
    return (
      <div>
        <Link
          href={{
            pathname: "complete",
            query: { id: "12345abcde" }
          }}
        >
          <a>Complete</a>
        </Link>
      </div>
    );
  }
}

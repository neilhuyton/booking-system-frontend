import React, { Component } from "react";
import PropTypes from "prop-types";
import Router from "next/router";
import Link from "next/link";
import Select from "./Select";
import Button from "./Button";

export default class SearchForm extends Component {
  changeHandler() {
    console.log("changeHandler");
  }

  submitHandler(e) {
    e.preventDefault();

    Router.push({
      pathname: "/results",
      query: { arrive: "2018-12-14", depart: "2018-12-16" }
    });
  }

  render() {
    return (
      <form onSubmit={e => this.submitHandler(e)}>
        <Select
          data={[{ id: 1, name: "1" }]}
          valueField="id"
          nameField="name"
          changeHandler={this.changeHandler}
        />
        <Link
          href={{
            pathname: "results",
            query: { arrive: "2018-12-14", depart: "2018-12-16" }
          }}
        >
          <a>Search</a>
        </Link>
        <Button>Search</Button>
      </form>
    );
  }
}

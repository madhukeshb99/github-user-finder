import React, { Fragment } from "react";
import Search from "../users/Search";
import Result from "../layout/Result";
import Users from "../users/Users";

const Home = () => (
  <Fragment>
    <Search />
    <Result />
    <Users />
  </Fragment>
);

export default Home;

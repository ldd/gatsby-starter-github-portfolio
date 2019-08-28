import React from "preact/compat";
import "muicss/dist/css/mui.css";
import Section from "./section";
import RecentProjects from "../components/contributions";
import MyRepositories from "../components/repositories";
import { Button } from "muicss/react";

export default ({ data }) => (
  <div>
    <Section label="Recent projects" />
    <MyRepositories data={data.repositories} />
    <Section label="Recent contributions" />
    <RecentProjects data={data.contributions} />
  </div>
);

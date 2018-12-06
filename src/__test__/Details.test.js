import React from "react";
import Details from "../components/Details";
import { create } from "react-test-renderer";

test("snapshot", function() {
  const c = create(<Details />);
  expect(c.toJSON()).toMatchSnapshot();
});

test("test the togalmodal functionality", function() {
  const c = create(<Details />);
  const instance = c.getInstance();
  expect(instance.state.showModal).toBe(false);
  instance.toggleModal();
  expect(instance.state.showModal).toBe(true);
});

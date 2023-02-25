import React from "react";
import { App } from "./src/components/App";

export const wrapPageElement = ({ element, props }) =>
(
  <App {...props}>
    { element }
  </App>
)

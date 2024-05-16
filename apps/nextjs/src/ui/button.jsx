import React from "react";
import cx from "classnames";
import { Button as ButtonBaseComponent } from "@test-css-order/ui";

import * as css from "./button.css";

export function Button(props) {
  const { className, ...restProps } = props;
  return <ButtonBaseComponent className={cx(css.root, className)} {...restProps} />;
}

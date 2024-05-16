import React from "react";
import cx from "classnames";

import * as css from "./button.css";

export function Button(props) {
  const { className = "", ...restProps } = props;

  return <button className={cx(css.root, className)} {...restProps} />;
}

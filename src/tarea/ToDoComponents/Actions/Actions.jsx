import React, { forwardRef, useImperativeHandle } from "react";

const Actions = ({ children, ...props }) => {
  return <section {...props}>{children}</section>;
};

export default Actions;

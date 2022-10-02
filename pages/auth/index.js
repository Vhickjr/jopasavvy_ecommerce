import React from "react";
import User from "../../components/User";
export default function index() {
  return (
    <div>
      <h1>This is auth page</h1>
      <User name="max" age={28}></User>
    </div>
  );
}

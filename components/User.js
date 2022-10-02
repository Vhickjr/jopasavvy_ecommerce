import React from "react";

export default function User(props) {
  return (
    <div className="dothis">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <style jsx>{`
        .dothis {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
// style jsx allows you to write your code in your jsx, you could also use
// media querries there.

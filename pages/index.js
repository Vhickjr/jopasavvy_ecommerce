import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

export default class index extends Component {
  static getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ appName: "super App" });
      }, 1000);
    });
    return promise;
  }
  /*you can use this to prerender, fetch datat from a database*/
  render() {
    return (
      <div>
        <h1>The main page of {this.props.appName}</h1>
        <p>
          Go to
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button onClick={() => Router.push("/auth")}>Go to Auth</button>
      </div>
    );
  }
}

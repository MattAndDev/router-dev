import React from "react";

function Checkout({ data }) {
  return (
    <div>
      <p>Hi I'm Chekout</p>
      <p>With props: {data}</p>
      <a href="/">Go back</a>
    </div>
  );
}

window.define('Checkout', [], function () {
  return {Checkout: Checkout}
});
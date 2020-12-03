import React from "react";

function Checkout({ data }) {
  return (
    <div>
      <p>Hi I'm Chekout</p>
      <p>With props: {data}</p>
    </div>
  );
}
window.define('Checkout', [], function () {
  return {Checkout: Checkout}
});
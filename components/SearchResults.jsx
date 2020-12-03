import React from "react";

function SearchResults() {
  return (
    <div>
      <p>Hi I'm search results</p>
      <a href="/checkout.html">Buy a ticket</a>
    </div>
  );
}
window.define('SearchResults', [], function () {
  return {SearchResults: SearchResults}
});
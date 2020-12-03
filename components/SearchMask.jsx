import React from "react";

function SearchMask() {
  return (
    <div>
      <p>Hi I'm search mask</p>
    </div>
  );
}
window.define('SearchMask', [], function () {
  return {SearchMask: SearchMask}
});
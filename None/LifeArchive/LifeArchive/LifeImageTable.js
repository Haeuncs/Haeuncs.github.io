import React, { Component } from "react";

export default class LifeImageTable extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th colspan="2">The table header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The table body</td>
              <td>with two columns</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

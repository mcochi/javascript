import React from 'react';
import ReactDOM from 'react-dom';

class SimpleTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <table class="table">
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Lastname</th>
        <th>Email</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
        <td>Moe</td>
        <td>mary@example.com</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
    </tbody>
  </table>
        );
    }

}

export default SimpleTable;
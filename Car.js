import React from "react";
import Radium from 'radium'; // Corrected the import statement
import "./Car.css";



class Car extends React.Component {
  render() {
    const inputClasses = ['input'];

    if (this.props.name !== '') {
      inputClasses.push('green');
    } else {
      inputClasses.push('red');
    }

    if (this.props.name.length > 4) {
      inputClasses.push('bold');
    }

    return (
      <div className="Car">
        <h3>Дорамы Имя: {this.props.name}</h3>
        <p>Дата выхода: <strong>{this.props.year}</strong></p>
        <input
          type="text"
          onChange={this.props.onChangeName}
          value={this.props.name}
          className={inputClasses.join(' ')}
        />
        <button onClick={this.props.onDelete}>Delete</button>
      </div>
    );
  }
}

export default Radium(Car);

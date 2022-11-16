import React, { Component } from "react";
import "./task-filter.css";

export default class TaskFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "completed", label: "Completed" },
  ];

  static defaultProps = {
    onFilterChange: () => {},
  };

  render() {
    const { filterValue, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filterValue === name;
      const className = isActive ? "selected" : "";

      return (
        <li key={name}>
          <button type="button" className={className} onClick={() => onFilterChange(name)}>
            {label}
          </button>
        </li>
      );
    });

    return <ul className="filters">{buttons}</ul>;
  }
}

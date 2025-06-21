import React from "react";
import { Dropdown, Form } from "react-bootstrap";

const TableColumnVisibility = ({ table }) => {
  const isRlt = true;
  return (
    <Dropdown className="custom-dropdown" style={{ zIndex: "10" }}>
      <Dropdown.Toggle id="dropdown-basic">
        <i className="fas fa-columns me-2 "></i>
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ backgroundColor: "#fff", width: "250px" }}>
        <div className="d-flex align-items-center  justify-content-between border-bottom pb-2 px-2">
          <Form.Check
            type="radio"
            label="إظهار الكل"
            name="show"
            id="show-all"
            onChange={() => {
              table
                .getAllLeafColumns()
                .forEach((col) => col.toggleVisibility(true));
            }}
          />
          <Form.Check
            type="radio"
            label="إخفاء الكل"
            name="show"
            id="hide-all"
            onChange={() => {
              table
                .getAllLeafColumns()
                .forEach((col) => col.toggleVisibility(false));
            }}
          />
        </div>
        <div className="d-flex flex-column gap-2 px-2 custom-dropdown__items">
          {table.getAllLeafColumns().map((col) => {
            return (
              <Form.Check
                key={col.id}
                type="checkbox"
                label={col.columnDef.header}
                id={col.id}
                checked={col.getIsVisible()}
                onChange={() => col.toggleVisibility()}
              />
            );
          })}
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default TableColumnVisibility;

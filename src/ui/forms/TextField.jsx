import { Form } from "react-bootstrap";

export default function TextField({ label, hint, ...props }) {
  return (
    <div className="input-field">
      {label && (
        <label htmlFor={props.id}>
          {label} {hint}
        </label>
      )}
      <Form.Control as={"textarea"} {...props} />
    </div>
  );
}

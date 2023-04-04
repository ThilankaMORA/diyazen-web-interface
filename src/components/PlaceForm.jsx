import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function PlaceForm() {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(text);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Label ClassName="text-muted">
        Add Place:
        <input type="text" value={text} onChange={handleChange} />
      </Form.Label>
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default PlaceForm;

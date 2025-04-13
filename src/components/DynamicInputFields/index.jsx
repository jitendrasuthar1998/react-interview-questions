import { useState } from "react";

const DynamicInputFields = () => {
  const [fields, setFields] = useState([]);
  const [text, setText] = useState("");

  const handleAdd = () => {
    let isFieldExist = fields.some(
      (field) => field.label.toLowerCase() == text.toLowerCase()
    );
    if (isFieldExist) {
      alert("Field already exist");
      return;
    }

    setFields((prevFields) => [
      ...prevFields,
      { label: text, value: "", id: Date.now() },
    ]);
    setText("");
  };

  const handleUpdate = (e, id) => {
    setFields((prevFields) =>
      prevFields.map((field) =>
        field.id == id ? { ...field, value: e.target.value } : field
      )
    );
  };

  const handleDelete = (id) => {
    setFields((prevFields) => prevFields.filter((field) => field.id != id));
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd();
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      {fields.length
        ? fields.map(({ id, label, value }) => (
            <div key={id}>
              <label>
                {" "}
                {label}{" "}
                <input value={value} onChange={(e) => handleUpdate(e, id)} />
              </label>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
          ))
        : null}
    </div>
  );
};

export default DynamicInputFields;

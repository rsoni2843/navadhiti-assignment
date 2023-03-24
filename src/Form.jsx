import React, { useState } from "react";

function Form({ schema }) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  console.log(schema);
  return (
    <form onSubmit={handleSubmit}>
      {schema.fields.map((field) => {
        switch (field.type) {
          case "date":
            return (
              <div key={field.key}>
                <label>{field.label}</label>
                <input
                  type="date"
                  name={field.key}
                  value={formData[field.key] || ""}
                  onChange={handleInputChange}
                  required={field.isRequired}
                  readOnly={field.isReadonly}
                />
              </div>
            );
          case "number":
            return (
              <div key={field.key}>
                <label>{field.label}</label>
                <input
                  type="number"
                  name={field.key}
                  value={formData[field.key] || ""}
                  onChange={handleInputChange}
                  required={field.isRequired}
                  readOnly={field.isReadonly}
                />
              </div>
            );
          case "dropdown":
            return (
              <div key={field.key}>
                <label>{field.label}</label>
                <select
                  name={field.key}
                  value={formData[field.key] || ""}
                  onChange={handleInputChange}
                  required={field.isRequired}
                  readOnly={field.isReadonly}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {field.items.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.text}
                    </option>
                  ))}
                </select>
              </div>
            );
          default:
            return null;
        }
      })}
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;

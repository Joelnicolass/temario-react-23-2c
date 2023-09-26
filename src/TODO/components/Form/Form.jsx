import React, { useState, forwardRef, useImperativeHandle } from "react";

const Form = forwardRef(({ children }, ref) => {
  const [form, setForm] = useState({
    title: "",
  });

  useImperativeHandle(
    ref,
    () => ({
      getForm: () => form,
      resetForm: () => setForm({ title: "" }),
    }),
    [form]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <section>
      <form>
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={handleChange}
        />
        {children}
      </form>
    </section>
  );
});

Form.displayName = "Form";

export default Form;

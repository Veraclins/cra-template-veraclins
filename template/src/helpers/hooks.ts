import React, { useState } from 'react';

export const useForm = (initialValues: any, callback: Function) => {
  const [values, setValues] = useState(initialValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    event.persist();
    setValues((val: any) => {
      let value: any = '';
      if (event.target.type === 'checkbox') {
        event = event as React.ChangeEvent<HTMLInputElement>;
        value = event.target.checked;
      } else {
        value = event.target.value;
      }
      return {
        ...val,
        [event.target.name]: value,
      };
    });
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

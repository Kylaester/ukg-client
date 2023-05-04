import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text); // Replace with your desired form submission logic
    setText('');
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Enter your text:</label>
      <textarea id="text" name="text" value={text} onChange={handleTextChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
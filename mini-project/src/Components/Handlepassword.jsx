import React, { useState } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const hasMinLength = password.length >= 6;
    const hasSymbol = /[!@#$%^&*]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);

    if (hasMinLength && hasSymbol && hasUppercase) {
      // Password is valid
      setIsValid(true);
      // Perform further actions
    } else {
      // Password is invalid
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      <button type="submit">Submit</button>
      {!isValid && (
        <p>
          Password should have at least 6 characters, at least 1 symbol, and at least 1 uppercase letter.
        </p>
      )}
    </form>
  );
};

export default PasswordForm;
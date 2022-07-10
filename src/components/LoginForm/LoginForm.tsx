import React, { FC, useState } from 'react';
import './LoginForm.css';
import { getFormData } from '../../utils/forms';
import { API } from '../../network/API';
import { useRouter } from '../../hooks/useRouter';

interface FormValue {
  email: string;
  password: string;
}

export const LoginForm: FC = () => {
  const { navigateTo } = useRouter();
  const [invalidForm, setInvalidForm] = useState<boolean>(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = getFormData<FormValue>(event.target);

    // TODO: Disable button
    // TODO: Validations
    await API.signin(email, password)
      .then(() => navigateTo('dashboard'))
      .catch(() => setInvalidForm(true));
    // TODO: enable form
  };

  return <form className="Form" onSubmit={handleSubmit}>
    <label>Email</label>
    <input type="email" name="email" required/>
    <label>Password</label>
    <input type="password" name="password" required/>
    <input type="submit" value="Login"/>
    {invalidForm && <span className="Error">Incorrect email/password combination</span>}
  </form>;
};

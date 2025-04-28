import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SignIn() {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="container-sm "
        style={{
          maxWidth: '400px',
          height: '500px',
          padding: '5rem 0',
          margin: '3rem auto',
        }}
      >
        <form className="d-flex flex-column">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              {t('email')}
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              {t('password')}
            </label>
            <input
              type="password"
              class="form-control w-100"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              {t('keepMeLoggedIn')}
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            {t('signIn')}
          </button>
        </form>
      </div>
    </>
  );
}

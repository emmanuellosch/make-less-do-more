import React, { useReducer, useState } from "react";
import styled from "styled-components";
import FileUpload from "../components/UploadComponent";

export default function Profil() {
  const [submitting, setSubmitting] = useState(false);
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const formReducer = (state, event) => {
    if (event.reset) {
      return {
        name: "",
        status: "",
      };
    }
    return {
      ...state,
      [event.name]: event.value,
    };
  };

  const [formData, setFormData] = useReducer(formReducer, {});

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 3000);
  };

  const handleChange = (event) => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  };

  return (
    <div className="profil-wrapper">
      <h1>Profil</h1>
      {submitting && (
        <div>
          You are submitting the following:
          <ul>
            {Object.entries(formData).map(([name, value]) => (
              <li key={name}>
                <strong>{name}</strong>:{value.toString()}
              </li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h2>Profile Card</h2>
        <FileUpload
          accept=".jpg,.png,.jpeg"
          label="Profile Image(s)"
          multiple
          updateFilesCb={updateUploadedFiles}
        />

        <fieldset disabled={submitting}>
          <label>
            <p>Name</p>
            <input
              name="name"
              onChange={handleChange}
              value={formData.name || ""}
            />
          </label>
        </fieldset>

        <fieldset>
          <label>
            <p>Status</p>
            <input
              name="status"
              onChange={handleChange}
              value={formData.status || ""}
            />
          </label>
        </fieldset>

        <Button type="submit" className="save" disabled={submitting}>
          Save
        </Button>
      </form>
    </div>
  );
}

const Button = styled.button`
  background-color: #bebebe;
  border: 2px solid #fff;
  border-radius: 20px;
  color: #922c88;
  font-weight: bold;
  padding: 1.2rem;
  opacity: 0.7;
  box-shadow: 0 0 5px rgba(75, 75, 75, 0.07);
  text-transform: uppercase;
  width: 100%;
`;

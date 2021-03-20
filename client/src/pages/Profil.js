import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Profil(
  onChange,
  onSubmit,
  src,
  value,
  status,
  children,
  name
) {
  const ImgUpload = {
    onChange,
    src,
  };
  const Name = {
    onChange,
    value,
  };

  const Status = {
    onChange,
    value,
  };

  const Profile = {
    onSubmit,
    src,
    name,
    status,
  };

  const Edit = {
    onSubmit,
    children,
  };

  return (
    <div className="profil-wrapper">
      <h1>Profil</h1>
      <Div>
        <label for="photo-upload" className="custom-file-upload fas">
          <div className="img-wrap img-upload">
            <FontAwesomeIcon icon={faUser} size="7x" className="photo-upload" />
          </div>
          <input id="photo-upload" type="file" onChange={onChange} />
        </label>
        <div className="field">
          <span>name:</span>
          <input
            type="text"
            onChange={onChange}
            maxlength="25"
            value={value}
            placeholder="Emmanuel"
            required
          />
        </div>
        <div className="field">
          <span>Zero Waste Status:</span>
          <input
            type="text"
            onChange={onChange}
            maxlength="35"
            value={value}
            placeholder="Zero Waste Week 33!"
            required
          />
        </div>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
            <label className="custom-file-upload">
              <div className="img-wrap">
                <img for="photo-upload" src={src} />
              </div>
            </label>
            <div className="name">{name}</div>
            <div className="status">{status}</div>
            <button type="submit" className="edit">
              Edit Profile{" "}
            </button>
          </form>
        </div>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
            {children}
            <button type="submit" className="save">
              Save{" "}
            </button>
          </form>
        </div>
      </Div>
    </div>
  );
}

const Div = styled.div`
  body {
    font-family: "Cormorant Garamond", serif;
    color: #054231;
    display: flex;
    justify-content: center;
    background: #bebebe;
    background-image: url("https://github.com/OlgaKoplik/CodePen/blob/master/leaf.png?raw=true");
    background-repeat: no-repeat, no-repeat;
    background-position: 200% -40%;
    background-size: 80%;
  }

  .fa-user {
    color: #922c88;
  }

  .card {
    width: 310px;
    height: 627px;
    padding: 15px;
    margin-top: 40px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    box-shadow: 15px 10px 25px 0px #bebebe;
    background: #fff;
    background-image: url("https://github.com/OlgaKoplik/CodePen/blob/master/leaf2.png?raw=true"),
      url("https://github.com/OlgaKoplik/CodePen/blob/master/leaf.png?raw=true");
    background-repeat: no-repeat, no-repeat;
    background-position: 120% -5%, 200% -40%;
    background-size: 40%, 80%;
    animation: open 0.5s;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .field {
    margin: 5px;
    display: flex;
    flex-direction: column;
  }
  input[type="file"] {
    display: none;
  }

  .custom-file-upload {
    border-radius: 50%;
    display: inline-block;
    position: relative;
    padding: 6px;
    cursor: pointer;
    background: #bebebe;
    margin-bottom: 25px;
  }

  .img-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
  }
  .img-upload:before {
    content: "\f093";
    font-size: 90px;
    position: absolute;
    padding-top: 80px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #63d3a6;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #fff;
  }
  .img-upload:hover:before {
    opacity: 1;
  }

  span {
    text-transform: uppercase;
    font-weight: 700;
    color: #676767;
  }

  input {
    border-radius: 15px;
    border: 1px solid #b7b7b7;
    padding: 5px 5px 5px 10px;
    font-size: 18px;
    transition: 0.2s;
  }
  input:focus {
    outline: none;
    border: 1px solid #64d488;
  }
  input::placeholder {
    color: #bebebe;
  }
  .name {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    color: #676767;
    max-width: 220px;
    overflow-wrap: break-word;
  }
  .status {
    text-align: center;
    max-width: 220px;
    overflow-wrap: break-word;
  }
  button {
    position: relative;
    color: #054231;
    letter-spacing: 1px;
    margin: 20px;
    font-size: 18px;
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    border-radius: 10px;
    cursor: pointer;
    border-radius: 25px;
    border: none;
    background: #bebebe;
  }
  .save {
    color: #922c88;
    width: 180px;
  }
  .edit {
    color: #922c88;
    width: 180px;
  }
  button:hover {
    left: 0;
    color: #fff;
    width: 180px;
    box-shadow: 0px 0px 20px 0px;
  }
  button:focus {
    outline: none;
  }
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
`;

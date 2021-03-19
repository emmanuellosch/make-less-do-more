import React, { useState } from "react";
import styled from "styled-components";

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
            <img for="photo-upload" src={src} />
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
            placeholder="Alexa"
            required
          />
        </div>
        <div className="field">
          <span>status:</span>
          <input
            type="text"
            onChange={onChange}
            maxlength="35"
            value={value}
            placeholder="It's a nice day!"
            required
          />
        </div>
        <div className="card">
          <form onSubmit={onSubmit}>
            <h1>Profile Card</h1>
            <label className="custom-file-upload fas">
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
    background: #49afa8;
    background-image: url("https://github.com/OlgaKoplik/CodePen/blob/master/leaf.png?raw=true");
    background-repeat: no-repeat, no-repeat;
    background-position: 200% -40%;
    background-size: 80%;
  }

  .card {
    width: 310px;
    height: 627px;
    padding: 15px;
    margin-top: 40px;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    box-shadow: 15px 10px 25px 0px #3fa1a9;
    background: #fff;
    background-image: url("https://images.unsplash.com/photo-1533119408463-b0f487583ff6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bGVhdmVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"),
      background-repeat no-repeat, no-repeat;
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
  img {
    width: auto;
    height: 100%;
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
    background: #64d488;
  }
  .save {
    font-weight: 600;
    left: -20px;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 20px;
    box-shadow: 20px 0px 40px 0px;
  }
  .edit {
    color: #fff;
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

  .fa-instagram {
    position: absolute;
    color: #79f1a4;
    top: 3%;
    right: 2%;
    font-size: 38px;
  }
  .fa-instagram:hover {
    font-size: 42px;

    transition: all 0.1s linear;
    cursor: pointer;
  }
`;

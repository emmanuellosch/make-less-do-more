import React from "react";
import styled from "styled-components";
import { profile } from "../profile/profile";
import logo1 from "../images/logo1.png";

export default function Profil() {
  return (
    <div className="profil-wrapper">
      <p className="date">
        <span className="date_span">Zero</span>
      </p>
      <h1>Profile</h1>
      <p className="date">
        <span className="date_span">Waste</span>
      </p>

      <Div>
        <div className="card">
          <form>
            <h2>Profile Card</h2>
            <div className="name">{profile.name}</div>
            <label className="custom-file-upload">
              <div className="img-wrap">
                <img src={profile.image} alt="" width="200" />
              </div>
            </label>
            <div className="status">"{profile.status}"</div>
            <img src={logo1} alt="logo" className="logo1" />
            <Button type="submit" className="edit">
              Edit Profile
            </Button>
          </form>
        </div>
      </Div>
    </div>
  );
}

const Div = styled.div`
  .card {
    width: 310px;
    height: 627px;
    padding: 15px;
    margin: 40px auto;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    box-shadow: 0px 15px 25px -10px #922c88;
    background: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .logo1 {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
    width: 50%;
  }

  .img-wrap {
    position: relative;
    width: 200px;
    height: 200px;
    overflow: hidden;
    border-radius: 50%;
    margin: 25% auto;
  }

  .name {
    margin-top: -20px;
  }

  .status {
    margin-top: -30px;
  }
`;

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
  margin-top: 24px;
`;

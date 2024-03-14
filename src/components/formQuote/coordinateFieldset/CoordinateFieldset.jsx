import React from "react";

const CoordinateFieldset = ({ formData, handleInputChange }) => {
  return (
    <fieldset>
      <legend>Vos coordonnées</legend>
      <div className="containerReception">
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Nom :"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="Prénom :"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="company"
              id="company"
              placeholder="Société :"
              value={formData.company}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Adresse :"
              value={formData.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Téléphone :"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="mail"
              id="mail"
              placeholder="Email :"
              value={formData.mail}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CoordinateFieldset;

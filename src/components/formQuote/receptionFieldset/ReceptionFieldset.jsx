import React from "react";

const ReceptionFieldset = ({ formData, handleInputChange }) => {
  return (
    <fieldset>
      <legend>Réception</legend>
      <div className="containerReception">
        <h4>
          Type de prestation{" "}
          <span>(Sélectionnez la/les prestation(s) souhaitée(s))</span>
        </h4>
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="aperitifCocktail"
              id="aperitifCocktail"
              checked={formData.aperitifCocktail}
              onChange={handleInputChange}
            />
            <label htmlFor="aperitifCocktail">Cocktail apéritif</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="lunchCocktail"
              id="lunchCocktail"
              checked={formData.lunchCocktail}
              onChange={handleInputChange}
            />
            <label htmlFor="lunchCocktail">
              Cocktail déjeunatoire/dinatoire
            </label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="standingBuffet"
              id="standingBuffet"
              checked={formData.standingBuffet}
              onChange={handleInputChange}
            />
            <label htmlFor="standingBuffet">Buffet debout</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="seatedBuffet"
              id="seatedBuffet"
              checked={formData.seatedBuffet}
              onChange={handleInputChange}
            />
            <label htmlFor="seatedBuffet">Buffet assis</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="platedMeal"
              id="platedMeal"
              checked={formData.platedMeal}
              onChange={handleInputChange}
            />
            <label htmlFor="platedMeal">Repas servis à l'assiette</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={formData.breakfast}
              onChange={handleInputChange}
            />
            <label htmlFor="breakfast">Petit déjeuner</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="text"
              name="other"
              id="other"
              placeholder="Autre prestation"
              value={formData.other}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="containerReception">
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <input
              type="text"
              name="place"
              id="place"
              placeholder="Lieu de réception"
              value={formData.place}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="containerReception">
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <div className="inputBgColor">
              <label htmlFor="date">Date de réception</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inputBgColor">
              <label htmlFor="startTime">Heure de début</label>
              <input
                type="time"
                name="startTime"
                id="startTime"
                value={formData.startTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inputBgColor">
              <label htmlFor="endTime">Heure de fin</label>
              <input
                type="time"
                name="endTime"
                id="endTime"
                value={formData.endTime}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inputBgColor">
              <label htmlFor="numberGuest">Nombre de convives</label>
              <input
                type="number"
                name="numberGuest"
                id="numberGuest"
                value={formData.numberGuest}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="inputBgColor">
              <p>Personnels souhaités</p>
              <div className="flexDirection">
                <div className="flexDirection">
                  <input
                    type="radio"
                    name="personnelWanted"
                    id="radioYes"
                    value="oui"
                    checked={formData.personnelWanted === "oui"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radioYes">Oui</label>
                </div>
                <div className="flexDirection">
                  <input
                    type="radio"
                    name="personnelWanted"
                    id="radioNo"
                    value="non"
                    checked={formData.personnelWanted === "non"}
                    onChange={handleInputChange}
                  />
                  <label htmlFor="radioNo">Non</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default ReceptionFieldset;

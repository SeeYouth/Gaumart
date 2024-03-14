import React from "react";

const ServiceFieldset = ({ formData, handleInputChange }) => {
  return (
    <fieldset>
      <legend>Services</legend>
      <div>
        <div className="containerReception">
          <h4>Boissons alcoolisées :</h4>
          <div className="checkServiceType">
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="redWine"
                id="redWine"
                checked={formData.redWine}
                onChange={handleInputChange}
              />
              <label htmlFor="redWine">Vin rouge</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="whiteWine"
                id="whiteWine"
                checked={formData.whiteWine}
                onChange={handleInputChange}
              />
              <label htmlFor="whiteWine">Vin blanc</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="roseWine"
                id="roseWine"
                checked={formData.roseWine}
                onChange={handleInputChange}
              />
              <label htmlFor="roseWine">Vin rosé</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="champagne"
                id="champagne"
                checked={formData.champagne}
                onChange={handleInputChange}
              />
              <label htmlFor="champagne">Champagne</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="cremant"
                id="cremant"
                checked={formData.cremant}
                onChange={handleInputChange}
              />
              <label htmlFor="cremant">Crémant</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="kir"
                id="kir"
                checked={formData.kir}
                onChange={handleInputChange}
              />
              <label htmlFor="kir">Kir</label>
            </div>
            <div className="checkServiceTypeText">
              <input
                type="checkbox"
                name="spirits"
                id="spirits"
                checked={formData.spirits}
                onChange={handleInputChange}
              />
              <label htmlFor="spirits">Alcool fort</label>
            </div>
          </div>
        </div>
      </div>
      <div className="containerReception">
        <h4>Boissons non alcoolisées :</h4>
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="water"
              id="water"
              checked={formData.water}
              onChange={handleInputChange}
            />
            <label htmlFor="water">Eaux minerales plates/gazeuses</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="coffee"
              id="coffee"
              checked={formData.coffee}
              onChange={handleInputChange}
            />
            <label htmlFor="coffee">Café</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="sodas"
              id="sodas"
              checked={formData.sodas}
              onChange={handleInputChange}
            />
            <label htmlFor="sodas">Jus de fruits et sodas</label>
          </div>
        </div>
      </div>
      <div className="containerReception">
        <h4>Besoins complémentaire :</h4>
        <div className="checkServiceType">
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="disposableTableware"
              id="disposableTableware"
              checked={formData.disposableTableware}
              onChange={handleInputChange}
            />
            <label htmlFor="disposableTableware">Matériel jetable</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="rentalReceptionEquipment"
              id="rentalReceptionEquipment"
              checked={formData.rentalReceptionEquipment}
              onChange={handleInputChange}
            />
            <label htmlFor="rentalReceptionEquipment">
              Matériel de réception à louer
            </label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="waitStaff"
              id="waitStaff"
              checked={formData.waitStaff}
              onChange={handleInputChange}
            />
            <label htmlFor="waitStaff">Personnel de service</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="buffetDecoration"
              id="buffetDecoration"
              checked={formData.buffetDecoration}
              onChange={handleInputChange}
            />
            <label htmlFor="buffetDecoration">Décoration de buffet</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="flowerDecoration"
              id="flowerDecoration"
              checked={formData.flowerDecoration}
              onChange={handleInputChange}
            />
            <label htmlFor="flowerDecoration">Décoration florale</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="freshFlower"
              id="freshFlower"
              checked={formData.freshFlower}
              onChange={handleInputChange}
            />
            <label htmlFor="freshFlower">
              Centre de table en fleurs fraîches
            </label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="tablecloth"
              id="tablecloth"
              checked={formData.tablecloth}
              onChange={handleInputChange}
            />
            <label htmlFor="tablecloth">Nappage</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="musicalEntertainment"
              id="musicalEntertainment"
              checked={formData.musicalEntertainment}
              onChange={handleInputChange}
            />
            <label htmlFor="musicalEntertainment">Animation musicale</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="checkbox"
              name="receptionHall"
              id="receptionHall"
              checked={formData.receptionHall}
              onChange={handleInputChange}
            />
            <label htmlFor="receptionHall">Salles de réception</label>
          </div>
          <div className="checkServiceTypeText">
            <input
              type="text"
              name="otherService"
              id="otherService"
              placeholder="Autres :"
              value={formData.otherService}
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default ServiceFieldset;

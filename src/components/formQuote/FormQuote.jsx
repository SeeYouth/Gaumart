import { useState } from "react";

import { useNavigate } from "react-router-dom";

import BtnSubmit from "../btnSubmit/BtnSubmit";
import BudgetFieldset from "./budgetFieldset/BudgetFieldset";
import CoordinateFieldset from "./coordinateFieldset/CoordinateFieldset";
import ReceptionFieldset from "./receptionFieldset/ReceptionFieldset";
import ServiceFieldset from "./serviceFieldset/ServiceFieldset";
import TitleCoordinateGaumart from "../titleCoordinateGaumart/TitleCoordinateGaumart";

const FormQuote = () => {
  const navigate = useNavigate();
  // Stock l'état de formData
  const [formData, setFormData] = useState({
    //Reception
    aperitifCocktail: false,
    lunchCocktail: false,
    standingBuffet: false,
    seatedBuffet: false,
    platedMeal: false,
    breakfast: false,
    other: "",
    place: "",
    date: "",
    startTime: "",
    endTime: "",
    numberGuest: "",
    personnelWanted: "",
    // Service
    redWine: false,
    whiteWine: false,
    roseWine: false,
    champagne: false,
    cremant: false,
    kir: false,
    spirits: false,
    water: false,
    coffee: false,
    sodas: false,
    disposableTableware: false,
    rentalReceptionEquipment: false,
    waitStaff: false,
    buffetDecoration: false,
    flowerDecoration: false,
    freshFlower: false,
    tablecloth: false,
    musicalEntertainment: false,
    receptionHall: false,
    otherService: "",
    //Budget Range
    budgetRange: [3500, 30000],
    //Coordinate
    lastName: "",
    firstName: "",
    company: "",
    address: "",
    phoneNumber: "",
    mail: ""
  });

  const validateReception = () => {
    // Valider les types de prestations
    const hasPrestationSelected =
      formData.aperitifCocktail ||
      formData.lunchCocktail ||
      formData.standingBuffet ||
      formData.seatedBuffet ||
      formData.platedMeal ||
      formData.breakfast ||
      formData.other.trim() !== "";
    const hasLocationAndDate =
      formData.place.trim() !== "" &&
      formData.date.trim() !== "" &&
      formData.startTime !== "" &&
      formData.endTime !== "" &&
      formData.numberGuest !== "";
    const hasPersonnelSelected =
      formData.personnelWanted === "oui" || formData.personnelWanted === "non";

    const hasReceptionSelected =
      hasPrestationSelected && hasLocationAndDate && hasPersonnelSelected;

    return hasReceptionSelected;
  };

  const validateService = () => {
    // Valider les services
    const hasServiceSelected =
      formData.redWine ||
      formData.whiteWine ||
      formData.roseWine ||
      formData.champagne ||
      formData.cremant ||
      formData.kir ||
      formData.spirits ||
      formData.water ||
      formData.coffee ||
      formData.sodas ||
      formData.disposableTableware ||
      formData.rentalReceptionEquipment ||
      formData.waitStaff ||
      formData.buffetDecoration ||
      formData.flowerDecoration ||
      formData.freshFlower ||
      formData.tablecloth ||
      formData.musicalEntertainment ||
      formData.receptionHall ||
      formData.otherService.trim() !== "";

    return hasServiceSelected;
  };

  const validateCoordinate = () => {
    // Validez les coordonnées
    const fieldsFilled =
      formData.lastName.trim() !== "" &&
      formData.firstName.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.mail.trim() !== "";
    return fieldsFilled;
  };

  const handleInputChange = event => {
    // Mise à jour des champs du formulaire
    const { name, value, type, checked } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const validateForm = () => {
    // Validez chaque section du formulaire
    return validateReception() && validateService() && validateCoordinate();
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Validez le formulaire
    if (validateForm()) {
      navigate("/devis", {
        state: {
          formData
        }
      });
    } else {
      console.log("Le formulaire est invalide, afficher un message d'erreur.");
    }
  };
  console.log(formData);
  return (
    <main>
      <div className="formQuote">
        <TitleCoordinateGaumart />
        <h3>Demande de devis</h3>
        <form onSubmit={handleSubmit} method="post">
          <ReceptionFieldset
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <ServiceFieldset
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <BudgetFieldset
            budgetRange={formData.budgetRange}
            onBudgetChange={newRange =>
              setFormData({ ...formData, budgetRange: newRange })}
          />
          <CoordinateFieldset
            formData={formData}
            handleInputChange={handleInputChange}
          />
          <BtnSubmit />
        </form>
      </div>
    </main>
  );
};

export default FormQuote;

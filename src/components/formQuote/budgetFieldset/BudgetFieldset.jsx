import React from "react";

import ReactSlider from "react-slider";

const BudgetFieldset = ({ budgetRange, onBudgetChange }) => {
  function formatCurrency(value) {
    return value.toLocaleString("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  }
  return (
    <fieldset>
      <legend>Votre budget</legend>
      <div className="containerReception">
        <h4>Budget par personne :</h4>
        <div className="checkServiceType">
          <div className="containerSlider">
            <ReactSlider
              className="horizontalSlider"
              thumbClassName="budgetThumb"
              trackClassName="budgetTrack"
              value={budgetRange}
              onChange={onBudgetChange}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={state => `Thumb value ${state.valueNow}`}
              renderThumb={(props, state) =>
                <div {...props}>
                  {formatCurrency(state.valueNow)}
                </div>}
              pearling
              step={100}
              minDistance={5000}
              min={3500}
              max={30000}
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default BudgetFieldset;

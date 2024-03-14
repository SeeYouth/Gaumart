import React from "react";

const FormSubmitComponent = ({ formData }) => {
  return (
    <main className="formSubmit">
      <div className="formSubmit__container">
        <h2 className="congratulation">
          <span>Bravo</span> <br /> vous avez envoyé les informations suivantes
        </h2>
        <pre>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </main>
  );
};

export default FormSubmitComponent;

import React from "react";

import { Link } from "react-router-dom";

import Mail from "../mail/Mail";

const Form = () => {
  return (
    <main>
      <div className="form">
        <div className="textForm">
          <h2>gaumart</h2>
          <h3>Traiteur et Organisateur de Réception</h3>
          <p>
            Depuis plus de 25 ans, nous organisons vos cocktails, buffets,
            réceptions ...
          </p>
          <p>
            toutes nos proposition sont personnalisées pour répondre au mieux à
            vos attentes.
          </p>
          <p>Tél: 01 45 83 78 78</p>
          <Mail />
          <Link className="linkQuote" to="/quote">
            {" "}
            Faire une demande de devis en ligne{" "}
          </Link>
        </div>
        <form method="post">
          <div className="containerReception">
            <div className="checkServiceType">
              <div className="checkServiceTypeText">
                <input type="text" name="name" id="name" placeholder="NOM*" />
                <input
                  type="text"
                  name="company"
                  id="company"
                  placeholder="SOCIETE *"
                />
                <input
                  type="email"
                  name="mail"
                  id="mail"
                  placeholder="EMAIL*"
                />
                <input type="tel" name="phone" id="phone" placeholder="TEL" />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="MESSAGE*"
                ></textarea>
                <div className="inputSubmit">
                  <input className="submit" type="submit" value="ENVOYER" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;

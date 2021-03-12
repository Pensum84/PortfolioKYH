import React from 'react';
import ciciportfolio from "./Images/ciciportfolio";

function About(props){
    return (
      <div>
        <h1>Om Mig</h1>
        <div className="aboutMeText">
          <h2>Vem är jag?</h2>
          <p>
            Mitt namn är Cicilia och Jag bor i Stockholm med min make och våra 2
            barn.
            <br /> Jag är en Frontend-utvecklare med intresse och utbildning
            inom Informationssäkerhet.
            <br /> Det som driver mig i min vardag är snygg Design och ett sinne
            för Kreativitet.
            <br /> Fritiden spenderar jag antingen med hästarna i stallet eller
            bland vikterna på gymmet.
            <br />
            Fast helst av allt är jag ju faktis med min familj som är det
            finaste jag har!
          </p>
        </div>
        <div className="education">
          <h2>Utbildningar:</h2>
          <ul>
            <li>Frontend - KYH Yrkeshögskola</li>
            <li>Webbutveckling I och II - Luleå Tekniska Universitet</li>
            <li>IT-Säkerhetsspecialist - SIH Yrkeshögskola</li>
            <li>Barnskötare - Omsorgslyftet Komvux</li>
            <li>Resesäljare(IATA/Amadeus) - Pro Nordic Education</li>
          </ul>
        </div>
        <div className="image">
          <img
            src={ciciportfolio}
            className="profileimage"
            alt="Bild på Cicilia"
          />
        </div>
        <div class="circle">
          <div id="black"></div>
          <div id="yellow"></div>
          <div id="purple"></div>
        </div>
      </div>
    );
}

export default About;
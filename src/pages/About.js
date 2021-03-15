import React from 'react';

function About(props){
    return (
      <div className="about">
        <h1>Om Mig</h1>
        <div className="circle">
          <div className="dot-1"></div>
          <div className="dot-2"></div>
          <div className="dot-3"></div>
          <div className="dot1-small"></div>
          <div className="dot2-small"></div>
          <div className="dot3-small"></div>
          <div className="dot1-medium"></div>
          <div className="dot1extra-medium"></div>
          <div className="dot2-medium"></div>
          <div className="dot3-medium"></div>

          <div id="yellow"></div>
          <div className="text">
            <div className="aboutMeText">
              <h2>Vem är jag?</h2>
              <p>
                Mitt namn är Cicilia och Jag bor i Stockholm med min make och
                våra 2 barn.
                <br /> Jag är en Frontend-utvecklare med intresse och utbildning
                inom Informationssäkerhet.
                <br /> Det som driver mig i min vardag är snygg Design och ett
                sinne för Kreativitet.
                <br /> Fritiden spenderar jag antingen med hästarna i stallet
                eller bland vikterna på gymmet.
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
          </div>
        </div>
      </div>
    );
}

export default About;
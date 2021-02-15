import React from 'react'

function About(props){
    return (
      <div>
        <h1>About me</h1>
        <div className= 'aboutMeText'>
          <h4>
            Jag heter Cicilia och jag är en 36 årig mamma och
            Frontend-utvecklare som drivs av snygg Design och ett sinne för
            kreativitet.
          </h4>
          <p>
            Utbildningar:
            <ul>
              <li>Frontend - KYH Yrkeshögskola</li>
              <li>Webbutveckling I och II - Luleå Tekniska Universitet</li>
              <li>IT-Säkerhetsspecialist - SIH Yrkeshögskola</li>
              <li>Barnskötare - Omsorgslyftet Komvux</li>
              <li>Resesäljare(IATA/Amadeus) - Pro Nordic Education</li>
            </ul>
          </p>
        </div>
        <div class="circle"></div>
      </div>
    );
}

export default About;
import React from "react"
import "./aboutus.scss"

class AboutUs extends React.Component {
  render() {
    return (
      <div>
        <div className="aboutus-wrapper">
          <div className="aboutus-container">
            <h1>Om oss</h1>
            <p>
Letar du efter den perfekta livskamraten? Varför inte rädda en hund från ett långt
ensamt liv på ett hundstall. Att adoptera en hund kommer kännas bra för både dig
och hunden du tar in i ditt hem.
Här på Matching-Paws hjälper vi dig att matchas ihop med den perfekta hunden som passar dina
behov och förutsättningar.
{' '}
</p>
            <div className="contact-container">
              <h3>Kontakta oss:</h3>
              <p>
Sofia Berglund<br></br>
Tel: 070-1234567<br></br>
Email: sofia@matching-paws.com
              </p>
              <p>
Clara Björklund<br></br>
Tel: 070-1234567<br></br>
Email: clara@matching-paws.com
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AboutUs

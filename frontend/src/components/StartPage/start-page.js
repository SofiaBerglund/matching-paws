import React from "react"
import { Link } from "react-router-dom"
const animals = "http://localhost:8080/animals"

export default class StartPage extends React.Component {
  state = {
    animals: []
  }

  render() {
    return (
      <div>
        <h1>Sök hund</h1>
        <form>
          Kön:
          <div>
            <label>Hane</label>
            <input type="checkbox" name="sex" />
            <label>Tik</label>
            <input type="checkbox" name="sex" />
          </div>
          Storlek:
          <div>
            <label>Liten</label>
            <input type="checkbox" name="size" />
            <label>Mellan</label>
            <input type="checkbox" name="size" />
            <label>Stor</label>
            <input type="checkbox" name="size" />
          </div>
            Ålder:
          <div>
            <label>0-3 år</label>
            <input type="checkbox" name="age" />
            <label>4-6 år</label>
            <input type="checkbox" name="age" />
            <label>6+ år</label>
            <input type="checkbox" name="age" />
          </div>
            Måste kunna bo med katt:
          <div>
            <label>Ja</label>
            <input type="checkbox" name="" />
          </div>
          Måste kunna bo med hund:
          <div>
            <label>Ja</label>
            <input type="checkbox" name="" />
          </div>
          <input type="submit" value="Hitta hund" />
        </form>
      </div>
    )
  }
}

import React from "react"
import { Link } from "react-router-dom"
import "./result-page.scss"
import DetailedInfoPage from "../DetailedInfoPage/detailed-info-page"

export default class ResultPage extends React.Component {
  state = {
    searchResult: this.props,
    showModal: false
  }

  showModal = () => {
    this.setState({
      showModal: true
    })
  }

  hideModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { name, image, sex, size, age, id } = this.props
    return (
      <div className="result-page-wrapper">
        <div className="result-page-container">
          <Link to={`/results/${id}`}>
            <h2>{name}</h2>
            <div className="image-container">
              <img src={image} alt="" />
            </div>
            <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
            <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
            <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
            <div className="submit-button">
              <img id="paw-print" src="./vit-tass.png" alt="" />
              <input type="submit" value="Läs mer!" />
            </div>
          </Link>

          {/* <h2>{name}</h2>
          <div className="image-container">
            <img src={image} alt="" />
          </div>
          <p>Kön: {sex.charAt(0).toUpperCase() + sex.slice(1)}</p>
          <p>Storlek: {size.charAt(0).toUpperCase() + size.slice(1)}</p>
          <p>Ålder: {age.charAt(0).toUpperCase() + age.slice(1)}</p>
          <div className="submit-button">
            <img id="paw-print" src="./vit-tass.png" alt="" />
            <input type="submit" value="Läs mer!" />
          </div>
          <Modal show={this.state.showModal} handleClose={this.hideModal}>
            <DetailedInfoPage
              name={name}
              image={image}
              sex={sex}
              size={size}
              age={age}
              id={id}
            />
          </Modal> */}
        </div>
      </div>
    )
  }
}

// const Modal = ({ handleClose, show, children }) => {
//   return (
//     <div className={show ? "modal display-block" : "modal display-none"}>
//       <section className="modal-main">
//         <button className="close-button" onClick={handleClose}>
//           &times;
//         </button>
//         {children}
//       </section>
//     </div>
//   )
// }

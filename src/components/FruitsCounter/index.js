// Write your code here"
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangos: 0, banana: 0}

  eatMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  eatBanana = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {banana, mangos} = this.state

    return (
      <div className="bg-cont">
        <div className="card1">
          <h1>
            Bob ate <span>{mangos}</span> mangoes <span>{banana}</span> bananas
          </h1>
          <div className="card2">
            <div className="card3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="image"
              />
              <button className="button" onClick={this.eatMango} type="button">
                Eat Mango
              </button>
            </div>

            <div className="card3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="image"
              />
              <button className="button" onClick={this.eatBanana} type="button">
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

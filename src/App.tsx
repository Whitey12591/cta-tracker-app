import React, { Component } from 'react'; // let's also import Component
import axios from 'axios';
import { RootObject, Eta } from './Data/cta_dto';
import TimeCard from './Components/TimeCard/TimeCard';
import './App.css';

interface IState {
  error: boolean;
  isLoaded: boolean;
  loopArrivals: Eta[];
  kimballArrivals: Eta[];
  time: Date;
}

export class App extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      loopArrivals: [] as Eta[],
      kimballArrivals: [] as Eta[],
      time: new Date()
    };
  }

  loadData = async () => {
    axios
      .get<RootObject>(
        `${'https://cors-anywhere.herokuapp.com/'}https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=d4102257b59c4a0a82809fec190a2140&outputType=JSON&mapid=40360`
      )
      .then(result => {
        const arrivalTimes = result.data.ctatt.eta;
        const loop = arrivalTimes.filter((eta: Eta, key) => {
          return eta.destNm === 'Loop';
        });

        const kimball = arrivalTimes.filter((eta: Eta, key) => {
          return eta.destNm === 'Kimball';
        });
        this.setState({
          isLoaded: true,
          loopArrivals: loop,
          kimballArrivals: kimball
        });
      });
  };

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 10000);
  }

  render() {
    const { error, isLoaded, loopArrivals, kimballArrivals } = this.state;
    if (error) {
      return <div>Error: </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <React.Fragment>
          <div className="app-container">
            {loopArrivals.map((time: Eta, key) => (
              <TimeCard key={key} eta={time} />
            ))}
          </div>
          <div className="app-container">
            {kimballArrivals.map((time: Eta, key) => (
              <TimeCard key={key} eta={time} />
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;

import React, { Component } from 'react'; // let's also import Component
import axios from 'axios';
import { RootObject, Eta } from './Data/cta_dto';
import TimeCard from './Components/TimeCard/TimeCard';
import './App.css';

interface IState {
  error: boolean;
  isLoaded: boolean;
  arrivals: RootObject;
  time: Date;
  timesRefreshed: number;
}

export class App extends Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      error: false,
      isLoaded: false,
      arrivals: {} as RootObject,
      time: new Date(),
      timesRefreshed: 0
    };
  }

  loadData = async () => {
    axios
      .get<RootObject>(
        `${'https://cors-anywhere.herokuapp.com/'}https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=d4102257b59c4a0a82809fec190a2140&outputType=JSON&mapid=40360`
      )
      .then(result => {
        this.setState({
          isLoaded: true,
          arrivals: result.data,
          timesRefreshed: this.state.timesRefreshed + 1
        });
      });
  };

  componentDidMount() {
    this.loadData();
    setInterval(this.loadData, 10000);
  }

  render() {
    const { error, isLoaded, arrivals, timesRefreshed } = this.state;
    if (error) {
      return <div>Error: </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {arrivals.ctatt.eta.map((time: Eta, key) => (
            <TimeCard key={key} eta={time} timesRefreshed={timesRefreshed} />
          ))}
        </ul>
      );
    }
  }
}

export default App;

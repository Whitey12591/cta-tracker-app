import React from 'react';
import { Eta } from '../../Data/cta_dto';
import './TimeCard.css';
import moment from 'moment';

interface ITimeCardProps {
  eta: Eta;
}

const TimeCard = (props: ITimeCardProps) => {
  const { eta } = props;
  const { arrT, prdt, destNm } = eta;

  var now = moment.utc(prdt).format('DD/MM/YYYY HH:mm:ss');
  var then = moment.utc(arrT).format('DD/MM/YYYY HH:mm:ss');

  return (
    <React.Fragment>
      <div className="card-container">
        <div className="destination">{destNm}</div>
        <div className="time-until">
          {moment
            .utc(moment(then, 'DD/MM/YYYY HH:mm:ss').diff(moment(now, 'DD/MM/YYYY HH:mm:ss')))
            .format('m') + ' min'}
        </div>
        <div>{moment.utc(arrT).format('h:mm a')}</div>
      </div>
    </React.Fragment>
  );
};

export default TimeCard;

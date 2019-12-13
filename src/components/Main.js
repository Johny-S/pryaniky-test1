import React from 'react';
import Chart from 'chart.js';
import { connect } from 'react-redux';
import { getRangeAC } from '../redux/actions';

import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Buttons } from './Buttons';

class Main extends React.Component {
  getChart() {
    const ctx = document.querySelector('.Canvas');
    const { chartData, data, range } = this.props;
    chartData.data = data[range];
    new Chart(ctx, chartData);
  }

  componentDidMount() {
    this.getChart();
  }

  componentDidUpdate() {
    this.getChart();
  }

  render() {
    const btns = Object.keys(this.props.data);
    return (
      <div className='Container'>
        <Buttons btns={btns} getRange={this.props.getRange} />
        <canvas className='Canvas'></canvas>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getRange: range => {
      dispatch(getRangeAC(range));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);

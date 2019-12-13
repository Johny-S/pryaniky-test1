import React from 'react';

export class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: true
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ mark: false }), 1e3);
  }

  render() {
    const { btns, getRange } = this.props;
    return (
      <div className='Buttons'>
        {btns.map(el => {
          return (
            <button
              className='Buttons-Item'
              disabled={this.state.mark}
              key={el}
              onClick={() => {
                getRange(el);
                this.setState({ mark: true });
                setTimeout(() => this.setState({ mark: false }), 1e3);
              }}
            >
              {el}
            </button>
          );
        })}
      </div>
    );
  }
}

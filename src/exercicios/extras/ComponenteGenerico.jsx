import React, { Component } from 'react';
class ComponenteGenerico extends Component {

  render() {
    const { config } = this.props;

    <div>
      {config.map(item => {
        if(item.path) {
          return <Link className="link" to={item.path}>{item.title}</Link>
        }
        return <div className="topic">{item.title}</div>
      })}
    </div>
  }
}

export default ComponenteGenerico;
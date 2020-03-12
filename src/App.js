import React, { Component, Fragment } from 'react';
import Button from "./components/Button";

class App extends Component {
  render() {
    return (
      <Fragment>
        <h3>Estilizando componentes com Styled Components</h3>
        <Button>Default</Button>
        <Button type="primary">Primary</Button>
        <Button type="error">Error</Button>
        <Button type="success">Success</Button>
        <Button type="warning">Warning</Button>
        <br/>
        <hr/>
        <Button type="primary" size="sm">Primary</Button>
        <Button type="primary" size="md">Primary</Button>
        <Button type="primary" size="lg">Primary</Button>
        <Button type="primary" size="bg">Primary</Button>
        <br/>
        <hr/>
        <Button round type="primary" size="sm">Primary</Button>
      </Fragment>
    );
  }
}

export default App;

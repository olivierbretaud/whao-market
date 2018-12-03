import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Container } from 'reactstrap';
import { spring, AnimatedSwitch } from 'react-router-transition';
import Main from './Components/Main';
import NavBar from './Components/Navbar';
import PurchasePanel from './Components/PurchasePanel';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 200,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 0,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <AnimatedSwitch
            atEnter={bounceTransition.atEnter}
            atLeave={bounceTransition.atLeave}
            atActive={bounceTransition.atActive}
            mapStyles={mapStyles}
            className="route-wrapper"
            >
            <Route exact path="/"component={Main} /> 
            <Route exact path="/PurchasePanel"component={PurchasePanel} />
        </AnimatedSwitch>
        </Container>
      </div>
    );
  }
}

export default App;

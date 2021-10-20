import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Work from './views/Work';
import Contact from './views/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Streets from './views/inWork/Streets';
import Interiors from './views/inWork/Interiors';
import Products from './views/inWork/Products';
import Portraits from './views/inWork/Portraits';
import InteriorGallery from './views/inGallery/InteriorGallery';
import PortraitGallery from './views/inGallery/PortraitGallery';
import ProductGallery from './views/inGallery/ProductGallery';
import StreetGallery from './views/inGallery/StreetGallery';

class App extends Component {
  state = {
    isMenuOpen: false
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  updateDimensions = () => {
    this.setState({
      isMenuOpen: false
    })
    document.body.classList.remove('overflow-hidden')
  }

  openMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
    document.body.classList.toggle('overflow-hidden')
  }

  render() {
    return(
      <Router>
        <div className="h-screen flex flex-col">
          <Header isMenuOpen={this.state.isMenuOpen} openMenu={this.openMenu} />
          <Switch>
            <Route exact path="/">
              <Work />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/street">
              <Streets />
            </Route>
            <Route exact path="/interiors">
              <Interiors />
            </Route>
            <Route exact path="/products">
              <Products />
            </Route>
            <Route exact path="/portraits">
              <Portraits />
            </Route>
            <Route path="/interiors/gallery/:id">
              <InteriorGallery />
            </Route>
            <Route path="/portraits/gallery/:id">
              <PortraitGallery />
            </Route>
            <Route path="/products/gallery/:id">
              <ProductGallery />
            </Route>
            <Route path="/street/gallery/:id">
              <StreetGallery />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;

/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import Map from './components/map/Map'; 
import DragToAddButton from './components/buttons/DragToAddButton'
import 'semantic-ui-css/semantic.min.css'
import campsite from "./resources/campsite.svg"
import InfoModal from "./components/modals/InfoModal"
import ItemModal from "./components/modals/ItemModal/ItemModal"

const App = () => {
  return (
    <div className="App">
      <Map />
      <DragToAddButton
      svgIcon = {campsite} type = {campsite} content ={"loading..."}>
        Add Campsite
      </DragToAddButton>
      <InfoModal/>
      <ItemModal />
    </div>
  );
}

export default App;

import React from 'react';
import term from '../term';
import AddParties from '../components/AddParties';
import AddOhioVolume from '../components/AddOhioVolume';
import AddRegionalVolume from '../components/AddRegionalVolume';
import AddYear from '../components/AddYear';
import AddWebcite from '../components/AddWebcite';
import CiteCase from '../components/CiteCase.js';
import RemoveCitation from '../components/RemoveCitation';
import SaveCitation from '../components/SaveCitation';

export default class SupremePost extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "",
    parties: "",
    ohioVolume: "",
    ohioReporter: "",
    ohioFirstPage: "",
    regionalVolume: "",
    regionalReporter: "",
    regionalFirstPage: "",
    year: "",
    webcite: "",
    citation: "",
    citationList: []
  };
  handlePartyOne = (e) => {
    this.setState({
      partyOne: e.target.value
    })
  }
  handlePartyTwo = (e) => {
    this.setState({
      partyTwo: e.target.value,
    })
  }
  handleCitation =() => {
    const partyOne = this.state.partyOne;
    let splitNames = partyOne.trim().split(" ");
    for (let i = 0; i < splitNames.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitNames[i].toLowerCase() === term[y].fullTerm) {
          splitNames[i] = term[y].abbTerm;
        } else if (splitNames[i].toLowerCase() === term[y].pluralTerm) {
          splitNames[i] = term[y].plTerm;
        }
      }
    }
    let newPartyOne = splitNames.join(" ");
    
    const partyTwo = this.state.partyTwo;
    let splitNamesTwo = partyTwo.trim().split(" ");
    for (let i = 0; i < splitNamesTwo.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitNamesTwo[i].toLowerCase() === term[y].fullTerm) {
          splitNamesTwo[i] = term[y].abbTerm;
        } else if (splitNamesTwo[i].toLowerCase() === term[y].pluralTerm) {
          splitNamesTwo[i] = term[y].plTerm;
        }
      }
    }
    let newPartyTwo = splitNamesTwo.join(" ");

    this.setState({
      parties: `${newPartyOne} v. ${newPartyTwo}`
    })

    this.setState({
      citation: `, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.year}-Ohio-${this.state.webcite}, ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage}`
    })
  }
  handleOhioVolume = (e) => {
    this.setState({
      ohioVolume: e.target.value
    })
  }
  handleOhioReporter = (e) => {
    this.setState({
      ohioReporter: e.target.value
    })
  }
  handleRegionalReporter = (e) => {
    this.setState({
      regionalReporter: e.target.value
    })
  }
  handleRegionalVolume = (e) => {
    this.setState({
      regionalVolume: e.target.value
    })
  }
  handleOhioFirstPage = (e) => {
    this.setState({
      ohioFirstPage: e.target.value
    })
  }
  handleRegionalFirstPage = (e) => {
    this.setState({
      regionalFirstPage: e.target.value
    })
  }
  handleWebcite = (e) => {
    this.setState({
      webcite: e.target.value
    })
  }
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  handleRemoveCitation = () => {
    partyOne.value = "";
    partyTwo.value = "";
    ohioVolume.value = "";
    ohioReporter.value = "";
    ohioFirstPage.value = "";
    regionalVolume.value = "";
    regionalReporter.value = "";
    regionalFirstPage.value = "";
    webcite.value="";
    year.value = "";
    this.setState({
      citation: "",
      parties: ""
    })
  }
  handleSaveCitation = () => {
    let citationName = this.state.parties + this.state.citation;
    this.setState((prevState) => ({
      citationList: prevState.citationList.concat(citationName)
    }))
  }
  render() {
    return (
      <div>
        <h2>Ohio Supreme Court Post May 1, 2002</h2>
        <AddParties 
          handlePartyOne={this.handlePartyOne} 
          handlePartyTwo={this.handlePartyTwo} 
        />
        <AddOhioVolume
          handleOhioVolume={this.handleOhioVolume} 
          handleOhioReporter={this.handleOhioReporter} 
          handleOhioFirstPage={this.handleOhioFirstPage}
        />
        <AddRegionalVolume
          handleRegionalVolume={this.handleRegionalVolume} 
          handleRegionalReporter={this.handleRegionalReporter} 
          handleRegionalFirstPage={this.handleRegionalFirstPage}
        />
        <AddWebcite
          handleWebcite={this.handleWebcite}
        />
        <AddYear
          handleYear={this.handleYear}
        />
        <CiteCase
          handleCitation={this.handleCitation}
          parties={this.state.parties}
          citation={this.state.citation}
        />
        <RemoveCitation
          handleRemoveCitation={this.handleRemoveCitation}
          citation={this.state.citation}
        />
        <SaveCitation
          handleSaveCitation={this.handleSaveCitation}
          citation={this.state.citation}
        />
      </div>
    );
  }
}
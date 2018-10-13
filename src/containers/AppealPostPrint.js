import React from 'react';
import term from '../term';
import AddParties from '../components/AddParties';
import AddOhioAppVolume from '../components/AddOhioAppVolume';
import AddRegionalVolume from '../components/AddRegionalVolume';
import AddDistrict from '../components/AddDistrict';
import AddYear from '../components/AddYear';
import AddWebcite from '../components/AddWebcite';
import CiteCase from '../components/CiteCase.js';
import RemoveCitation from '../components/RemoveCitation';
import SaveCitation from '../components/SaveCitation';

export default class AppealPostPrint extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "",
    parties: "",
    ohioAppVolume: "",
    ohioAppReporter: "",
    ohioAppFirstPage: "",
    regionalVolume: "",
    regionalReporter: "",
    regionalFirstPage: "",
    webcite: "",
    district: "",
    year: "",
    citation: "",
    citationList: [],
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
      // i.e. State v. Smith, 123 Ohio St.3d 32, 765 N.E.2d (1999)
      citation: `, ${this.state.ohioAppVolume} ${this.state.ohioAppReporter} ${this.state.ohioAppFirstPage}, ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
    })
  }
  handleOhioVolume = (e) => {
    this.setState({
      ohioAppVolume: e.target.value
    })
  }
  handleOhioReporter = (e) => {
    this.setState({
      ohioAppReporter: e.target.value
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
      ohioAppFirstPage: e.target.value
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
  handleDistrict = (e) => {
    this.setState({
      district: e.target.value
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
    ohioAppVolume.value = "";
    ohioAppReporter.value = "";
    ohioAppFirstPage.value = "";
    regionalVolume.value = "";
    regionalReporter.value = "";
    regionalFirstPage.value = "";
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
        <h2>Ohio Court of Appeals Post May 1, 2002</h2>
        <AddParties
          partyOne={this.state.partyOne} 
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
    )
  }
}
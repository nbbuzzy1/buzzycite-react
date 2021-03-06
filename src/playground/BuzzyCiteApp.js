import React from 'react';
import term from '../term'

export default class BuzzyCiteApp extends React.Component {
  state = {
    partyOne: "",
    partyTwo: "",
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
  handleCitation =() => {
    const partyOne = this.state.partyOne;
    let splitNames = partyOne.trim().split(" ");
    console.log(splitNames)
    for (let i = 0; i < splitNames.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitNames[i].toLowerCase() === term[y].fullTerm) {
          splitNames[i] = term[y].abbTerm;
        } else if (splitNames[i].toLowerCase() === term[y].fullTerm + "s") {
          splitNames[i] = term[y].plTerm;
        }
      }
    }
    let newPartyOne = splitNames.join(" ");
    this.setState({
      // i.e. State v. Smith, 123 Ohio St.3d 32, 765 N.E.2d (1999)
      citation: `${newPartyOne} v. ${this.state.partyTwo}, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
    })
  }
  handleSupremePostCitation =() => {
    const partyOne = this.state.partyOne;
    let splitNames = partyOne.trim().split(" ");
    console.log(splitNames)
    for (let i = 0; i < splitNames.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitNames[i].toLowerCase() === term[y].fullTerm) {
          splitNames[i] = term[y].abbTerm;
        } else if (splitNames[i].toLowerCase() === term[y].fullTerm + "s") {
          splitNames[i] = term[y].plTerm;
        }
      }
    }
    let newPartyOne = splitNames.join(" ");
    this.setState({
      // i.e. State v. Smith, 123 Ohio St.3d 32, 765 N.E.2d (1999)
      citation: `${newPartyOne} v. ${this.state.partyTwo}, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.year}-Ohio-${this.state.webcite}, ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage}`
    })
  }
  handlePartyOne = (e) => {
    this.setState({
      partyOne: e.target.value
    })
  }
  handlePartyTwo = (e) => {
    this.setState({
      partyTwo: e.target.value
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
  handleYear = (e) => {
    this.setState({
      year: e.target.value
    })
  }
  handleWebcite = (e) => {
    this.setState({
      webcite: e.target.value
    })
  }
  removeCitation = () => {
    this.setState({
      citation: "",
      partyOne: ""
    })
  }
  saveCitation = () => {
    let citationName = this.state.citation;
    this.setState((prevState) => ({
      citationList: prevState.citationList.concat(citationName)
    }))
  }
  render() {
    return (
      <div>
      <Link>
        <SupremePost 
          citation={this.state.citation}
          citationList={this.state.citationList}
          partyOne={this.state.partyOne}
          partyOne={this.state.partyTwo}
          handleSupremePostCitation={this.handleSupremePostCitation}
          handlePartyOne={this.handlePartyOne}
          handlePartyTwo={this.handlePartyTwo}
          handleOhioVolume={this.handleOhioVolume}
          handleOhioReporter={this.handleOhioReporter}
          handleOhioFirstPage={this.handleOhioFirstPage}
          handleRegionalReporter={this.handleRegionalReporter}
          handleRegionalVolume={this.handleRegionalVolume}
          handleRegionalFirstPage={this.handleRegionalFirstPage}
          handleYear={this.handleYear}
          handleWebcite={this.handleWebcite}
          removeCitation={this.removeCitation}
          saveCitation={this.saveCitation}
        />
      </Link>

      </div>
    );
  }
}
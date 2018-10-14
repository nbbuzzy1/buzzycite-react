import React from 'react';
import term from '../term';
import AddParties from '../components/AddParties';
import AddOhioVolume from '../components/AddOhioVolume';
import AddRegionalVolume from '../components/AddRegionalVolume';
import AddYear from '../components/AddYear';
import CiteCase from '../components/CiteCase.js';
import RemoveCitation from '../components/RemoveCitation';
import SaveCitation from '../components/SaveCitation';

export default class SupremePre extends React.Component {
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
    
    let specialTermsOne = partyOne
      .replace("also known as", "a.k.a.")
      .replace("Also Known As", "a.k.a.")
      .replace("attorney general", "Atty. Gen.")
      .replace("Attorney General", "Atty. Gen.")
      .replace("doing business as", "d.b.a.")
      .replace("Doing Business As", "d.b.a.")
      .replace("formerly known as", "f.k.a.")
      .replace("Formerly Known As", "f.k.a.")
      .replace("in the matter of", "In re")
      .replace("In the Matter of", "In re")
      .replace("now known as", "n.k.a.")
      .replace("Now Known As", "n.k.a.")
      .replace("prosecuting attorney", "Pros. Atty.")
      .replace("Prosecuting Attorney", "Pros. Atty.")
      .replace("savings & loan", "S. & L.")
      .replace("Savings & Loan", "S. & L.")

    let splitPartyOne = specialTermsOne.trim().split(" ");
    for (let i = 0; i < splitPartyOne.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitPartyOne[i].toLowerCase() === term[y].fullTerm) {
          splitPartyOne[i] = term[y].abbTerm;
        } else if (splitPartyOne[i].toLowerCase() === term[y].pluralTerm) {
          splitPartyOne[i] = term[y].plTerm;
        }
      }
    }
    let newPartyOne = splitPartyOne.join(" ");
    
    const partyTwo = this.state.partyTwo;

    let specialCases = partyTwo
      .replace("also known as", "a.k.a.")
      .replace("Also Known As", "a.k.a.")
      .replace("attorney general", "Atty. Gen.")
      .replace("Attorney General", "Atty. Gen.")
      .replace("doing business as", "d.b.a.")
      .replace("Doing Business As", "d.b.a.")
      .replace("formerly known as", "f.k.a.")
      .replace("Formerly Known As", "f.k.a.")
      .replace("in the matter of", "In re")
      .replace("In the Matter of", "In re")
      .replace("now known as", "n.k.a.")
      .replace("Now Known As", "n.k.a.")
      .replace("prosecuting attorney", "Pros. Atty.")
      .replace("Prosecuting Attorney", "Pros. Atty.")
      .replace("savings & loan", "S. & L.")
      .replace("Savings & Loan", "S. & L.")

    let splitPartyTwo = specialCases.trim().split(" ");
    for (let i = 0; i < splitPartyTwo.length; i++) {
      for (let y = 0; y < term.length; y++) {
        if (splitPartyTwo[i].toLowerCase() === term[y].fullTerm) {
          splitPartyTwo[i] = term[y].abbTerm;
        } else if (splitPartyTwo[i].toLowerCase() === term[y].pluralTerm) {
          splitPartyTwo[i] = term[y].plTerm;
        }
      }
    }
    let newPartyTwo = splitPartyTwo.join(" ");

    this.setState({
      parties: `${newPartyOne} v. ${newPartyTwo}`
    })

    this.setState({
      // i.e. State v. Smith, 123 Ohio St.3d 32, 765 N.E.2d (1999)
      citation: `, ${this.state.ohioVolume} ${this.state.ohioReporter} ${this.state.ohioFirstPage}, ${this.state.regionalVolume} ${this.state.regionalReporter} ${this.state.regionalFirstPage} (${this.state.year})`
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
  handleRemoveCitation = () => {
    partyOne.value = "";
    partyTwo.value = "";
    ohioVolume.value = "";
    ohioReporter.value = "";
    ohioFirstPage.value = "";
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
        <h2>Ohio Supreme Court Pre May 1, 2002</h2>
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
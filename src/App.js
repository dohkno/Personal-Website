import React, { Component } from 'react'
import './App.css';
import Header from './components/Header'
import About from './components/About';
import Resume from './components/Resume'
import Projects from './components/Projects'
import data from './data/resumeData.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };
  }

  getResumeData = () =>{
    this.setState({resumeData: data})
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Projects data={this.state.resumeData.projects}/>
      </div>
    );
  }
}

export default App;

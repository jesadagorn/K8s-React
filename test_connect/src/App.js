import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      title: 'Project Docker',
      act: 0,
      index: '',
      datas: []
    }
  }

  componentDidMount(){
    this.refs.FirstName.focus();
  }

  fSubmit = (e) =>{
    e.preventDefault();
    console.log('try');

    let datas = this.state.datas;
    let FirstName = this.refs.FirstName.value;
    let LastName = this.refs.LastName.value;

    if (this.state.act === 0) { //new
      let data = {
        FirstName, LastName
      }
  
      datas.push(data); 
    } else {                    //update
      let index = this.state.index;
      datas[index].FirstName = FirstName;
      datas[index].LastName = LastName;
    }

    this.setState({
      datas: datas
    });

    this.refs.myForm.reset();
    this.refs.FirstName.focus();
  }

  fRemove = (i) => {
    let datas  = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas:datas
    });

    this.refs.myForm.reset();
    this.refs.FirstName.focus();
  }
  
  fEdit = (i) => {
    let data = this.state.datas[i];
    this.refs.FirstName.value = data.FirstName;
    this.refs.LastName.value = data.LastName;

    this.setState({
      act: 1,
      index: i 
    })

    this.refs.FirstName.focus();
  }

  render() {
    let datas = this.state.datas;
    return (
      <div className="App">
        <h2>{this.state.title}</h2>
        <form ref="myForm" className="myForm">
          <input type="text" ref="FirstName" placeholder="your First Name" className="formField" />
          <input type="text" ref="LastName" placeholder="your Last Name" className="formField" />
          <button onClick={(e)=>this.fSubmit(e)} className="myButton">Submit</button>
        </form>
        <pre>
          {datas.map((data, i) =>
            <li key={i} className="myList">
              {i+1}:{data.FirstName} {data.LastName}
              <button onClick={()=>this.fRemove(i)} className="myListButton">Remove</button>
              <button onClick={()=>this.fEdit(i)} className="myListButton">Edit</button>
            </li>
          )}
        </pre>
      </div>
    );
  }
}

export default App;
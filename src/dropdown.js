import React, { Component } from 'react';
import List from './list';
import ReactDOM from 'react-dom';
import './dropdown.css';

class Dropdown extends Component {
  constructor(props){
    super(props);
    this._getInitialState = this._getInitialState.bind(this);
    this._handleDocumentClick =  this._handleDocumentClick.bind(this);
    this.state=this._getInitialState()
  }

  _getInitialState(){
    var state = {
      dropDownVisible:false,
      placeholder:this.props.placeholder,
      defaultPlaceHolder:this.props.placeholder
    };
    return state;
  }

  _toggleDropdown(){
    var currentVisibility = this.state.dropDownVisible;
    currentVisibility = !currentVisibility;
    this.setState({dropDownVisible:currentVisibility});
  }

  _onSelect(value,isInternal){
    var options = this.props.options,
    selectedOption;

    selectedOption = value ? Object.assign({},options[value]) : {};
    this.setState({
      dropDownVisible:!isInternal ? !this.state.dropDownVisible : this.state.dropDownVisible,
      placeholder:selectedOption.label || this.state.defaultPlaceHolder
    },function(){
        if(value && this.props.onSelectHandler){
          this.props.onSelectHandler({value:value,label:selectedOption.label});
      }
    })
    
  }

  _handleDocumentClick(event) {
     if (!ReactDOM.findDOMNode(this).contains(event.target)) {
       this.setState({dropDownVisible: false});
     }
 }


  componentDidMount(){
      document.addEventListener('click',this._handleDocumentClick,false);
  }

  componentWillUnmount() {
      document.removeEventListener("click", this._handleDocumentClick,false)
  }

  render() {
    
    return (
          <div className="gor-dropdown-wrapper" onClick={!this.props.disabled ? this._toggleDropdown.bind(this) : null}>

            <span className={'gor-dropdown '+(this.state.dropDownVisible?'gor-white-background':'')}   >{!this.props.resetOnSelect ? this.state.placeholder : this.state.defaultPlaceHolder}</span>
            <span className={this.state.dropDownVisible ? "gor-dropdown-arrow up" : "gor-dropdown-arrow"}></span>
            <List data={this.props.options} selectedOption={this.props.selectedOption} optionAction={this._onSelect.bind(this)}
              dropDownVisible={this.state.dropDownVisible} />
          </div>
    );
  }
}

export default Dropdown;

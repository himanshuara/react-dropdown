import React, { Component } from 'react';

class List extends Component {
 
  _processOptions(){
    var optionList=[], data = this.props.data || [];

    for(let key in data){
      if(data.hasOwnProperty(key)){
        optionList.push(<span className={data[key].disabled?"disabled gor-dropdown-option" : "gor-dropdown-option"}  key={key} onClick={!data[key].disabled ? this.props.optionAction.bind(null,key,null) : null} >
                        <span >{data[key].label}</span>
                      </span>);
      }
    }
    
    return optionList;
  }
componentWillReceiveProps(nextProps) {
     if(nextProps.data.length !== this.props.data.length)  {
      this.props.optionAction.call(null,this.props.selectedOption,true);
     }
 }
  componentDidMount(){
    this.props.data && this.props.selectedOption ? this.props.optionAction.call(null,this.props.selectedOption,true) : "";
  }
  render() {
    var optionList=this._processOptions();
    return (
        <span className={"gor-option-wrapper"}
         style={this.props.dropDownVisible?{display:'block'}:{display:'none'}} >
        {optionList}</span>  
    );
  }
}

export default List;
import React,{Component} from 'react';
export const GeneralContext = React.createContext('');
export class Store extends Component{
    state={
        idnum:0
    }
    OnClickChange = ()=>{
        this.setState({idnum:this.state.idnum+1})
    }
    ClearCounter = ()=>{
        this.setState({idnum:0})
    }
    DecrementChange=()=>{
        this.setState({idnum:this.state.idnum-1})
    }
    render(){
        return(
            <GeneralContext.Provider value={{...this.state, OnClickChange:this.OnClickChange, ClearCounter:this.ClearCounter, DecrementChange:this.DecrementChange}}>
                {this.props.children}
            </GeneralContext.Provider>
        )
    }
}

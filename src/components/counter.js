import React,{useContext} from 'react';
import { GeneralContext } from '../context/Store';

const Counter = ()=>{
    const info = useContext(GeneralContext);
    return(
        <div className="col-C-C">
            <div className="boxC">{info.idnum}</div>
            <div className="row-C-C">
                <button className="button" onClick={()=>info.OnClickChange()}>+1</button>
                <button className="button" onClick={()=>info.DecrementChange()}>-1</button>
                <button className="button" onClick={()=>info.ClearCounter()}>Clear</button>
            </div>
        </div>
    )
}

export default Counter;
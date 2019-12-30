import React from 'react';
import { Store } from '../context/Store';
import Counter from './counter'

const App = ()=>{
    return(
        <Store>
            <div className="container">
               <Counter />
            </div>
        </Store>
    )
}

export default App;
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import BinaryToMessage from './components/card-reverse-message/BinaryToMessage';
import MessageToBinary from './MessageToBinary';

export const AppRoutes = () => {
    return (
        <Router>
           <div>
                <Switch>
                    <Route  path='/:uid' component={BinaryToMessage} />
                    <Route path='/' component={MessageToBinary} />
                </Switch>
          </div>
        </Router>
    )
}

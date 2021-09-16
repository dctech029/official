import React from 'react';
import Tips from './tips';
import { Switch,Route } from 'react-router-dom';
import Selection from './selection';
import Whydctech from './whydctech';
const Blogs = ()=> {
    return(
        <div>

            <Switch>
                <Route path="/blogs" exact>
                    <Selection/>
                </Route>
                <Route path="/blogs/tips" exact>
                    <Tips/>
                </Route>
                <Route path="/blogs/whydctech" exact>
                    <Whydctech/>
                </Route>
            </Switch>
        </div>
    )
}
export default Blogs;
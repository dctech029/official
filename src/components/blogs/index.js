import React from 'react';
import Tips from './tips';
import { useHistory } from 'react-router';
import { Switch,Route } from 'react-router-dom';
const Blogs = ()=> {
    const history = useHistory();
    return(
        <div>
            <button className="btn btn-primary" onClick={()=> history.push('/blogs/tips')}>To to tips</button>
            <Switch>
                <Route path="/blogs/tips">
                    <Tips/>
                </Route>
            </Switch>
        </div>
    )
}
export default Blogs;
import React,{Component} from 'react';
import { NavLink  } from 'react-router-dom';

export default class _404 extends Component {

    render(){
        return <div>
        <h3>
          对不起，找不到 <code>{window.location.pathname}</code>
        </h3>
      </div>;
    }
}
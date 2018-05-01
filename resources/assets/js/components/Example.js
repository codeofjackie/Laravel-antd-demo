import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/tmp.scss';
import { Button } from 'antd';

export default class Example extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        };
        this.clk = this.clk.bind(this);
    }

    clk(){
        this.setState(prevState  => ({
            count:prevState.count+1//The state must be the previous state
        }));
    }

    render() {
        return (
            <div className="flex-center position-ref full-height">
            {/*  */}

            <div className="content">
                <div className="title m-b-md">
                    Laravel
                </div>

                <div className="links">
                    <a href="https://laravel.com/docs">Documentation</a>
                    <a href="https://laracasts.com">Laracasts</a>
                    <a href="https://laravel-news.com">News</a>
                    <a href="https://forge.laravel.com">Forge</a>
                    <a href="https://github.com/laravel/laravel">GitHub</a>
                </div>
                <div style={{marginLeft:'auto',marginRight:'auto'}}>
                    <br/>
                    <Button onClick={this.clk}>This is a button</Button>
                    <br/>
                    Time your click {this.state.count} Times!
                </div>
            </div>
        </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

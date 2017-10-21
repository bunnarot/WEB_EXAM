import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName ,delName} from '../actions/User.actions';
import {President} from './'
class Home1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',

        }
    }

    onChange(e) {
        const data = e.target.value;
        this.setState({name: data});
    }



    render() {
        return (
            <div>
                <button onClick={() => {this.props.getName()}}>Get data</button>

                <button onClick={() => {this.props.delName()}}>Clear data</button>
                <President x={this.props.user.name0}/>
                <President x={this.props.user.name1}/>
                <President x={this.props.user.name2}/>
                <President x={this.props.user.name3}/>
                <President x={this.props.user.name4}/>
                <President x={this.props.user.name5}/>
                <President x={this.props.user.name6}/>
                <President x={this.props.user.name7}/>
                <President x={this.props.user.name8}/>
                <President x={this.props.user.name9}/>
                <President x={this.props.user.name10}/>
                <President x={this.props.user.name11}/>
                <President x={this.props.user.name12}/>
                <President x={this.props.user.name13}/>
                <President x={this.props.user.name14}/>
                <President x={this.props.user.name15}/>
                <President x={this.props.user.name16}/>
                <President x={this.props.user.name17}/>
                <President x={this.props.user.name18}/>
                <President x={this.props.user.name19}/>
                <President x={this.props.user.name20}/>
                <President x={this.props.user.name21}/>
                <President x={this.props.user.name22}/>
                <President x={this.props.user.name23}/>
                <President x={this.props.user.name24}/>
                <President x={this.props.user.name25}/>
                <President x={this.props.user.name26}/>
                <President x={this.props.user.name27}/>
                <President x={this.props.user.name28}/>
                <President x={this.props.user.name29}/>
                <President x={this.props.user.name30}/>
                <President x={this.props.user.name31}/>
                <President x={this.props.user.name32}/>
                <President x={this.props.user.name33}/>
                <President x={this.props.user.name34}/>
                <President x={this.props.user.name35}/>
                <President x={this.props.user.name36}/>
                <President x={this.props.user.name37}/>
                <President x={this.props.user.name38}/>
                <President x={this.props.user.name39}/>
                <President x={this.props.user.name40}/>
                <President x={this.props.user.name41}/>
                <President x={this.props.user.name42}/>
                <President x={this.props.user.name43}/>


                <button onClick={() => {this.props.getName()}}>Get data</button>

                <button onClick={() => {this.props.delName()}}>Clear data</button>


            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getName: () => {
            dispatch(getName());
        },
        delName:()=>{
            dispatch(delName());
    }}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home1));

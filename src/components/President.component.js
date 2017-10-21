import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';
class President extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            submit:''
        }
    }

    onChange(e) {
        const data = e.target.value;
        this.setState({name: data});
    }

    onSubmit(e) {
        this.setState({submit: this.state.name});
        this.props.setName(this.state.name);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>show Detali</h1><br/>
                <p> {this.props.user.name} </p><br/>
                <div>Recieved data: {this.props.user.name}</div>
                <button onClick={() => {this.props.getName()}}>Get data</button>
                <form onSubmit={this.onSubmit.bind(this) } >
                    <input  onChange={this.onChange.bind(this)} />
                    <button onClick={this.onSubmit.bind(this)}>data to server</button>
                    <button onClick={this.onSubmit.bind(this)}>Del Store</button>
                </form>
                <div>Data: {this.state.name} </div>
                <div>Stroe: {this.state.submit} </div>
                { this.props.user.err !== ""? <strong>{ this.props.user.err }</strong>: null }
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
        setName: (name) => {
            dispatch(setName(name));
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(President));

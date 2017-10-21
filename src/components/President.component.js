import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName, setName } from '../actions/User.actions';
class President extends React.Component {
    render() {
        return (
            <div>
                <h1>show Detali</h1><br/>
                <p> {this.props.user.name} </p><br/>
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

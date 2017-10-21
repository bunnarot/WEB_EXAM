import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getName } from '../actions/User.actions';
class President extends React.Component {
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

                <p> ID: {this.props.x.id}     Nm: {this.props.x.nm}</p>
                <p> Pp: {this.props.x.pp}     Tm: {this.props.x.tm}  </p>
<br/>
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

    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(President));

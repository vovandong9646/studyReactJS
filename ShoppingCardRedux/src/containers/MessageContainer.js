import React, { Component } from 'react';
import Message from './../components/Message';
import { connect } from 'react-redux';

class MessageContainer extends Component {
  render() {
    return (
        <Message message={this.props.message}/>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        message : state.ReducersChangeMessage
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);

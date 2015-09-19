import React, { findDOMNode, Component, PropTypes} from 'react';

export default class AddTodo extends Component {
  _handleClick(){
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
  render(){
    return (
      <div>
      <input type='text' ref='input' />
       <button onClick={e => this._handleClick(e)}>
         Add
       </button>
      </div>
    );
  }
}

AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};

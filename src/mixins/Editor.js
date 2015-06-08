const React = require('react');

let Editor = React.createClass({
	getInitialState(){
		return {
			editorEnabled: false,
			newValue: false
		}
	},
	handleKeydown(event){
		if(event.keyCode == 13){
			this.toggleEditor(event);
		}
	},
	showEditor(){
		return (
			<input ref="newText" defaultValue={this.state.newValue || this.props.text} onKeyDown={this.handleKeydown}/>
		);
	},
	editOnClick(){
		return (
			<div ref="newText" onClick={this.toggleEditor}>
				{this.state.newValue || this.props.text}
			</div>
		);
	},
	toggleEditor(e){
		e.preventDefault();
		let newval = this.refs.newText.getDOMNode().value;
		this.setState({
			editorEnabled: !this.state.editorEnabled,
			newValue: newval
		});
	},
	render(){
		return (
			<div>
				{this.state.editorEnabled ? this.showEditor() : this.editOnClick() }
			</div>
		);
	}
});

module.exports = Editor;
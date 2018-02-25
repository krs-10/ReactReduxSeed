import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './form.css';

import CheckBox from './CheckBox';
import Field from './Field';
import File from './File';
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import TextArea from './TextArea';


const propTypes = {
}

const defaultProps = {

}

class Form extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps 
	// handleSubmit = (...args1) => (...args2) => {
	// 	console.log("handleSubmit: ", args1, args2);
	// 	console.log("this.props: ", this.props);
	// }		
	render() {
		const {children, className, onSubmit, ...rest} = this.props;
		const classes = cx( className );

		return (
		    <form styleName="form" {...rest}>
		    	{children}
		    </form>
		)
	}
}

Form.CheckBox = CheckBox;
Form.Field = Field; 
Form.File = File; 
Form.Input = Input; 
Form.Radio = Radio;
Form.Select = Select; 
Form.TextArea = TextArea;



export default CSSModules(Form, styles, {handleNotFoundStyleName: 'log'});

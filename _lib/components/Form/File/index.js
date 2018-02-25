import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';
import styles from './file.css';

import Icon from 'components/Icon';

const FileKeys = ['lastModified', 'lastModifiedDate', 'name', 'size', 'type'];

const propTypes = {
	name: PropTypes.string.isRequired, 
	id: PropTypes.string.isRequired, 
	placeholder: PropTypes.string.isRequired, 
	multiple: PropTypes.bool, 
	required: PropTypes.bool,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	value: PropTypes.string, 
	accept: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	onChange: PropTypes.func,
	onDrop: PropTypes.func, 
	onDragOver: PropTypes.func
};

const defaultProps = {
	value: '',
	files: null,
	multiple: false, 
	required: false,
	disabled: false,
	error: false,
	accept: null
}

const SetFiles = (files) => {
	const filesClone = [...files].reduce((clones, file, index) => {
		const clone = {
			lastModified: file.lastModified,
			lastModifiedDate: file.lastModifiedDate,
			name: file.name,
			size: file.size,
			type: file.type
		}
		clones[index] = clone; 
		return clones; 
	}, {});
	return filesClone; 
}


class File extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps 
	state = {
		files: this.props.files,
		value: this.props.value,
		files_array: {}
	}
	renderFiles = (items) => {
		if (!items || !JSON.parse(items)) return null; 
		return Object.values(JSON.parse(items)).map((item, index) => {
			return(
				<div key={`fileitem-${index}`} styleName="item">
					<span styleName="file">{item.name}</span>
					<button type="button" styleName="button" aria-label={`Remove file ${item.name}`} onClick={(e) => this.handleRemove(e, index, item)}>
						<Icon name="close" />
					</button>
				</div>
			)
		})
	}
	applyChanges = ({files = [], value = ""}) => {
		this.setState({ 
			files: JSON.stringify(SetFiles(files)),
			value: value,
			files_array: Array.from(files)
		});
	}
	handleChange = (event, customFiles = false) => {
		const { dataTransfer = {}, target, target: { value = null, files = null} } = event;
		const IncomingFiles = customFiles || dataTransfer.files || files; 

		this.applyChanges({files: IncomingFiles, value: value || this.state.value});

		event.stopPropagation();
		event.preventDefault();

		if (this.props.onChange) this.props.onChange(event, this.state);
	}
	handleClick = (event) => {
		event.target.value = ""; 
		if (this.props.onClick) this.props.onClick(event, this.state);
	}
	handleDrop = (event) => {
		event.stopPropagation();
		event.preventDefault();
		this.handleChange(event);
	}
	handleDrag = (event) => {
		event.stopPropagation();
		event.preventDefault();
	}
	handleRemove = (event, position, item) => {
		const { files_array, files } = this.state;	

		const UpdatedFiles = Array.from(files_array);
		UpdatedFiles.splice(position, 1);
		const UpdatedValue = UpdatedFiles.length > 0 ? `C:\\fakepath\\${UpdatedFiles[0].name}` : "";
		
		this.applyChanges({files: UpdatedFiles, value: UpdatedValue});
	}

	render(){
		const {id, error, accept, placeholder, disabled, multiple, className, onDragOver, onChange, onDrop, children, required, ...rest} = this.props;
		const fileSpread = {id, multiple, accept};
		const inputSpread = {disabled, required}; 

		const { value, files } = this.state; 
		const classes = cx(
			{'error': error},	
			{'disabled': disabled},
			className
		);

		return (
			<div styleName="root" className={classes} {...rest}>
				<div styleName="dropArea" 
					onDragEnter={this.handleDrag}
					onDragOver={this.handleDrag}
					onDrop={this.handleDrop}>
						<div styleName="placeholder">{placeholder}</div>
						<input type="file" styleName="input" onClick={this.handleClick} onChange={this.handleChange} {...inputSpread} {...fileSpread} />
						<input type="hidden" id={`${id}InputValue`} value={value || ''} {...inputSpread} />
						<input type="hidden" id={`${id}InputFiles`} value={files || ''} {...inputSpread} />
				</div>
				<div styleName="items">
					{this.renderFiles(files)}
				</div>
			</div>
		)
	}
};
export default CSSModules(File, styles, {handleNotFoundStyleName: 'log'});


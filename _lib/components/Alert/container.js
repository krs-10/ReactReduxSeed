import React, { Component } from 'react';
import styles from './styles.css';
import CSSModules from 'react-css-modules';


class AlertContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			position: this.props.position || 0
		}
		this.handleTimeout = this.handleTimeout.bind(this);
		this.staggerChildren = this.staggerChildren.bind(this);
	}
	staggerChildren = () => {
		const {props: {delay, children}, state: {position}} = this; 
		return React.Children.map(children, (child, index) => {
			const isActive = index === position; 
			return (
				<div key={index} styleName={isActive && 'active'}>
					{child}
				</div>
			)
		})
	}
	async handleTimeout(){
		const {delay, children} = this.props; 
		const childArray = React.Children.toArray(children);
		await Promise.all(childArray.map(async (child, index) => {
			return await setTimeout(() => {this.setState({position: index + 1})}, delay);
		}))
	}
	componentDidMount() { 
		this.handleTimeout(this.state.position);
	}
	render() {
		const {delay, children, ...rest} = this.props;  
		return (
			<div styleName="container" {...rest}>
				{this.staggerChildren()}
			</div>
		)
	}
}


export default CSSModules(AlertContainer, styles, {handleNotFoundStyleName: 'log'});
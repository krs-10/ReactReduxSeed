
import styles from './tabs.css';
import Panel from './Panel';

const propTypes = {
	active: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	align: PropTypes.oneOf(['left', 'right', 'center', null])
}

const defaultProps = {
	active: 0,
	align: 'left'
}


class Tabs extends Component {
	static propTypes = propTypes
	static defaultProps = defaultProps
	state = { t_active: this.props.active }

	handlePanelChange = (e, position) => {
		e.preventDefault();
		this.setState({t_active: position})
	}
	generatePanels = (children) => {
		const tabs = [];
		const panels = [];

		React.Children.forEach(children, (item, index) => {
			const isActive = this.state.t_active === index; 
			const handleTab = (e) => this.handlePanelChange(e, index);
			const tab = <button 
							key={`panel-button-${index}`}
							role="tab"
							aria-selected={isActive.toString()}
							aria-controls={`${item.props.title}-tab`}
							id={item.props.title}
							styleName="tab"
							className={isActive && styles.active}
							onClick={handleTab}
							onFocus={handleTab}
							>
							{item.props.title}
						</button>;

			const panel = React.cloneElement(item, {
					key: `panel-content-${index}`,
					active: this.state.t_active === index,
					position: index,
					ariaLabel: `panel_${index}`,
				});
			tabs.push(tab);
			panels.push(panel);
		});
		return { tabs: tabs, panels: panels};
	}
	render() {
		const {children, className,  ...rest} = this.props;
		const classes = cx(className);
		const PanelList = this.generatePanels(children);
		return (
		    <section styleName="root" role="tablist" {...rest}>
		    	<div styleName="tabs">{PanelList.tabs}</div>
		    	<div styleName="panels">{PanelList.panels}</div>
		    </section>
		)
	}
}


Tabs.Panel = Panel;

export default CSSModules(Tabs, styles, {handleNotFoundStyleName: 'log'});
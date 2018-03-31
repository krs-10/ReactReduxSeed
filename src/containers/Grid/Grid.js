import CSSModules from 'react-css-modules';
import styles from 'styles/grid.css';

const Grid = (props) => {
	const { className, children, ...rest} = props; 
	const classes = cx( 
		className
	);

	return (
		<div styleName="grid" className={classes} {...rest}>
			{children}
		</div>
	)
};

export default CSSModules(Grid, styles, {handleNotFoundStyleName: 'log'});
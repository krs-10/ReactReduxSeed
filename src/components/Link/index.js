import CSSModules from 'react-css-modules';
import styles from './link.css';

import buttonStyles from 'components/Button/button.css';

import { Link as RouterLink } from 'react-router-dom';

const propTypes = {
	to: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
	ariaLabel: PropTypes.string,
	plain: PropTypes.oneOf([true, false, 'true', 'false']), 
	underline: PropTypes.oneOf([true, false, 'true', 'false']), 
};

const defaultProps = {
	ariaLabel: 'Link',
	plain: false,
	underline: true
}

const Link = (props) => {
	const {ariaLabel, plain, underline, className, children, ...rest} = props; 
	const classes = cx(
		{[`${styles.plain}`]: plain},
		{[`${styles.underline}`]: underline},
		className
	);

	return (
		<RouterLink className={classes} aria-label={ariaLabel} styleName="root" {...rest}>
			{children}
		</RouterLink>
	)
};

Link.propTypes = propTypes; 
Link.defaultProps = defaultProps; 


export default CSSModules(Link, styles, {handleNotFoundStyleName: 'log'});
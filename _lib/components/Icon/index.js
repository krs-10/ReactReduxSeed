import React, { Component, Fragment } from 'react';
import CSSModules from 'react-css-modules';

import styles from './icon.css';

import Expand from 'assets/icons/svg/chevron_down.svg?jsx';
import Collapse from 'assets/icons/svg/chevron_up.svg?jsx';
import Previous from 'assets/icons/svg/arrow_left.svg?jsx';
import Next from 'assets/icons/svg/arrow_right.svg?jsx';
import Circle from 'assets/icons/svg/circle.svg?jsx';
import Error from 'assets/icons/svg/exclamation_sign.svg?jsx';
import Success from 'assets/icons/svg/ok_sign.svg?jsx';
import Warning from 'assets/icons/svg/warning_sign.svg?jsx';
import Unavailable from 'assets/icons/svg/remove_sign.svg?jsx';
import Play from 'assets/icons/svg/play_circle.svg?jsx';
import Lock from 'assets/icons/svg/lock.svg?jsx';
import Download from 'assets/icons/svg/download_alt.svg?jsx';
import ExternalLink from 'assets/icons/svg/external_link.svg?jsx';
import Globe from 'assets/icons/svg/globe.svg?jsx';
import Calendar from 'assets/icons/svg/calendar.svg?jsx';
import Print from 'assets/icons/svg/print.svg?jsx';
import Check from 'assets/icons/svg/ok.svg?jsx';
import MapMarker from 'assets/icons/svg/map_marker.svg?jsx';
import Question from 'assets/icons/svg/question_sign.svg?jsx';
import Right from 'assets/icons/svg/chevron_right.svg?jsx';
import Left from 'assets/icons/svg/chevron_left.svg?jsx';
import Cog from 'assets/icons/svg/cog.svg?jsx';
import ZoomIn from 'assets/icons/svg/zoom_in.svg?jsx';
import ZoomOut from 'assets/icons/svg/zoom_out.svg?jsx';

const SvgComponents = {
	calendar: Calendar,
	check: Check,
	circle: Circle,
	cog: Cog,
	collapse: Collapse,
	download: Download,
	error: Error,
	expand: Expand, 
	external: ExternalLink,
	globe: Globe,
	left: Left, 
	lock: Lock,
	next: Next,
	pin: MapMarker,
	play: Play, 
	previous: Previous,
	print: Print,
	question: Question,
	right: Right,
	success: Success,
	unavailable: Unavailable,
	warning: Warning,
	zoom_in: ZoomIn, 
	zoom_out: ZoomOut
}

const UnicodeComponents = {
	close: 'close'
}

const IconNames = [
	...Object.keys(SvgComponents), 
	...Object.keys(UnicodeComponents)
];

const propTypes = {
	name: PropTypes.oneOf(IconNames, null),
	interactive: PropTypes.bool,
	title: PropTypes.string,
	small: PropTypes.bool,
	large: PropTypes.bool,
	inline: PropTypes.bool,
	unicode: PropTypes.string
};

const defaultProps = {
	name: null,
	interactive: true,
	title: 'Icon',
	small: false,
	large: false,
	inline: false,
	unicode: null
}


const Icon = (props) => {

	const { className, children, name, unicode, interactive, inline, title, small, large, ...rest} = props; 
	const isUnicode = UnicodeComponents[name] ? true : false; 
	const containerClasses = cx(
		{[`${styles.inline}`]: inline},
		{[`${styles.baseline}`]: isUnicode},
		className
	);

	const classes = cx(
		{[`${styles.small}`]: small},
		{[`${styles.large}`]: large},
		{[`${styles[name]}`]: isUnicode}
	);

	
	const SvgEl = SvgComponents[name] || false; 


	return (
		<div styleName="container" className={containerClasses} {...rest}>
			{SvgEl ? (
				<SvgEl styleName="svg" className={classes} preserveAspectRatio="xMidYMid meet" />
			) : (
				<i styleName="unicode" aria-hidden="true" title={title} className={classes}>{unicode}</i>
			)}
			{children}
		</div>
	)
};


Icon.propTypes = propTypes; 
Icon.defaultProps = defaultProps; 
Icon.Names = IconNames; 


export default CSSModules(Icon, styles, {handleNotFoundStyleName: 'log'});


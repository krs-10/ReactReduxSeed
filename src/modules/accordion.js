
const ACCORDION_SWITCH_PANEL = 'accordion/ACCORDION_SWITCH_PANEL';
const ACCORDION_TOGGLE_PANEL = 'accordion/ACCORDION_TOGGLE_PANEL'

const initialState = {
	active: false,
	toggle: false
}

export default (state = initialState, action) => {
	switch(action.type){
		case ACCORDION_SWITCH_PANEL: 
			return {
				...state, 
				active: action.active,
				toggle: action.toggle
			};

		default: 
			return state; 
	}
}

export const actions = {
	setActive:  (active, toggle) => {
		return dispatch => {
	    dispatch({
	      type: ACCORDION_SWITCH_PANEL,
	      active: active,
	      toggle: toggle
	    })
	  }
	},
	// setToggle: (toggle) => ((dispatch) => dispatch{ type: ACCORDION_TOGGLE_PANEL, toggle: toggle })
};
import React, {useReducer} from 'react'
import {RaitingContext} from './raitingContext'
import {reitingReducer} from './raitingReducer'
import { RAITING_RESULT, RAITING_SUBMIT } from "../types";

export const RaitingState = ({children}) => {
	const [state, dispatch] = useReducer(reitingReducer, {
		submit: false,
	})
	
	const getResult = (e) => {
		if(e.target.checked) {
			dispatch({
				type: RAITING_RESULT,
				payload: {
					value: e.target.value,
				}
			})
		}
	}

	const toSubmit = () => {
		if(state.value) {
			dispatch({
				type: RAITING_SUBMIT,
			})
		}
	}


	return(
		<RaitingContext.Provider value={{
			getResult,
			toSubmit,
			...state,
		}}>
			{children}
		</RaitingContext.Provider>
	)
} 
import React from 'react'
import { UserContext, PlaceContext } from '../App'

export default function ComponentC() {
	return (
		<div>
			<UserContext.Consumer>
				{user => {
					return (
						<PlaceContext.Consumer>
							{place => {
                return <div>User context value {user}, place context value {place}</div>
							}}
						</PlaceContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}
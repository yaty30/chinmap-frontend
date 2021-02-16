import React from 'react'
import { Provider } from 'react-redux'
import store from './configureStore'

import Counter from '../SetRange'

export default function Root(): JSX.Element {
    return(
        <>
            <Provider store={store}>
                <Counter />
            </Provider>
        </>
    )
}
import React, { createContext, useContext } from "react";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { getCombinedReducer, connectToHarmowareVis, Container, BasedState, BasedProps } from 'harmoware-vis';
import 'harmoware-vis/scss/harmoware.scss';

export const HarmowareVisProvider: React.FC<{}> = ({ children }) => {

    const ConnectedHarmowareVis = connectToHarmowareVis(HarmowareVis)
    const store = createStore(getCombinedReducer());
    return (
        <Provider store={store}>
            <ConnectedHarmowareVis>
                {children}
            </ConnectedHarmowareVis>
        </Provider>
    )
}

// use this now
type ContextValue = {
    props: any
}
export const HarmowareVisContext = createContext({} as ContextValue)


export class HarmowareVis extends Container<BasedProps & BasedState> {
    render() {
        return (
            <HarmowareVisContext.Provider value={{ props: this.props }}>
                {this.props.children}
            </HarmowareVisContext.Provider>
        )
    }
}

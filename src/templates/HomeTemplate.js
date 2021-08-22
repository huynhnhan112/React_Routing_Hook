
import { Fragment } from "react"

import { Route } from "react-router"
import Header from "../components/HomePage/Header/Header"


export const HomeTemplate = (props) => {
    // props (path, component)

    return <Route exact path={props.path} render={(propsRoute) => {
            return <Fragment>
                <Header />
                <props.component {...propsRoute} />
            </Fragment>
        }} />
    
}
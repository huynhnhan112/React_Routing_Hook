
import { Fragment } from "react"
import { Route } from "react-router"


export const UserTemplate = (props) => {
    // props (path, component)

    return <Route exact path={props.path} render={(propsRoute) => {
            return <Fragment>
               <div className="d-flex">
                    <div className="w-50">
                        <img src="https://picsum.photos/200/200" alt="..." className="w-100 vh-100" />
                    </div>
                    <div>
                        <props.component {...propsRoute} />
                    </div>
               </div>
               
            </Fragment>
        }} />
    
}
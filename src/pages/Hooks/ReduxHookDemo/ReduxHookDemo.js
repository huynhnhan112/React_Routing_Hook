import React, { useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { addCommentAction } from '../../../redux/actions/FacebookActions';

export default function ReduxHookDemo(props) {

    const [userComment, setUserComment] = useState({
        name: '',
        comment: ''
    });


    //useDispatch giống với this.props.dispatch bên rcc
    const dispatch = useDispatch();


    console.log('userComment', userComment);


    //useSelector là hook tương ứng mapStateToProps 
    const { arrComment } = useSelector(state => state.FacebookReducer);
   
    const handleChangeInput = (event) => {
        let {name,value} = event.target;
        setUserComment({
            ...userComment,
            [name]:value
        })
    }

    
    const renderComment = () => {
        return arrComment.map((comment, index) => {
            return <div className="row" key={index}>
                        <div className="col-1">
                            <img src={comment.image} width={50} height={50} />
                        </div>
                        <div className="col-10">
                            <h3 className="text-danger">{comment.name}</h3>
                            <p>{comment.content}</p>
                        </div>
                    </div>
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        // action creater
        const action = addCommentAction(userComment)
        dispatch(action)
    }


    return (
        <div className="container">
            <h3>Facebook app!</h3>
            <div className="card">
                <div className="card-header">
                    {renderComment()}
                </div>
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <p>Name</p>
                        <input className="form-control" name="name" onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <p>Content</p>
                        <input className="form-control" name="content" onChange={handleChangeInput} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-outline-success">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// const mapStateToProps = (state) => {
//     return{
//         arrComment: state.FacebookReducer.arrComment
//     }
// }

// export default connect(mapStateToProps)(ReduxHookDemo)
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import axios from 'axios'
import {TOKEN_CYBERSOFT} from '../../util/settings'
import { layDanhSachPhimAction } from '../../redux/actions/PhimActions'

export default function APIMiddleWare(props) {

    const {mangPhim} = useSelector(state => state.PhimReducer)

    const dispatch = useDispatch();

    useEffect(() => {

        // 2 loại action trong redux
        //loại 1: {type: 'Type_name', }
        //loại 2: action là function

       const action = layDanhSachPhimAction('GP05');

        //Trong trường hợp action là function thì redux sẽ đợi function thực thi xong 
        // => Gửi dữ liệu đi
        dispatch(action);

       

    },[])


    const renderPhim = () => {
        return mangPhim.map((phim,index) => {
            return <div className="col-4 mt-2" key={index}>
                <div className="card">
                    <img src={phim.hinhAnh} alt="..." height={300} />
                    <div className="card-body">
                        <p>{phim.tenPhim}</p>
                        <p>{phim.moTa}</p>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className="container">
            <h3 className="text-center">Danh sách phim</h3>
            <div className="row">
                {renderPhim()}
            </div>
        </div>
    )
}


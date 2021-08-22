import React, {useState} from 'react'
import { Prompt } from 'react-router-dom';

export default function Login(props) {

    const [state,setState] = useState({taiKhoan:'',matKhau:'',isSaveForm:true})

    console.log('state', state);
    const handleChangeInput = (event) => {
        let {name,value} = event.target;
        setState({
            ...state,
            [name]:value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(state.taiKhoan === '123' && state.matKhau === '123'){
            // Xử lý gì đó thành công sau đó chuyển hướng
            props.history.push('/home');

            // props.history.replace('/home'); // thay đổi trang hiện tại thành trang tương ứng
        }else{
            alert('Tài khoản hoặc mật khẩu không đúng !');
            return;
        }
    }

    return (
        <form className="container" onSubmit={handleSubmit}>   
            <h3 class="text-center display-4">Login</h3>
            <div className="form-group">
                <p>Tài khoản</p>
                <input name="taiKhoan" className="form-control" onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <p>Mật khẩu</p>
                <input name="matKhau" className="form-control" onChange={handleChangeInput} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success mr-2">Login</button>
                <button type="button" className="btn btn-primary" onClick={()=>{
                    props.history.goBack()
                }}>Go back</button>
            </div>
            <Prompt when={state.isSaveForm} message={(location)=>{
                return 'Bạn có chắc chắn rời khỏi trang không ?';
            }} />
        </form>
    )
}

import React,{useState} from 'react'

export default function UseStateDemo(props) {

    const [like,setLike] = useState(1);

    const [color,setColor] = useState('./img/img/CarBasic/products/red-car.jpg');
    // const [state, setstate] = useState({like: 1})
    /* 
        this.state({
            like: 1
        })
    */

    const setColorCar = (color) => {
        setColor(`./img/img/CarBasic/products/${color}-car.jpg`)
    }

    return (
        <div className="container">
            <h3>Demo useState</h3>
            <div className="card w-25">
                <img src="https://picsum.photos/200/200" className="w-100" />
                <div className="card-body">
                    <h4>{like} Like</h4>
                    <button className="btn btn-outline-danger" onClick={()=>{
                        setLike(like + 1);
                    }}>Like</button>
                </div>
            </div>
            <hr/>
            <h3 className="text-center">Bài tập chọn màu xe</h3>
            <div className="row mt-5">
                <div className="col-6">
                    <img src={color} className="w-100" />
                </div>
                <div className="col-6">
                    <div className="row">
                        <button className="btn btn-dark col-3" onClick={()=>{
                            setColorCar('red')
                        }}> Black</button>
                        <button className="btn btn-danger col-3" onClick={()=>{
                            setColorCar('black')
                        }}> Red</button>
                        <button className="btn btn-secondary col-3" onClick={()=>{
                            setColorCar('silver')
                        }}> Silver</button>
                        <button className="btn bg-dark text-white col-3" onClick={()=>{
                            setColorCar('steel')
                        }}> Steel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import React, {useState} from "react";
import './home.css'

function Home(){
    const [nrow,setnrow] = useState(0)
    const [ncol,setncol] = useState(0)
    const [cat,setcat] = useState("")
    const [color,setcolor] = useState()
    const [cat_l,setcat_l] = useState([])
    const [cat_t,setcat_t] = useState()

    const row_c= (e)=>{
        setnrow(e.target.value)
    }

    const col_c= (e)=>{
        setncol(e.target.value)
    }

    const cat_name= (e)=> {
        setcat(e.target.value)
    }

    const color_cng= (e)=>{
        setcolor(e.target.value)
    }

    const handletakes = (e)=>{
        setcat_t({cat:cat,l:cat_l})
        console.log(cat_t)
    }

    const handlebtn = (e)=>{
        e.target.style.backgroundColor=color;
        const l= cat_l.concat(e.target.id);
        setcat_l(l);
    }

    return(
        <div className="back">
            <div className="boxs">
                <p>Planogram Boxes</p>
                <div className="boxes">
                    <tbody>
                        {(function (l,rows,cols){
                            for(var i=0;i<rows;i++){
                                const q= [];
                                for(var j=0;j<cols;j++){
                                    q.push(<td><div className="box" onClick={handlebtn} id={"("+i+","+j+")"} key={i+"/"+j}>{i},{j}</div></td>)
                                }
                                l.push(<tr>{q}</tr>)
                            }
                            return l;
                        })([],nrow,ncol)}
                    </tbody>
                </div>
            </div>
            <div className="takes">
                <p>Planogram UI</p>
                <div className="takes_r_c">
                    <div className="take_r">
                        <p>Enter Rows</p>
                        <input type="number" onChange={row_c}/>
                    </div>
                    <div className="take_r">
                        <p>Enter Columns</p>
                        <input type="number" onChange={col_c}/>
                    </div>
                </div>
                <div className="takes_r_c">
                    <div className="take_r">
                        <p>Name a Category</p>
                        <input type="text" onChange={cat_name}/>
                    </div>
                    <div className="take_r">
                        <p>Box Color</p>
                        <input type="color" id="color" onChange={color_cng}/>
                    </div>
                </div>
                <button onClick={handletakes}>Fix Selection</button>
            </div>
        </div>
    )
}

export default Home

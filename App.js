import react, { useRef } from "react";
import { useEffect, useState } from "react/cjs/react.development";
import './styles.css'
const Createbars = ()=>{
    const [insertion_sort,setInsertionSort] = useState(false)
    const [selection_sort,setSelectionSort] = useState(false)
    const [sort,setSort] = useState(false)
    const [val,setVal] = useState(10)    
    const [index,setIndex] = useState(0)
    const [j,setJ] = useState(0)
    const [c,setC] = useState(0)
    const [value,setValue] = useState(0)
    const [ele,setEle] =  useState([])    
    const containerRef = useRef(null)
    const [i,setI] = useState(0)
    const [value1,setValue1] = useState(10)

//  GENERATE RANDOM ARRAY
    const random = ()=>{
        let createarr = []
        let rnumber;
        for(let i=0;i<val;i++){
            rnumber = Math.floor(Math.random()*290)+50
            console.log(rnumber);
            if(createarr.indexOf(rnumber)==-1)
                createarr.push(rnumber);
            else
                i=i-1;
        }
        setEle(createarr)
    }
//CALLING SELECTION SORT UPON CHANGING J VALUE
useEffect(()=>{
    if(selection_sort){
        if(c<ele.length-1){
            setTimeout(() => {
                selectionSort(j)
            },100-value1);
        }
    }    
},[j,selection_sort])

//CHANGING SORTED ELEMENT COLOR TO YELLOW
useEffect(()=>{
    if(selection_sort){
        if(c>0){
            document.getElementById(`${ele[c-1]}`).style.backgroundColor="yellow";
            if(c==ele.length-1){
                document.getElementById(`${ele[c]}`).style.backgroundColor="yellow";
                setJ(0)
                setI(0)
                setSelectionSort(false)
                setC(0)
                setTimeout(()=>{
                    setColorGreen()
                },1000)
            }
            setValue(ele[c])
            setIndex(c)
            setJ(c)
        }
    }
},[c,selection_sort])

const setColorGreen = ()=>{
    for(let i=0;i<ele.length;i++){
        document.getElementById(ele[i]).style.backgroundColor="red";
    }
    enableButtons()
}

//CALLING BUBBLE SORT UPON CHANGING J VALUE
useEffect(()=>{
    if(sort){
        if(c<ele.length-1){
            setTimeout(() => {
                Sort(j)
            },100-value1);
        }
    }
},[j,sort])

// CHANGING SORTED ELEMENT COLOR TO YELLOW
useEffect(()=>{
    if(sort){
        if(c>0){
            document.getElementById(`${ele[i-1]}`).style.backgroundColor="red";    
            document.getElementById(`${ele[i]}`).style.backgroundColor="yellow";    
            if(i==1){
                document.getElementById(`${ele[i-1]}`).style.backgroundColor="yellow";    
                setSort(false)
                setI(0)
                setTimeout(()=>{
                    setColorGreen()
                },1000)
            }
        }
    }
},[c,sort])

//CALLING INSERTION SORT UPON CHANGING J VALUE
useEffect(()=>{
    if(insertion_sort){
        if(c<ele.length-1){
            setTimeout(() => {
                insertionSort(j)
            },100-value1);
        }
        if(c==ele.length-1){
            setJ(0)
            setI(0)
            setInsertionSort(false)
            setC(0)
            setTimeout(()=>{
                setColorGreen()
            },1000)
        }
    }    
},[j,insertion_sort])

//CHANGING SORTED ELEMENT COLOR TO YELLOW
useEffect(()=>{
    if(insertion_sort){
        if(c>0){
            setIndex(i)    
            for(let i=0;i<=c;i++){
                document.getElementById(`${ele[i]}`).style.backgroundColor="yellow";
            }
        }
    }
},[c,insertion_sort])

//INSERTION SORT
const insertionSort = (j)=>{
    const duparr = [...ele]
    document.getElementById(`${value}`).style.backgroundColor="blue";
    if(j==-1 || value>duparr[j]){
        duparr[index] = value
        setEle(duparr)
        setI((prevI)=>prevI+1) 
        setC((prevC)=>prevC+1)
        setValue(ele[i+1])
        setJ(c+1)
    }
    else if(duparr[j] > value){
        duparr[j+1] = duparr[j]
        duparr[j]= value
        setEle(duparr)
        setIndex(j)
        setJ((prevJ)=>prevJ-1)  
    }
    else{
        setJ((prevJ)=>prevJ-1)
    }
}

//SELECTION SORT
const selectionSort = (j)=>{
    let duparr = [...ele]
    let temp;
    document.getElementById(`${value}`).style.backgroundColor="blue";
    if(j<=i){
    document.getElementById(`${ele[j]}`).style.backgroundColor="green";
    }
    if(j==i+1){
        temp = duparr[c]
        duparr[c]=duparr[index]
        duparr[index]=temp
        document.getElementById(`${value}`).style.backgroundColor="blue";
        setEle(duparr)
        setC((prevC)=>prevC+1)
    }
 else if(value>duparr[j]){   
        document.getElementById(`${value}`).style.backgroundColor="red";    
        setValue(duparr[j])
        setIndex(j)
    }
     else{
         setTimeout(() => {
            document.getElementById(`${ele[j]}`).style.backgroundColor="red";    
         }, 0); 
     }
    setJ((prevJ)=>prevJ+1)
}

//BUBBLE SORT
const Sort=(j)=>{
    const duparr = [...ele];
    let temp;
    if(j>0){
        document.getElementById(`${ele[j-1]}`).style.backgroundColor="red";    
    }
    document.getElementById(`${ele[j]}`).style.backgroundColor="green";
    document.getElementById(`${ele[j+1]}`).style.backgroundColor="green";
    if(duparr[j]>duparr[j+1]){
       document.getElementById(`${ele[j]}`).style.backgroundColor="blue";
       document.getElementById(`${ele[j+1]}`).style.backgroundColor="blue"; 
        temp = duparr[j]
        duparr[j]=duparr[j+1]
        duparr[j+1]=temp
        setEle(duparr)
    }
    if(j==i-2){
        setI((prevI)=>prevI-1)
        setC((prevC)=>prevC+1)
        setJ((prevJ)=>prevJ-prevJ)
    }
    else{
        setJ((prevJ)=>prevJ+1)
    }
} 

//STYLE FOR EACH BAR
    const styles = (element)=> {
        const elewidth = (100/ele.length)+1;
        return({
        writingMode:"vertical-lr",
        textOrientation:"upright",
        textAlign:"center",
        height:`${element}px`,
        width:`${elewidth}%`,
        backgroundColor:"red",
        margin:"5px",
        //animationDuration:"3s"
    })}

// STYLE FOR WHOLE CONTAINER
    const containerStyle = {
        display :"flex",
        width:"80%",
        margin:"auto",
        flexDirection:"row",
        alignItems:"flex-end",
        borderBottom:"2px solid black", 
    }

    const headingStyle = {
        textAlign:"center",
        margin:"10px",
        backgroundColor:"#d6ffff",
        color:"red"
    }

    const disableButtons = ()=>{
        var buttons = document.getElementsByTagName('button')
        for(let i=0;i<buttons.length;i++){
            buttons[i].disabled=true
        }
    }

    const enableButtons = ()=>{
        var buttons = document.getElementsByTagName('button')
        for(let i=0;i<buttons.length;i++){
            buttons[i].disabled=false
        }
    }

    return(
        <div id="main">
            <div style={headingStyle}>
                <h1>Sorting Visualisation</h1>
                <label>Speed</label>
                <input value={value1} type="range" min="10" max="90" onChange={(e)=>setValue1(e.target.value)} default="10"></input> <span>{value1}</span>
                <label>No.of bars</label>
                <input value={val} type="range" min="10" max="100" onChange={(e)=>setVal(e.target.value)} placeholder="enter no of bars" default="10"></input> <span>{val}</span>
                <button onClick={random}>Generate new bars</button>
                <button onClick={()=>{setSort(true)
                          setI(ele.length)
                          setC(0)
                          setJ(0)
                          disableButtons()
                }}>Bubble sort
                </button>
                <button onClick={()=>{setSelectionSort(true)
                            setI(ele.length-1)
                            setIndex(0)
                            setJ(1)
                            setC(0)
                            setValue(ele[0])
                            disableButtons()
                }}>Selection sort
                </button>
                <button onClick={()=>{setInsertionSort(true)
                            setI(1)
                            setIndex(1)
                            setJ(0)
                            setC(0)
                            setValue(ele[1])
                            disableButtons()
                }}>Insertion sort
                </button>
            </div>
            <div style={containerStyle} ref={containerRef}>
                {ele.map(element =>
                    <div key={element} style={styles(element)} id={`${element}`}></div>
                )}
            </div>
        </div>
    )
}

export default Createbars;
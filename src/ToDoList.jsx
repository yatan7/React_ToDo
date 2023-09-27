import React from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import List from './List'
import Header from './components/Header';


const ToDoList =()=>{

    const [item, setItem] = useState('');
    const [newItem, setNewItem] = useState([]);

    const itemEvent = (event)=>{
        setItem(event.target.value);
    }

    const listofItems =()=>{
        setNewItem ((previous)=>{
            return [...previous, item]
        })
        setItem(" ");
    }

    const deleteall=()=>{
        setNewItem (()=>{
            return []
    })
}
    //for color chagee

        const [mystyle, setMystle] = useState({
            color: 'white',
            backgroundColor: 'black'
          })
          const[btntext, setBtntext] = useState('Enable Dark Mode')
          const togglestyle = ()=>{
          if (mystyle.color === 'white') {
            setMystle({
              color: 'black',
              backgroundColor: 'white'
              
            })
            setBtntext("Enable dark mode")
          }
          else{
            setMystle({
              color: 'white',
              backgroundColor: 'black'
            })
            setBtntext("Enable light mode");
          }
          }
    
    return (
    <>
  
 <center>
          <div className='bg'>
   <Header/>
   </div>
    <div className='main_div' style={mystyle}>
       
        
        <div className='center_div'style={mystyle}>
          
            <input type="text" value={item} placeholder='Add tasks'onChange={itemEvent}style={mystyle}></input>
            <Button className="btns" onClick={listofItems}style={mystyle}>
                <AddCircleOutlineOutlinedIcon/>
            </Button>
            <br/>
            <ol>
                {newItem.map((val, index)=>{
                    return<List key={index} text ={val}/>;

                })}
                <br/>
            </ol>
        </div>
        <div>
                <Button onClick={togglestyle} type="button" className="btn-dark"style={mystyle}>
                    <Brightness4Icon/>
                </Button>
                <button className='btnia' type="button" style={mystyle} onClick={deleteall}><DeleteIcon/></button>
            </div>
    </div>
    </center>
   
    </>
    );

};

export default ToDoList;
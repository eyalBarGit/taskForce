import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeImg, saveToStorage } from '../store/actions/taskAction'
import { useHistory } from 'react-router-dom'
import { CommnetsList } from '../cmps/Comments/CommnetsList'
import { ColorPallette } from '../cmps/Task/ColorPallette'
import { AddImg } from '../cmps/TaskDetails/AddImg'
import { Description } from '../cmps/TaskDetails/Description'
import { AddComment } from '../cmps/TaskDetails/AddComment'
import { TaskCalendar } from '../cmps/TaskDetails/TaskCalendar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


export function TaskDetails(props) {
  const { id } = props.match.params
  const store = useSelector((state) => state.task)
  const tasks = useSelector((state) => state.task.tasks)
  const dispatch = useDispatch()
  const [task, setTask] = useState()
  const history = useHistory()

  useEffect(() => {
    getCurrTask()
  })


  const getCurrTask = () => {
    const currTask = tasks[id]
    setTask(currTask)
  }

  const [isColorPallette, setColorPallette] = useState(false)
  const toggleColorPallete = () => {
    setColorPallette(!isColorPallette)
  }

  const onRemoveImg = () => {
    dispatch(removeImg(task))
    const updatedTask = {
      ...task,
      imgLink: '',
    }
    const newState = {
      ...store,
      tasks: { ...store.tasks, [task.id]: updatedTask }
    }

    dispatch(saveToStorage(newState))
  }


  const onGoHome = () => {
    history.push('/')
  }

  const [date, setDate] = useState('Wed Aug 05 2020')
  const onGetDates = (date) => {
    const newDate = date.toString()
    setDate(newDate.substring(0, 15))
  }

  const [isEditBtns, toggleEditBtns] = useState(false)
  const onToggleEditBtns = () => {
    toggleEditBtns(!isEditBtns)
  }
  return (
    <TaskDetailsContainer className="margin-center"
      background={store.themeColor}

    >
      {task &&
        <div className="task-details ">
          <MainContainer
            background={store.themeColor}
            className="main-content  ">

            <LeftSide>
              <h2>{task.title} </h2>

              {date &&
                <div className="due-date flex">
                  <p className="title-date">Due Date: </p>
                  <p>{date}</p>
                </div>
              }

              {task.imgLink && <div className="uploaded-img">
                <button onClick={onRemoveImg}>X</button>
                <img
                  src={task.imgLink}
                  alt="uploaded-img"
                />
              </div>
              }
              <Description task={task} store={store}></Description>
              <AddComment task={task} store={store}></AddComment>
              {task.comments && <CommnetsList task={task} comments={task.comments}></CommnetsList>}
            </LeftSide>
            {!isEditBtns &&
              <div className="toggle-btn-mobile">
                <button onClick={onToggleEditBtns} className="toggle-edit-btn">+</button>
              </div>}

            <RightSide background={store.themeColor} >
              <div className={`main-container flex column space-between ${isEditBtns ? 'visible' : 'hidden'}`}>
                <div className="close-edit-btns">
                  <button onClick={onToggleEditBtns}>X</button>
                </div>
                <div className="change-background">
                  <button onClick={toggleColorPallete}>Task background</button>
                  {isColorPallette && <ColorPallette toggleColorPallete={toggleColorPallete} task={task} />}
                </div>
                <TaskCalendar dates={onGetDates}></TaskCalendar>
                <AddImg id={id} task={task}></AddImg>

                <button onClick={onGoHome} className="save-btn">
                  <FontAwesomeIcon icon={faArrowCircleLeft}></FontAwesomeIcon>
                </button>
              </div>

            </RightSide>
          </MainContainer>
        </div >
      }
    </TaskDetailsContainer >
  )
}

const TaskDetailsContainer = styled.div`

background-color: rgb(240, 238, 238);
max-width:750px;
padding:50px;
min-height:650px;
max-height:800px;
overflow-y:auto;
overflow-x:hidden;

.fileContainer{
margin:0;
padding:0;
box-shadow:none;
background-color:transparent;
p{
display:none;
}
 }
`;
const MainContainer = styled.div`
display:flex;
justify-content: space-between;
max-width:750px;
@media (max-width:650px){
    display:flex;
    flex-direction:column;
}
.toggle-btn-mobile{
  position:fixed;
  right:15px;
  bottom:50px;
  z-index:30;
  .toggle-edit-btn{
    background-color:${(props) => props.background} ;
    color:#fff;
    border-radius:50px;
    font-size:30px;
    text-align:center;
    align-items:center;
    justify-content:center;
    display:flex;
    width:45px;
  }
}

@media (min-width:710px){
  .close-edit-btns{

    display:none;
  }
  .toggle-btn-mobile{
    display:none;
  }
}
`;
const LeftSide = styled.div`
max-width:600px;
padding-right:20px;
.due-date{
p.title-date{
  margin-right:5px;
  font-size:12px;
  font-weight:bold;
}
  p{
    font-size:12px;
    margin-top:-5px;
    line-height:0;
    margin-bottom:20px;
  }
}
.uploaded-img{
  position:relative;
  max-width:400px;
  min-width:175px;
@media (max-width:715px){
 max-width:950px;
}
  img{
    object-fit:cover;
  width:100%;
  }
  button{
    position:absolute;
color:#fff;
    right:0;
    width:45px;
    height:45px;
  background-color:#ff7272;
  }
 
}
  @media (min-width:550px){
  width:500px;
}
`;

const RightSide = styled.div`
position:sticky;
top:70px;
max-width:220px;
height:90px;
button{
  margin-bottom:5px;
  width:175px;
}
.add-image{
  p{
    line-height:0;
  }
}
.save-btn{
  background-color:${(props) => props.background};
  text-decoration:none;
  color:#fff;
	text-shadow:none;
  
}
}
.main-container{
  transition:1s;
}
@media (max-width:710px){
  position:fixed;
  right:0;
  bottom:0;
  max-width:330px;
  
  .main-container{
    width:100%;
    position:fixed;
    right:0;
    bottom:0;
    padding:20px;

background-color:#fff;
button,label{
  width:100%;
  }
  .show-calendar{
    width:100%;
  }
} 
.visible{
  transform:translateY(0)
}
.hidden{
  transform:translateY(100%)
  }

}
`;
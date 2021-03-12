// import React, { useEffect, useState } from 'react';
// import { DragDropContext, Droppable } from 'react-beautiful-dnd'
// import { List } from '../cmps/List/List'
// import { useSelector, useDispatch } from 'react-redux';
// import { AddColumn } from '../cmps/Column/AddColumn'
// import { updateColumn, changeColumnOrder, saveToStorage } from '../store/actions/taskAction'
// import styled from 'styled-components';
// import taskService from '../service/taskService'

// export function TaskForceApp() {
//     const tasks = useSelector((state) => state.task.tasks)
//     const store = useSelector((state) => state.task)
//     const columns = store.columns
//     const dispatch = useDispatch()

//     const [windowSize, setWindowsSize] = useState(window.innerWidth);
//     const checkWidth = () => {
//         setWindowsSize(window.innerWidth)
//         if (windowSize < 500) {
//             setDirection('vertical')
//         }
//         else {
//             setDirection('horizontal')
//         }
//     }



//     useEffect(() => {
//         window.addEventListener('resize', checkWidth);
//         checkWidth()
//         return () => {
//             window.removeEventListener('resize',checkWidth)
//         }
//     }, [windowSize])



//     async function onDragEnd(result) {
//         const { destination, source, draggableId, type } = result
//         if (!destination) return
//         if (destination.droppableId === source.droppableId && destination.index === source.index) return

//         console.log('column')
//         if (type === 'column') {
//             const newColumnOrder = await dispatch(changeColumnOrder(columns.columnOrder, source, destination, draggableId))

//             const newStore = { ...store, columns: { ...store.columns, columnOrder: newColumnOrder } }
//             dispatch(saveToStorage(newStore))
//             return
//         }

//         const start = columns[source.droppableId]
//         const finish = columns[destination.droppableId]

//         if (start === finish) {
//             const newTasksIds = await taskService.reorderTasks(start.taskIds, source, destination, draggableId)

//             const updatedColumn = {
//                 ...columns,
//                 [finish.id]: { ...finish, taskIds: newTasksIds }
//             }
//             dispatch(updateColumn(updatedColumn))
//             const newStore = { ...store, columns: updatedColumn }
//             dispatch(saveToStorage(newStore))
//             return
//         }

//         const startTasksIds = Array.from(start.taskIds)
//         startTasksIds.splice(source.index, 1)
//         const newStartCol = {
//             ...start,
//             taskIds: startTasksIds
//         };

//         const finishTasksIds = Array.from(finish.taskIds)
//         finishTasksIds.splice(destination.index, 0, draggableId)

//         const newFinishCol = {
//             ...finish,
//             taskIds: finishTasksIds
//         };
//         const newColumns = {
//             ...columns,
//             [newStartCol.id]: newStartCol,
//             [newFinishCol.id]: newFinishCol
//         }
//         dispatch(updateColumn(newColumns))
//         const newStore = { ...store, columns: newColumns }
//         taskService.saveToStorage(newStore)
//     }


//     const [isAddColumn, toggleAddColumn] = useState(false)
//     const onAddColumn = () => {
//         toggleAddColumn(!isAddColumn)
//     }
//     const [direction, setDirection] = useState('horizontal')

//     return (
//         <DragDropContext onDragEnd={onDragEnd}>
//             <Droppable
//                 droppableId="all-columns"
//                 direction={direction}
//                 type="column"
//             >
//                 {(provided) => {
//                     return (
//                         < div className={"task-force-app container margin-center flex wrap"}>
//                             <MainContainer className="columns"
//                                 {...provided.droppableProps}
//                                 ref={provided.innerRef}
//                             >
//                                 {columns && columns.columnOrder.map((colId, idx) => {
//                                     const currColumn = columns[colId]
//                                     const columnTasks = currColumn.taskIds.map(taskId => tasks[taskId])
//                                     return <List
//                                         store={store}
//                                         columns={columns}
//                                         tasks={tasks}
//                                         index={idx}
//                                         key={currColumn.id}
//                                         tasks={columnTasks}
//                                         column={currColumn} />
//                                 }
//                                 )}
//                                 {provided.placeholder}
//                                 <AddColumnContainer className="add-column"
//                                     background={store.themeColor}
//                                 >
//                                     {!isAddColumn && <button onClick={onAddColumn}>Add List</button>}
//                                     {isAddColumn && <AddColumn toggleAddColumn={toggleAddColumn} />}
//                                 </AddColumnContainer>
//                             </MainContainer>
//                         </div>
//                     )
//                 }}
//             </Droppable>
//         </DragDropContext >
//     )
// }

// const MainContainer = styled.div`

// display:flex;
// flex-wrap:wrap;
// gap: 5px;
// height:90vh;
// position:relative;
// overflow-x:auto;
// `;
// const AddColumnContainer = styled.div`
// button{
// background-color:${(props) => props.background};
// color:#fff;
// }
// @media(max-width:1150px){
//     display:none;
// }
// `;
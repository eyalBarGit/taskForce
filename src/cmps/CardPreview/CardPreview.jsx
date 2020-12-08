import React, { useEffect } from 'react';

import { Draggable } from 'react-beautiful-dnd'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faTasks, faClock, faEye, faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { CardLabel } from '../CardDetails/CardLabel/CardLabel'
export function CardPreview(props) {

    const { cards, cardid, } = props
    const currCard = cards[cardid]

    const pencil = <FontAwesomeIcon icon={faPencilAlt} />
    const checklist = <FontAwesomeIcon icon={faTasks} />
    const clock = <FontAwesomeIcon icon={faClock} />
    const eye = <FontAwesomeIcon icon={faEye} />
    const clipBoard = <FontAwesomeIcon icon={faClipboardList} />


    useEffect(() => {
        return () => {

        }
    }, [])

    if (!currCard) return 'loading...'
    return (
        <Draggable draggableId={currCard?.id} index={props.index}>
            {(provided, snapshot) => (
                <div>
                    <MainContainer
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        isDragging={snapshot.isDragging}
                    >
                        <div className="card-preview flex column">
                            {currCard.cardCover &&
                                <div style={{ backgroundColor: `${currCard.cardCover}` }} className="card-top-cover">
                                </div>
                            }
                            <div className="card-labels flex">

                                {currCard.labels && currCard.labels.map(label => {
                                    return <CardLabel key={label} label={label} />
                                })}
                            </div>
                            <div className="main-card-preview-content">

                                <div className="top-section flex space-between">
                                    <div className="title">
                                        <p>{currCard?.title}</p>
                                    </div>
                                    <span className="edit" >{pencil}</span>
                                </div>
                                <div className="indicators flex align-center">
                                    {currCard.isWatched &&
                                        eye
                                    }
                                    {currCard.dueDate &&
                                        <span className="flex align-center">
                                            {clock}
                                            <p style={{ fontSize: '10px' }}>

                                                {currCard.dueDate.substring(4, 10)}
                                            </p>
                                        </span>
                                    }
                                    {currCard.desc &&
                                        clipBoard
                                    }
                                    {Object.keys(currCard.checklist).length > 0 &&
                                        checklist
                                    }




                                </div>

                            </div>
                        </div>
                    </MainContainer>
                </div>
            )
            }
        </Draggable >
    )
}

const MainContainer = styled.div`

width:100%;
`;
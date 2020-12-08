import UTILS from '../service/utils'




function deleteCard(currBoard, currList, cardId) {
  const newCards = currBoard.cards
  delete newCards[cardId]

  const newCardIds = currList.cardIds.filter((cardsId) => cardsId !== cardId)
  currList.cardIds = newCardIds

  return { currBoard: currBoard, currList: currList, cardId }
}



function copyCard(newCard) {
  return new CopyCard(newCard)
}


function CopyCard(cardToCopy) {
    this.id = UTILS.generatePassword(5);
    this.title = cardToCopy.title;
    this.description = cardToCopy.description;
    this.cardCover = cardToCopy.cardCover;
    this.checklist = cardToCopy.checklist;
    this.isWatched = false;
    this.dueDate = cardToCopy.dueDate;
    this.labels = cardToCopy.labels;
    this.createdAt = new Date().toLocaleDateString()
}

function createCheckList(checkListName) {
  return {
    id: UTILS.generatePassword(5),
    name: checkListName,
    list: {},
    createdAt: new Date().toLocaleDateString()
  }
}


function createCheckListItem(itemName) {
  return {
    id: UTILS.generatePassword(5),
    text: itemName,
    isChecked: false,
    createdAt: new Date().toLocaleDateString()
  }
}

function removeLabel(currCard, labelIndex) {
  currCard.labels.splice(labelIndex, 1)
  const newLabelList = currCard.labels
  return newLabelList
}



export default {
  deleteCard,
  copyCard,
  createCheckList,
  createCheckListItem,
  removeLabel
}
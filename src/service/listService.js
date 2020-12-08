// const { createCard } = require('../store/actions/listActions')
const UTILS = require('./utils')


// async function exampleFunction(cardsToSplit) {
//   const cards = []
//   for (let i = 0; i < cardsToSplit.length; i++) {
//     const secondaryCard = {
//       currCards: [],
//       score: 0
//     }

//     secondaryCard.currCards[0] = cardsToSplit[i]
//     secondaryCard.score = _scoreCal(secondaryCard.currCards)

//     cards.push(secondaryCard)
//   }
//   return cards
// }


async function deleteList(currBoard, currList) {
  const newLists = currBoard.lists
  delete newLists[currList.id]
  const newListOrder = currBoard.listOrder.filter(list => list !== currList.id)

  const currListCardIds = currList.cardIds
  const newBoardCards = currBoard.cards


  function _deleteCards(cardID) {
    delete newBoardCards[cardID]
  }
  currListCardIds.forEach(cardID => _deleteCards(cardID))


  return {
    newLists: newLists,
    newListOrder: newListOrder,
    newBoardCards: newBoardCards
  }

}


async function copyList(currBoard, listToCopy) {
  const copiedListTitle = 'Copy of - ' + listToCopy.title
  const newList = await _createList(copiedListTitle)
  const matchingCards = []
  const newCards = {}
  const cardIdsToCopy = listToCopy.cardIds
  _findMatchingCards(matchingCards, cardIdsToCopy, currBoard.cards)

  matchingCards.forEach(
    card => {
      const cardCopy = copyCard(card)
      newCards[cardCopy.id] = cardCopy
      return
    }
  )
  newList.cardIds = Object.keys(newCards)

  const start = currBoard.listOrder.findIndex(element => element === listToCopy.id)
  const end = newList.id
  const newListOrder = currBoard.listOrder
  newListOrder.splice(start + 1, 0, end)

  return {
    copiedList: newList,
    newListOrder: newListOrder,
    copiedCards: newCards
  }
}


function getListCards(cards, list) {
  const currCards = {}
  list.cardIds.forEach((cardID) => { return cards[cardID] ? currCards[cardID] = cards[cardID] : '' })
  return currCards
}



function _findMatchingCards(matchingCards, cardsToCopy, allCards) {
  cardsToCopy.forEach(cardId => {
    const currCard = allCards[cardId]
    if (currCard) {
      matchingCards.push(currCard)
    }

  })

}

async function _createList(listName,) {
  return {
    id: UTILS.generatePassword(6),
    title: listName,
    cardIds: []
  }
}

function copyCard(cardToCopy) {
  return {
    id: UTILS.generatePassword(5),
    title: cardToCopy.title,
    desc: cardToCopy.desc,
    cardCover: cardToCopy.cardCover,
    checklist: cardToCopy.checklist,
    isWatched: cardToCopy.isWatched,
    dueDate: cardToCopy.dueDate,
    labels: cardToCopy.labels,
    createdAt: new Date().toLocaleDateString()
  }
}


function createCard(cardTitle, description = '') {
  return {
    id: UTILS.generatePassword(5),
    title: cardTitle,
    desc: description,
    checklist: {},
    cardCover: '',
    isWatched: false,
    labels: [],
    dueDate: '',
    createdAt: new Date().toLocaleDateString()
  }
}


export default {
  deleteList,
  createCard,
  copyList,
  getListCards
}

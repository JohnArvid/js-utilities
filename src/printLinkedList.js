function printLinkedList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}

function printLinkedListReverse(list) {
    if (list.next) {
        printLinkedListReverse(list.next);
    }

    console.log(list.value);
}


let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
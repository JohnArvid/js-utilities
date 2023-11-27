function printLinkedList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
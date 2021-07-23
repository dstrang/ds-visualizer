class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  update(value) {
    this.value = value;
  }
}

function ListNode() {
    
}

/**
 * Singlely Linked List
 */
class LinkedList {
  constructor() {
      this.tail = null
      this.head = null
  }
    
  insert(value) {
      const node = new ListNode(value)

      if (this.head == null) {
          this.head = node
          this.tail = this.head
      } else {
          this.tail.next = node
          this.tail = node
      }
  }

  delete() {
      this.head = null
  }

  show() {
      let node = this.head
      let str = ""
      while (node.next != null && node.value != null) {
          str += node.value + " "
          node = node.next
      }
      str += node.value

      return str
  }
}

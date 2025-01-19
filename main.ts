interface ILinkedList<T> {
    insertFirst(data: T): void;
    insertLast(data: T): void;
    print(): void;
}
class LinkedListNode<T> {
    data: T;
    next: LinkedListNode<T> | null = null;
    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> implements ILinkedList<T> {
    head: LinkedListNode<T> | null = null;
    tail: LinkedListNode<T> | null = null;
    length: number = 0;

    insertLast(data: T): void {
        const newNode = new LinkedListNode<T>(data);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    insertFirst(data: T): void {
        const newNode = new LinkedListNode<T>(data);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    print(): void {
        let current = this.head;
        while (current) {
            process.stdout.write(`${current.data} `);
            current = current.next;
            if (current) process.stdout.write("-> ");
            else process.stdout.write("\n");
        }
    }
}
const myLinkedList = new LinkedList<string>();
myLinkedList.insertLast("10");
myLinkedList.insertLast("20");
myLinkedList.print();
myLinkedList.insertFirst("5");
myLinkedList.print();

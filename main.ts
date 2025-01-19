interface ILinkedList<T> {
    insertFirst(data: T): void;
    insertLast(data: T): void;
    insertAtPosition(position: number, data: T): void;
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

    insertAtPosition(position: number, data: T): void {
        if (position < 0 || position > this.length) {
            throw new Error("Invalid Position");
        }
        if (position === 0) this.insertFirst(data);
        else if (position === this.length) this.insertLast(data);
        else {
            const newNode = new LinkedListNode<T>(data);
            let current = this.head;
            for (let i = 0; i < position - 1; i++) {
                current = current!.next;
            }
            newNode.next = current!.next;
            current!.next = newNode;
            this.length++;
        }
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
myLinkedList.insertAtPosition(1, "7");
myLinkedList.print();

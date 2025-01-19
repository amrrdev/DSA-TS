interface ILinkedList<T> {
    insertFirst(data: T): void;
    insertLast(data: T): void;
    insertAtPosition(position: number, data: T): void;
    search(data: T): boolean;
    delete(data: T): void;
    deleteFirst(): void;
    deleteLast(): void;
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

    search(data: T): boolean {
        if (this.length < 0) return false;
        let current = this.head;

        while (current !== null && current.data !== data) {
            current = current!.next;
        }

        if (current === null) return false;
        return true;
    }

    deleteFirst(): void {
        if (this.length === 0) {
            throw new Error("Empty Linked List");
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head!.next;
        }
        this.length--;
    }

    deleteLast(): void {
        if (this.length === 0) {
            throw new Error("Empty Linked List");
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            while (current !== null && current.next !== this.tail) {
                current = current.next;
            }
            this.tail = current;
            this.tail!.next = null;
        }
        this.length--;
    }

    delete(data: T): void {
        if (this.length === 0) {
            throw new Error("Empty linkedlist");
        }
        let current = this.head;
        let previous: LinkedListNode<T> | null = null;
        while (current !== null && current.data !== data) {
            previous = current;
            current = current.next;
        }
        if (current === null) {
            throw new Error("Not found");
        }

        if (current === this.head) {
            this.deleteFirst();
        } else if (current === this.tail) {
            this.deleteLast();
        } else {
            previous!.next = current.next;
        }
        this.length--;
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
myLinkedList.deleteFirst();
myLinkedList.print();
myLinkedList.deleteLast();
myLinkedList.print();

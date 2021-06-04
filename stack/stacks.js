class Stack {
    constructor() {
        this.items = []
        this.count = 0
    } 
    push(element) {
        this.items[this.count] = element
        console.log(`${element} added to ${this.count}`)
        this.count ++ 
        return this.count -1
    }
    pop() {
        let deleteItem = this.items[this.count -1]
        this.count --
        console.log(`${deleteItem} deleted`)
        return deleteItem
    }
    peek() {
        console.log(`top element ${this.items[this.count -1]}`)
        return this.items[this.count -1]
    }
    isEmpty() {
        console.log(`${this.count==0 ? "stack is empty" : "stack is not empty"}`)
        return this.count == 0
    }
    size() {
        console.log(`${this.count}`)
        return this.count
    }
    print() {
        let str =""
        for( let i = 0; i < this.count; i++  ) {
            str += this.items[i] +  ' '
        }
        return str
    }
    clear() {
        this.items = []
        this.count = 0
        console.log("stack done for")
        return this.items
    }
}
const stack = new Stack()
stack.isEmpty()
stack.push(100)
stack.push(200)
stack.peek()
stack.push(300)
stack.push(400)
stack.pop()
stack.pop()
stack.isEmpty()
stack.size()
console.log(`${stack.print()
}`)
stack.clear()
class EventSourcer {
  constructor() {
    this.value = 0;
    this.actions = [0];
    this.pointer = 0;
  }

  add(num) {
    this.value += num
    if(this.isPointerAtEnd()) this.actions.push(num)
    else this.actions[this.pointer+1] = num
    this.pointer += 1
  }
  subtract(num) {
    this.value += -num
    if(this.isPointerAtEnd()) this.actions.push(-num)
    else this.actions[this.pointer+1] = -num
    this.pointer += 1
  }
  undo() {
    if(this.pointer === 0) return "Nothing to Undo"
    this.value -= this.actions[this.pointer]
    this.pointer -= 1
  }
  redo() {
    if(this.pointer < this.actions.length -1) {
      this.value += this.actions[this.pointer+1]
      this.pointer += 1
    }
    else return "Nothing to Redo"
  }
  bulk_undo(num) {
    //if num is valid - run undo num times
    for(let i=num;i>0;i--) this.undo()
  }
  bulk_redo(num) {
    //if num is valid - run redo num times
    for(let i=num;i>0;i--) this.redo()
  }
  isPointerAtEnd() {
    return this.pointer === this.actions.length-1 ? true : false
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;



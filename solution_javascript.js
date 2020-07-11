class EventSourcer {
  constructor() {
    this.value = 0;
    this.actions = [0];
    this.pointer = 0;
  }

  add(num) {
    this.value += num
    //Nothing to undo
    if(this.pointer === this.actions.length-1) {
      this.actions.push(num)
    }
    else {
      this.actions[this.pointer+1] = num
    }
    this.pointer += 1
  }
  subtract(num) {
    this.value += -num
    if(this.pointer === this.actions.length-1) this.actions.push(-num)
    else {
      this.actions[this.pointer+1] = -num
    }
    this.pointer += 1
  }
  undo() {
    //undo last action
    //is there a last action
    if(this.pointer === 0) return "Nothing to Undo"
    this.value -= this.actions[this.pointer]
    this.pointer -= 1
  }
  redo() {
    //redo last action
    //is there an action to redo
    if(this.pointer < this.actions.length -1) {
      this.value += this.actions[this.pointer+1]
      this.pointer += 1
    }
    else {
      return "Nothing to Redo"
    }

  }
  bulk_undo(num) {
    //if num is valid - run undo num times
    for(let i=num;i>0;i--) this.undo()
  }
  bulk_redo(num) {
    //if num is valid - run redo num times
    for(let i=num;i>0;i--) this.redo()
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;


// let sourcer = new EventSourcer();
// //console.log(sourcer.actions)
// sourcer.add(5);
// sourcer.add(5);
// sourcer.add(5);
// //console.log(sourcer.actions, sourcer.value)
// sourcer.undo();
// sourcer.undo();
// sourcer.add(1);
// sourcer.redo();
// console.log(sourcer.actions, sourcer.value)

const TodoList = function(){
  this.listResult = []

  this.add = function(info) {
    listResult = this.listResult
    this.id = this.listResult.length +1

    newTask = {
      'id': this.id,
      'task': info,
      'complete': false
    }

    this.listResult.push(newTask)
    return `You added ${newTask.task} to the list!`
  }

  this.items = function() {
    return this.listResult
  }

  this.complete = (id) => {
    listResult.map(function(aResult){
      console.log(aResult.id === id)
      if(aResult.id === id) {
        aResult.complete = true
      }
      return `A ${aResult}`
    })
  }
}

let list = new TodoList()

list.add('Do laundry')
list.add('Call mom')
list.complete(1)

list.items()

//   this.completeItem = (id) => {
//     // takes an id and marks it as complete
//
//   };
//
//   this.deleteItem = (id) => {
//     // takes an id and removes it from list
//
//   };
//
// };
//
// var list = new TodoList();
// list.add("thing");
// list.add("other thing");
// list.item();


// list.add('Do laundry')
// => [{id:1, task: 'Do laundry', complete: false}]

// list.add('Call mom')
// => [{id: 1, task: 'Do laundry', complete: false},
//     {id: 2, task: 'Call mom', complete: false}]

// list.items()
// => [{id: 1, task: 'Do laundry', complete: false},
//     {id: 2, task: 'Call mom', complete: false}]

// list.completeItem(1)
// => [{id: 1, task: 'Do laundry', complete: true},
//     {id: 2, task: 'Call mom', complete: false}]

// list.deleteItem(2)
// => [{id: 1, task: 'Do laundry', complete: true}]


module.exports = TodoList

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

  this.complete = (id) => {
    listResult.map(function(aResult){
      if(aResult.id === id) {
        aResult.complete = true
      }
      return `A ${aResult}`
    })
  }

  this.delete = (id) => {
    return listResult.filter((aResult) => aResult.id !== id)

  }

  this.items = function() {
    return this.listResult
  }
}

let list = new TodoList()

list.add('Do laundry')
list.add('Call mom')
list.complete(1)

list.items()

//   this.deleteItem = (id) => {
//     // takes an id and removes it from list

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

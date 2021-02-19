export function add(todo) {
  return {
    type: 'ADD',
    payload: {
      todo
    }
  }
}

export function edit(id, completed) {
  return {
    type: 'UPDATE',
    payload: {
      id,
      completed
    }
  }
}

export function remove(id) {
  return {
    type: 'REMOVE',
    payload: {
      id
    }
  }
}
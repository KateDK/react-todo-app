exports.todos = (req, res) => {
  res.json({
    todos: [
      { todoText: 'Create new todo', id: 1, completed: false, important: false },
      { todoText: 'Mark this todo as completed', id: 2, completed: false, important: false },
      { todoText: 'Edit this Todo', id: 3, completed: false, important: false },
      { todoText: 'Delete this todo', id: 4, completed: false, important: false },
      { todoText: 'Make this todo important', id: 5, completed: false, important: false }
    ],
  });
};

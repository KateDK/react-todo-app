exports.todos = (req, res) => {
  res.json({
    todos: [
      { todoText: 'eat', id: 1, completed: false, important: false },
      { todoText: 'vote', id: 2, completed: false, important: false },
    ],
  });
};

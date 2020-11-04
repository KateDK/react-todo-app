exports.todos = (req,res)=>{
  res.JSON.parse(localStorage.getItem('todos'));
};

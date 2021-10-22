const express = require('express');
const { Todo } = require('../mongo')
const redis = require('../redis')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

// GET by id
router.get('/:id', async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  res.send(todo)
})

/* POST todo to listing. */

router.post('/', async (req, res) => {
  const todosFound = await redis.getAsync('todos_found') || 0
  redis.setAsync('todos_found', parseInt(todosFound)+1)

  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  res.send(todo);
});

// PUT update a todo
router.put('/:id', async (req, res) => {
  const newTodo = {}
  if (req.body.text) newTodo.text = req.body.text
  if (req.body.done) newTodo.done = req.body.done
  console.log(newTodo)
  const todo = await Todo.findByIdAndUpdate(req.params.id, newTodo)
  res.send(todo);
})

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  res.sendStatus(405); // Implement this
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;

import { Router } from 'express'
import Task from '../models/Task'

const router = Router()

router.get('/', async (req, res) => {
    const tasks = await Task.find().lean()
    res.render('index', { tasks })
})

router.get('/about', (req, res) => {
    res.render('about')
})
router.get('/edit/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean()
        res.render(`edit`, { task })
    } catch (error) {
        console.log(error.message);
    }
})

router.post('/tasks/add', async (req, res) => {
    try {
        const task = Task(req.body)
        await task.save()
        res.redirect('/');
    } catch (error) {
        res.render('<alert>Error!</alert>')
    }

})

router.post('/edit/:id', (req, res) => {
    console.log(req.body);
    res.send('recibido')
})


export default router
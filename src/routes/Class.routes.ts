import { Router } from 'express'
import { getCustomRepository, getRepository } from 'typeorm'
import Class from '../models/Class'
import ClassRepository from '../repositories/ClassRepository'

const classRouter = Router()

classRouter.get('/class', async (req, res) => {
  const indexRepository = getRepository(Class)
  const classes = await indexRepository.find({
    order: {
      created_at: "DESC"
    }
  })

  return res.status(200).json(classes)
})

classRouter.get('/class/:name', async (req, res) => {
  const showRepository = getCustomRepository(ClassRepository)
  const { name } = req.params
  const classe = await showRepository.findByName(name)

  return res.status(200).json(classe)
})

classRouter.post('/class', async (req, res) => {
  try {
    const repo = getRepository(Class)
    const response = await repo.save(req.body)

    return res.status(201).json(response)

  } catch (error) {
    console.log('Error mesage: ', error.message)
  }
})

classRouter.put('/class/:id', async (req, res) => {
  const updateRepository = getRepository(Class)
  const { id } = req.params
  const { name, duration } = req.body
  const classe = await updateRepository.findOne(id)

  if (classe) {
    classe.name = name
    classe.duration = duration

    await updateRepository.save(classe)

    return res.status(201).json(classe)
  }

  return res.status(400).json({ message: 'Não foi atualizado' })

})

classRouter.delete('/class/:id', async (req, res) => {
  const deleteRepository = getCustomRepository(ClassRepository)
  const { id } = req.params
  const classExists = await deleteRepository.findOne(id)

  if (!classExists) {
    return res.status(400).send('Nada encontrado para ser deletado.')
  }

  await deleteRepository.remove(classExists)

  return res.json({
    Status: 'OK',
    Messagem: 'Classe removida com sucesso!'
  })
})

export default classRouter
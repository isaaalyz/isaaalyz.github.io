import router from '@adonisjs/core/services/router'

// Rotas para recursos
router.resource('cursos', '#controllers/cursos_controller')
router.resource('disciplinas', '#controllers/disciplinas_controller')
router.resource('alunos', '#controllers/alunos_controller')

// Matrículas
router.get('matriculas', '#controllers/matriculas_controller.index')
router.post('matriculas', '#controllers/matriculas_controller.store')
router.delete('matriculas/:alunoId/:disciplinaId', '#controllers/matriculas_controller.destroy')

// Rota raiz simples
router.get('/', async () => {
  return {
    hello: 'world',
  }
})

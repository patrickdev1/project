import { app } from './app'

const porta = process.env.PORT || 3001

const server = app.listen(
    porta,
    () => {
        console.log(`App ouvindo na porta ${porta}`)
    }
)

process.on('SIGNIT', () => {
    server.close()
    console.log('App finalizado')
})
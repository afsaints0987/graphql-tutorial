import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import resolvers from './resolvers'

const port = 5000 
const app = express()

app.get('/', (req, res) => {
    res.send('Server is running')
})

const root = resolvers;

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
}))


app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`)
})
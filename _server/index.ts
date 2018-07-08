import express from "express"
import { Response, Request } from "express"

const server = express()

server.set('port', 6789)

server.get('/', (req: Request, res: Response) => {
    res.send('Test Page Online')
})

server.listen(server.get('port'), () => {
    console.log(`Server is running at http://localhost:${server.get('port')} in ${server.get('env')} mode`)
})
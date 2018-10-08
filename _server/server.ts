import express from "express"
import hello from "./api/hello-world";

export async function bootstrap () {
    const server = express()

    server.set('port', 6789)

    server.get('/hello',  hello);

    server.listen(server.get('port'), () => {
        console.log(`Server is running at http://localhost:${server.get('port')} in ${server.get('env')} mode`)
    })
}
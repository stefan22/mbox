import prisma from "../../lib/db"
import { validateRoute } from "../../lib/auth/validateRoute"

export default validateRoute(async (req, res, user) => {
    const playlist = await prisma.playlist.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            name: "asc",
        },
    })

    const songs = await prisma.song.findMany({})

    res.json({
        ...user,
        playlist,
        songs,
    })
})

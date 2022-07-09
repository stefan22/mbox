import { validateRoute } from "../../lib/auth/userAuth"
import prisma from "../../lib/db"

export default validateRoute(async (req, res, user) => {
    const playlistsCount = await prisma.playlist.count({
        where: {
            userId: user.id,
        },
    })

    res.json({ user, playlistsCount })
})

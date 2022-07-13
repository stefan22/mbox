import prisma from "../../lib/db"
import { validateRoute } from "../../lib/auth/validateRoute"

/*
 * @fn validateUserRoute
 * @desc Validates a user route
 * @param {Object} - request object
 * @param {function} - callback function called with user object
 * @returns user playlist object when token id matches user id in database
 */

export default validateRoute(async (req, res, user) => {
    const playlist = await prisma.playlist.findMany({
        where: {
            userId: user.id,
        },
        orderBy: {
            name: "asc",
        },
    })
    const artists = await prisma.artist.findMany({})
    res.json({
        ...user,
        playlist,
        artists,
    })
})

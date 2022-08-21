import bcrypt from "bcrypt"
import prisma from "../lib/db"
import { artistsData } from "./songsData"

const run = async () => {
    await Promise.all(
        artistsData.map(async artist => {
            return prisma.artist.upsert({
                where: { name: artist.name },
                update: {},
                create: {
                    name: artist.name,
                    songs: {
                        create: artist.songs.map(song => ({
                            name: song.name,
                            duration: song.duration,
                            url: song.url
                        }))
                    }
                }
            })
        })
    )

    const salt = bcrypt.genSaltSync()
    const user = await prisma.user.upsert({
        where: { email: "admino22@admino.com" },
        update: {},
        create: {
            email: "admino22@admino.com",
            password: bcrypt.hashSync("password", salt),
            firstName: "Admino22",
            lastName: "Admino"
        }
    })

    const songs = await prisma.song.findMany({})
    await Promise.all(
        new Array(3).fill(1).map(async (_, i) => {
            return prisma.playlist.create({
                data: {
                    //  playlist name#1 and id#1... name#3 and id#3  for seed data
                    // eslint-disable-next-line no-nested-ternary
                    name: `Playlist #${i === 0 ? "3" : i === 1 ? "2" : "1"}`,
                    user: {
                        connect: { id: user.id }
                    },
                    songs: {
                        connect: songs.map(song => ({
                            id: song.id
                        }))
                    }
                }
            })
        })
    )
}

run()
    .catch(e => {
        // eslint-disable-next-line no-console
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })

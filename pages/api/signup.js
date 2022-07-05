import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import cookie from 'cookie'
import prisma from '../../lib/db'

const Signup = async (req, res) => {
   const { email, password } = req.body
   const salt = bcrypt.genSaltSync()

   const result = await prisma.user.create({
      data: {
         ...req.body,
         email,
         password: bcrypt.hashSync(password, salt),
      },
   })

   try {
      const token = jwt.sign(
         {
            email,
            id: result.id,
            time: Date.now(),
         },
         'SECRET',
         { expiresIn: '8h' }
      )

      res.setHeader(
         'Set-Cookie',
         cookie.serialize('MBOX_ACCESS_TOKEN', token, {
            httpOnly: true,
            maxAge: 8 * 60 * 60,
            path: '/',
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
         })
      )
   } catch (err) {
      res.status(401)
      res.json({ error: err })
   }

   res.status(200)
   return res.json(result)
}

export default Signup

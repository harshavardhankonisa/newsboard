import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import users from '@/data/users.json'

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      role?: string
    }
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Find the users details in database here.
        const user = users.find(u => u.email === credentials?.email && u.password === credentials?.password)
        if (user) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        }
        return null
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      console.log(token)
      const user = users.find(u => u.email === session.user?.email)
      if (user) {
        session.user!.role = user.role
      }
      return session
    }
  },
  pages: {
    signIn: '/login'
  },
  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }

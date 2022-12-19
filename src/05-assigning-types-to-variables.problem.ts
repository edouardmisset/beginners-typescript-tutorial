import { expect, it } from 'vitest'

interface User {
  id: number
  firstName: string
  lastName: string
  isAdmin: boolean
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  firstName: 'Bat',
  id: 1,
  isAdmin: true,
  lastName: 'Man',
}

const getUserId = (user: User) => user.id

it('Should get the user id', () => {
  expect(getUserId(defaultUser)).toEqual(1)
})

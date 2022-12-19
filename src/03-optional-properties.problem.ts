import { expect, it } from 'vitest'

export const getName = (params: { first: string; last?: string }) =>
  params.last ? `${params.first} ${params.last}` : params.first

it('Should work with just the first name', () => {
  const name = getName({
    first: 'Matt',
  })

  expect(name).toEqual('Matt')
})

it('Should work with the first and last name', () => {
  const name = getName({
    first: 'Matt',
    last: 'Pocock',
  })

  expect(name).toEqual('Matt Pocock')
})

import { Category } from "./category"

describe('Category unit tests', () => {
  // forma de teste utilizando a técnica do triple A - Arrange / Act / Assert
  it('Should test the constructor of category', () => {
    //arrange
    const create_at = new Date()
    // act
    const category = new Category({
      name: 'Movie',
      description: 'any description',
      is_active: true,
      create_at,
    })
    // assert
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'any description',
      is_active: true,
      create_at,
    })
  })
})

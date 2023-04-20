import { omit } from "lodash"
import { Category } from "./category"

describe('Category unit tests', () => {
  // forma de teste utilizando a técnica do triple A - Arrange / Act / Assert
  it('Should test the constructor of category', () => {
    //arrange
    const created_at = new Date()
    // act
    const category = new Category({
      name: 'Movie',
      description: 'any description',
      is_active: true,
      created_at,
    })
    // assert
    expect(category.props).toStrictEqual({
      name: 'Movie',
      description: 'any description',
      is_active: true,
      created_at,
    })
  })

  it('Should test the creation of category by name', () => {
    const category = new Category({ name: 'Movies' })

    let props = omit(category.props, 'created_at')
    expect(props).toStrictEqual({
      name: 'Movies',
      description: null,
      is_active: true,
    })
  })
})

//expect(category.props.created_at).toBeInstanceOf(Date)

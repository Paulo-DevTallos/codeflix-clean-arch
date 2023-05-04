import { omit } from "lodash";
import { Category, CategoryProps } from "./category";
import { validate as uuidValidate } from 'uuid';

describe('Category unit tests for optional properties', () => {
  // forma de teste utilizando a técnica do triple A - Arrange / Act / Assert
  it('Should test the constructor of category', () => {
    const created_at = new Date()

    const category = new Category({
      name: 'Movie',
      description: 'any description',
      is_active: true,
      created_at,
    })

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

  it('Should test the date of creation', () => {
    const category = new Category({ name: 'Movies' })

    expect(category.props.created_at).toBeInstanceOf(Date)
  })

  it('Should test the rest of inner data at constructor', () => {
    let created_at = new Date();
    const category = new Category({
      name: 'Series',
      description: 'any description',
      is_active: false,
    })

    expect(category.props).toStrictEqual({
      name: 'Series',
      description: 'any description',
      is_active: false,
      created_at,
    })
  })

  it('Should test the creation of category by name and description', () => {
    const category = new Category({ name: 'Series', description: 'any description' })

    expect(category.props).toMatchObject({
      name: 'Series',
      description: 'any description'
    })
  })

  it('Should test the creation of category by name and is_active', () => {
    const category = new Category({ name: 'Series', is_active: true })

    expect(category.props).toMatchObject({
      name: 'Series',
      is_active: true
    })
  })

  it('Should test the creation of category by name and created_at', () => {
    const category = new Category({ name: 'Series' })

    let created_at = new Date()
    expect(category.props).toMatchObject({
      name: 'Series',
      created_at,
    })
  })

})

// another way to test id declarations
describe('tests for id field', () => {
  type CategoryData = { props: CategoryProps, id?: string };
  const data: CategoryData[] = [
    { props: { name: 'Movies' } },
    { props: { name: 'Movies' }, id: null },
    { props: { name: 'Movies' }, id: undefined },
    { props: { name: 'Movies' }, id: 'd8b4cde9-12a9-4981-9714-3c8a7639e332' }
  ]

  it('Should test all id conditions', () => {
    data.forEach(item => {
      const category = new Category(item.props, item.id);
      expect(category.id).not.toBeNull();
      expect(uuidValidate(category.id)).toBeTruthy();
    })
  })
})

describe('Category test unit for getters and setters', () => {
  it('Should test getter of name field', () => {
    const category = new Category({ name: 'Documentary' })

    expect(category.name).toBe('Documentary')
  })

  it('Should test getter and of description props types', () => {
    const category = new Category({ name: 'Documentary', description: 'any description' })

    expect(typeof category.description).toBe('string')
  })

  it('Should test getter of description props', () => {
    const category = new Category({ name: 'Documentary' })

    expect(category.description).toBeNull()
  })

  it('Should test setter of description props', () => {
    const category = new Category({ name: 'Documentary' })
    category['description'] = 'other description'

    expect(category.description).toBe('other description')
  })

  it('Should test null coalescing of description props', () => {
    const category = new Category({ name: 'Documentary' })
    category['description'] = undefined

    expect(category.description).toBeNull()
  })

  it('Should test setter of is_active props truthy', () => {
    const category = new Category({ name: 'Movies', is_active: null || true})

    expect(category.is_active).toBeTruthy()
  })

  it('Should test setter of is_active props falsy', () => {
    const category = new Category({ name: 'Movies', is_active: false })

    expect(category.is_active).toBeFalsy()
  })

  it('Should test getter of created_at prop', () => {
    const category = new Category({ name: 'Movies' })

    expect(category.created_at).toBeInstanceOf(Date)
  })

  it('Should test getter of created_at prop', () => {
    let created_at = new Date()
    const category = new Category({ name: 'Movies', created_at })

    expect(category.created_at).toBe(created_at)
  })
})

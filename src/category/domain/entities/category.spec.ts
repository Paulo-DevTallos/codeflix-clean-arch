import { Category } from "./category"

describe('Category unit tests', () => {
    it('Should test the constructor of category', () => {
        const category = new Category('Movie')

        expect(typeof category.name).toBe('string')
    })
})
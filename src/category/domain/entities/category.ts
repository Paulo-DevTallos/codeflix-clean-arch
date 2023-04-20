// criando uma entity
export type CategoryProps = {
  name: string,
  description?: string,
  is_active?: boolean,
  create_at?: Date
}

export class Category {
  constructor(public readonly props: CategoryProps) {}

  get name():string {
    return this.props.name
  }

  get description(): string | undefined {
    return this.props.description
  }

  get is_active() {
    return this.props.is_active
  }

  get created_at() {
    return this.props.create_at
  }
}

const category = new Category({ name: 'Movie' })

// create

import { Category } from './category';

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {
        id: 1,
        name: 'Adventure',
      },
      {
        id: 2,
        name: 'Romantic',
      },
      {
        id: 3,
        name: 'Dram',
      },
      {
        id: 4,
        name: 'Sci-Fi',
      },
    ];
  }

  getCategories(){
      return this.categories;
  }

  getCategoryById(id: number): Category | undefined{
      return this.categories.find((c) => c.id == id);
  }
}

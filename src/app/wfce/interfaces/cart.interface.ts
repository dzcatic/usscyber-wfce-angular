export interface Cart  {
    id: number | null,
    status: string | null,
    numberOfItems: number,
    totalPrice: number,
    items: Array<Item>,
    message: string,
    laravel_session?: string
  }

export interface Item {
    id: number | null,
    price: number,
    amount: number,
    teamId: number
}
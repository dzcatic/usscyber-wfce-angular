export interface ServerResponse  {
  errors: Array<any>,
  isError: boolean,
  payload: Array<any> | Object,
  status: number
}

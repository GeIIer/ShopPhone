import { Order } from "@core/models/order";

export enum ColumnType{
  Cart = "Cart",
  Products = "Products",
}

export interface IGridColumn{
  columnName: string;
  columnField: any;
  type?: ColumnType;
}

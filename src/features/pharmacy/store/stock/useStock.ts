import {create} from "zustand";
import  type {StockState } from "./stock.slice";
import { createStockSlice } from "./stock.slice";

const useStock = create<StockState>()((...a)=> ({
     ...createStockSlice(...a),
}))

export default useStock;
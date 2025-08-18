import type { CategoryState } from './category.slice';
;
import {create} from "zustand";

import { createCategorySlice } from "./category.slice";

const useCategory = create<CategoryState>()((...a)=> ({
     ...createCategorySlice(...a),
}))

export default useCategory;
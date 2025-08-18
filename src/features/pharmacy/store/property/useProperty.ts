import type { PropertyState } from './property.slice';
import {create} from "zustand";

import { createPropertySlice } from "./property.slice";

const useProperty = create<PropertyState>()((...a)=> ({
     ...createPropertySlice(...a),
}))

export default useProperty;
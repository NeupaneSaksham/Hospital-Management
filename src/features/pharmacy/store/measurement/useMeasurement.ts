import {  createMeasurementSlice } from './measurement.slice';
import type { MeasurementState,  } from './measurement.slice';
import {create} from "zustand";


const useMeasurement = create<MeasurementState>()((...a)=> ({
     ...createMeasurementSlice(...a),
}))

export default useMeasurement;
// minor logic update 6080

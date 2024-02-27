import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCategories:{
        "Computer & Laptops": [
          "Laptops",
          "Desktop Computers",
          "Computer Accessories",
        ],
        "Mobile & Accessories": ["Smartphones", "Mobile Accessories"],
        "Audio & Headphones": ["Headphones", "Speaker", "Audio Accessories"],
        "Camera & Photography": ["Digital Cameras", "Camera Accessories"],
        "Home Appliances": ["Smart Home Devices", "Kitchen Appliances"],
        "Tv and Home Entertainment": ["Television", "Home Theatre Systems"],
        "Wearables & Smart Devices": [
          "Smartwatches",
          "Fitness Tracker",
        ],
        Gaming: ["Gaming Consoles", "Video Games", "Gaming Accessories"],
      }
}


export const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        setCategory:(state,action)=>{
            state.productCategories = action.payload
        }

    }
})

export const {setCategory} = categorySlice.actions

export default categorySlice.reducer
import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     products: [
//         {
//           _id: "s6gd4sdfhsdhsdhsdfewyh",
//           title:
//             "KENT Triply Pressure Cooker with SS Lid 3 L Induction Bottom Pressure Cooker  (Triply)",
//           price: "Rs 1359",
//           category:"Home Appliances",
//           subcategory:"Smart Home Devices",
//           productImages: [
//             "https://rukminim2.flixcart.com/image/416/416/xif0q/pressure-cooker/9/m/h/yes-1-118048-kent-original-imague8z4s7xckwh.jpeg?q=70&crop=false",
//             "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/f/r/2/power-zunvolt-original-imagvhd2qphchcum.jpeg?q=70&crop=false",
//           ],
//           ratings: 4.3,
//         },
//         {
//           _id: "a6dfhg76ad4thgabjjj38597s8er8hdfh",
//           title:
//             "KENT Ace Extra/ Ace Alkaline 8 L RO + UV + UF + TDS Control + Alkaline + UV in Tank Water Purifier 4 year Free Service  (White)",
//           price: "₹11,999",
//           category:"Home Appliances",
//           subcategory:"Smart Home Devices",
//           productImages: [
//             "https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/0/h/d/-original-imagufpxqruhytmh.jpeg?q=70&crop=false",
//             "https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/water-purifier/a/t/q/kent-ace-extra-original-imafvtvgs7zkpzgr.jpeg?q=70&crop=false",
//           ],
//           ratings: 4.4,
//         },
//         {
//           _id: "35fdgh87sdhasdSAEQWEsgfdh",
//           title:
//             "NIRLON Mini (Tawa, Fry Pan, Kadhai), Red Non-Stick Coated Cookware Set  (PTFE (Non-stick), Aluminium, 3 - Piece)",
//           price: "₹659",
//           category:"Home Appliances",
//           subcategory:"Smart Home Devices",
//           productImages: [
//             "https://rukminim2.flixcart.com/image/416/416/kmjhw280/cookware-set/1/d/r/non-stick-aluminium-mini-cookware-set-tawa-fry-pan-kadhai-red-original-imagfezg4umze78f.jpeg?q=70&crop=false",
//             "https://rukminim2.flixcart.com/image/416/416/khz693k0-0/cookware-set/w/3/h/ft10-fp10-kd10-ac-nirlon-original-imafxv63pyx8wdmp.jpeg?q=70&crop=false",
//           ],
//           ratings: 4.1,
//         },
//         {
//           _id: "35fdgh87sdhasdhdafHFHdfhhdhtre7",
//           title:
//             "PROTIUM WiFi RGBW (5 pin Type) LED Strip Controller, Control Your RGBW LED Strip via Alexa (Home Automation IOT Device)  (White)",
//           price: "₹1,415",
//           category:"Home Appliances",
//           subcategory:"Smart Home Devices",
//           productImages: [
//             "https://rukminim2.flixcart.com/image/416/416/klgx0280/smart-switch/y/c/q/wifi-rgbw-5-pin-type-led-strip-controller-control-your-rgbw-led-original-imagyhh2c9gsxbqw.jpeg?q=70&crop=false",
//             "https://rukminim2.flixcart.com/image/416/416/klgx0280/smart-switch/a/e/x/wifi-rgbw-5-pin-type-led-strip-controller-control-your-rgbw-led-original-imagyhh2pc7qdm3y.jpeg?q=70&crop=false",
//           ],
//           ratings: 4.1,
//         },
//         {
//             _id: "sf358hg34sdavarwq",
//             title:
//               "HP Pavilion (2023) Eyesafe AMD Ryzen 5 Hexa Core 5625U - (16 GB/512 GB SSD/Windows 11 Home) 14-EC1019AU Thin and Light Laptop  (14 inch, Natural Silver, 1.41 kg, With MS Office)",
//             price: "₹54,990",
//             category:"Home Appliances",
//           subcategory:"Kitchen Appliances",
//             productImages: [
//               "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/h/u/c/-original-imagxfs93hqxbehu.jpeg?q=70&crop=false",
//               "https://rukminim2.flixcart.com/image/416/416/l2ghgnk0/computer/t/8/u/14-ec1008au-thin-and-light-laptop-hp-original-imagdsx9wk6ftfxa.jpeg?q=70&crop=false",
//             ],
//             ratings: 4.4,
//           },
//           {
//             _id: "j63h4s685hsdfhdf4326bsdh",
//             title:
//               "APPLE 2020 Macbook Air Apple M1 - (8 GB/256 GB SSD/Mac OS Big Sur) MGN63HN/A  (13.3 inch, Space Grey, 1.29 kg)",
//             price: "₹70,990",
//             category:"Home Appliances",
//           subcategory:"Kitchen Appliances",
//             productImages: [
//               "https://rukminim2.flixcart.com/image/416/416/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=70&crop=false",
//               "https://rukminim2.flixcart.com/image/416/416/kruyw7k0/computer/7/s/m/na-thin-and-light-laptop-apple-original-imag5jt7khzzmh4w.jpeg?q=70&crop=false"
//             ],
//             ratings: 4.7,
//           },
//           {
//             _id: "hsd4hd85h68tsd6favaer624572",
//             title:
//               "ASUS Vivobook 15 Intel Core i3 11th Gen 1115G4 - (8 GB/512 GB SSD/Windows 11 Home) X515EA-EJ322WS | X515EA-EJ328WS | X1500EA-EJ3379WS Thin and Light Laptop  (15.6 Inch, Transparent Silver, 1.80 kg, With MS Office)",
//             price: "₹29,990",
//             subcategory:"Smart Home Devices",
//             productImages: [
//               "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/q/e/z/-original-imagpxgqesgrthks.jpeg?q=70&crop=false",
//               "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/4/3/l/-original-imagdx9qetmzqjz7.jpeg?q=70&crop=false",
//             ],
//             ratings: 4.3,
//           },
//           {
//             _id: "vjdk56r67d8hre4ds4g24358946",
//             title:
//               "MSI Bravo 15 AMD Ryzen 5 Hexa Core 7535HS - (8 GB/512 GB SSD/Windows 11 Home/4 GB Graphics/AMD Radeon RX6550M/144 Hz) Bravo 15 B7ED-012IN Gaming Laptop  (15.6 inch, Black, 2.35 Kg)",
//             price: "₹49,990",
//             subcategory:"Smart Home Devices",
//             productImages: [
//               "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/b/j/7/bravo-15-b5ed-notebook-msi-original-imagz3rya2qqbhjt.jpeg?q=70&crop=false",
//               "https://rukminim2.flixcart.com/image/416/416/xif0q/computer/5/h/l/bravo-15-b5ed-notebook-msi-original-imagz3ryqzvfkhm3.jpeg?q=70&crop=false",
//             ],
//             ratings: 4.5,
//           },
//       ]
// }

const initialState = {
  products:[],
  loading:false,
  errors:null
}

const url = '/api/v1/products'

export const getProductById = createAsyncThunk('getProductById',async(productId,{rejectWithValue})=>{
  try {
    const response = await fetch(`${url}/getProductById/${productId}`)
    const data = await response.json();
    return data
  } catch (error) {
    console.error(error)
  }
})

export const getProductsByCategory = createAsyncThunk('getProductsByCategory',async(category,{rejectWithValue})=>{
  try {
    console.log(category);
    const response = await fetch(`${url}/getProductsByCategory/${category}`)
    return response.json();
  } catch (error) {
    console.error(error)
  }
})

export const productSlice = createSlice({
   name:'product' ,
   initialState,
   
   extraReducers:(builder)=>{
    builder
    .addCase(getProductById.pending,(state)=>{
      state.loading = true
    })
    .addCase(getProductById.fulfilled,(state)=>{
      state.loading = false
    })
    .addCase(getProductById.rejected,(state)=>{
      state.loading = false
    })
    .addCase(getProductsByCategory.pending,(state)=>{
      state.loading = true
    })
    .addCase(getProductsByCategory.fulfilled,(state,action)=>{
      state.loading = false
      state.products = action.payload.data
    })
    .addCase(getProductsByCategory.rejected,(state)=>{
      state.loading = false
    })
   }
})

export default productSlice.reducer
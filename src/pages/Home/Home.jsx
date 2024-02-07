import React from "react";
import {
  DisplayProducts,
  ProductCategories,
  SearchBar,
  Slideshow,
} from "../../components";
import { useGetProductsQuery, useGetProductByIdQuery } from "../../features/api/apiSlice";

export default function Home() {

  const {data:products} = useGetProductsQuery({category:'Computer & Laptops',subcategory:'Laptops'})


  const homeAppliancesProducts =  [
    {
      _id: "s6gd4sdfhsdhsdhsdfewyh",
      title:
        "KENT Triply Pressure Cooker with SS Lid 3 L Induction Bottom Pressure Cooker  (Triply)",
      price: "Rs 1359",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/pressure-cooker/9/m/h/yes-1-118048-kent-original-imague8z4s7xckwh.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mixer-grinder-juicer/f/r/2/power-zunvolt-original-imagvhd2qphchcum.jpeg?q=70&crop=false",
      ],
      ratings: 4.3,
    },
    {
      _id: "a6dfhg76ad4thgabjjj38597s8er8hdfh",
      title:
        "KENT Ace Extra/ Ace Alkaline 8 L RO + UV + UF + TDS Control + Alkaline + UV in Tank Water Purifier 4 year Free Service  (White)",
      price: "₹11,999",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/water-purifier/0/h/d/-original-imagufpxqruhytmh.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/kfcv6vk0/water-purifier/a/t/q/kent-ace-extra-original-imafvtvgs7zkpzgr.jpeg?q=70&crop=false",
      ],
      ratings: 4.4,
    },
    {
      _id: "35fdgh87sdhasdSAEQWEsgfdh",
      title:
        "NIRLON Mini (Tawa, Fry Pan, Kadhai), Red Non-Stick Coated Cookware Set  (PTFE (Non-stick), Aluminium, 3 - Piece)",
      price: "₹659",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/kmjhw280/cookware-set/1/d/r/non-stick-aluminium-mini-cookware-set-tawa-fry-pan-kadhai-red-original-imagfezg4umze78f.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/khz693k0-0/cookware-set/w/3/h/ft10-fp10-kd10-ac-nirlon-original-imafxv63pyx8wdmp.jpeg?q=70&crop=false",
      ],
      ratings: 4.1,
    },
    {
      _id: "35fdgh87sdhasdhdafHFHdfhhdhtre7",
      title:
        "PROTIUM WiFi RGBW (5 pin Type) LED Strip Controller, Control Your RGBW LED Strip via Alexa (Home Automation IOT Device)  (White)",
      price: "₹1,415",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/klgx0280/smart-switch/y/c/q/wifi-rgbw-5-pin-type-led-strip-controller-control-your-rgbw-led-original-imagyhh2c9gsxbqw.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/klgx0280/smart-switch/a/e/x/wifi-rgbw-5-pin-type-led-strip-controller-control-your-rgbw-led-original-imagyhh2pc7qdm3y.jpeg?q=70&crop=false",
      ],
      ratings: 4.1,
    },
  ];

  const trendingLaptops = products?.filter((product)=> product.subcategory === 'Laptops').slice(0,4)


  const smartPhones = [
    {
      _id: "sf358hg34dfhjbfyrtr",
      title:
        "SAMSUNG Galaxy F13 (Waterfall Blue, 64 GB)  (4 GB RAM)",
      price: "₹7,499",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/q/l/l/-original-imagueeyshyqzbfh.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/v/2/7/-original-imagueeyfxnfh9es.jpeg?q=70&crop=false",
      ],
      ratings: 4.3,
    },
    {
      _id: "a6dfhg76ad4thdhs",
      title:
        "APPLE iPhone 14 (Midnight, 128 GB)",
      price: "₹58,999",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/9/e/e/-original-imaghx9q5rvcdghy.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/g/f/y/-original-imaghxcpwzegadzn.jpeg?q=70&crop=false"
      ],
      ratings: 4.6,
    },
    {
      _id: "63hs4dfhsdfhhsdfh",
      title:
        "APPLE iPhone 15 (Black, 128 GB)",
      price: "659",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/i/h/z/-original-imagtc5fbxefnjtj.jpeg?q=70&crop=false",
      ],
      ratings: 4.6,
    },
    {
      _id: "hsd8h5j465fd864d8fh4df8h",
      title:
        "vivo T2x 5G (Glimmer Black, 128 GB)  (4 GB RAM)",
      price: "₹11,999",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/4/h/e/-original-imagzjhwmsamexfk.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/p/q/l/-original-imagzjhwdvkpjuwa.jpeg?q=70&crop=false",
      ],
      ratings: 4.4,
    },
  ]

  const smartLeds = [
    {
      _id: "hn4fd36t8hjf8jfj634646346fj",
      title:
        "SONY 138.8 cm (55 inch) Ultra HD (4K) LED Smart Google TV 2022 Edition  (KD-55X74K)",
      price: "₹52,490",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/6/g/p/-original-imagvgcjagmhmxfz.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/c/i/r/-original-imagm2e6nhdhjps8.jpeg?q=70&crop=false",
      ],
      ratings: 4.6,
    },
    {
      _id: "a6dfhg76ad4thdhsga6sr5",
      title:
        "SAMSUNG 80 cm (32 Inch) HD Ready LED Smart Tizen TV 2022 Edition with Bezel-free Design  (UA32T4380AKXXL)",
      price: "₹12,990",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/x/8/a/-original-imagttjpuyzsbzud.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/6/a/a/-original-imagkzct5cupcaw6.jpeg?q=70&crop=false"
      ],
      ratings: 4.3,
    },
    {
      _id: "63hs4dfhsd5sdfhhhsdfh",
      title:
        "iFFALCON by TCL U62 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV with Dolby Audio, HDR10  (iFF43U62)",
      price: "₹17,999",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/i/g/j/-original-imagnvxzdjhrxzde.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/g/l/a/-original-imaghepn9yhyzqgg.jpeg?q=70&crop=false",
      ],
      ratings: 4.2,
    },
    {
      _id: "hsd8h5hda5f87hy6a4d8fhf4df8h",
      title:
        "TOSHIBA C350MP 108 cm (43 inch) Ultra HD (4K) LED Smart Google TV 2023 Edition with Dolby Vision Atmos and REGZA Engine  (43C350MP)",
      price: "₹23,999",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/v/2/c/-original-imagrh9mg4fxvrtg.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/television/7/i/f/-original-imagu6pmbv9zvnzu.jpeg?q=70&crop=false",
      ],
      ratings: 4.4,
    },
  ]

  const smartWatches = [
    {
      _id: "hmvds9r6nm40930uga8s0rdg46346fj",
      title:
        "Noise Colorfit Icon 2 1.8'' Display with Bluetooth Calling, AI Voice Assistant Smartwatch  (Black Strap, Regular)",
      price: "₹1,099",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/l5ld8y80/smartwatch/r/q/t/-original-imagg8dksgct9hxg.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/l5ld8y80/smartwatch/z/h/m/-original-imagg8dkq3fshkwh.jpeg?q=70&crop=false",
      ],
      ratings: 4.1,
    },
    {
      _id: "a6dfh468m46fggzzaJnjfsfgsKOsr5",
      title:
        "Fire-Boltt Hurricane 1.3 inches Curved Glass Display with 360 Health Training, 100+ Sports Modes Smartwatch  (Grey Strap, Free Size)",
      price: "₹1,099",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/h/m/e/-original-imagkfm8fgvwjy8y.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/5/n/k/-original-imagkfm8xgcu53v2.jpeg?q=70&crop=false"
      ],
      ratings: 4.1,
    },
    {
      _id: "63h4g6sdewtf4yfh",
      title:
        "Fastrack Revoltt FS1 Pro|World's First,1.96 inches Super AMOLED|Highest Resolution|BT Calling Smartwatch  (Black Strap, Free Size)",
      price: "₹2,499",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/i/2/2/-original-imagzvhswuuzay6x.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/x/a/3/-original-imagzzuk8fzxvghn.jpeg?q=70&crop=false",
      ],
      ratings: 4.3,
    },
    {
      _id: "hsd8h5hda5f87gas47hg585rgs_Sdgsf4df8h",
      title:
        "boAt Wave Flex Connect with 1.83 inches HD Display,Bluetooth Calling & Premium Metal Design Smartwatch  (Active Black Strap, Free Size)",
      price: "₹1,099",
      productImages: [
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/z/c/s/-original-imagp7vv3gwtnzhr.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/y/o/p/-original-imagn53zkm5xzfmy.jpeg?q=70&crop=false",
      ],
      ratings: 4.1,
    },
  ]

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div>
          

          {/* slideshow Component*/}
          <div>
            <div className="my-10">
              <Slideshow />
            </div>
          </div>

          <div className="my-5">
            {/* search bar */}
            <SearchBar/>
          </div>

          {/* ProductCategories Component */}
          <div className="my-10">
            <ProductCategories />
          </div>

           {/* Home Appliances */}
           <div className="my-10">
            <DisplayProducts category={'Home Appliances'} products={homeAppliancesProducts} />
          </div>


           {/* Trending Laptops */}
           <div className="my-10">
            <DisplayProducts category={'Trending Laptops'} products={trendingLaptops} />
          </div>


         {/* Mobile and Accessories */}
         <div className="my-10">
            <DisplayProducts category={'Mobile and Accessories'} products={smartPhones} />
          </div>

         {/* Television and Home Entertainment */}
         <div className="my-10">
            <DisplayProducts category={'Television and Home Entertainment'} products={smartLeds} />
          </div>


         {/* Smart Watches */}
         <div className="my-10">
            <DisplayProducts category={'Smart Watches'} products={smartWatches} />
          </div>

        </div>
      </div>
    </div>
  );
}

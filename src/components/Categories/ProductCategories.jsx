import React from 'react'
import { useNavigate } from 'react-router-dom'

function ProductCategories() {
  const navigate = useNavigate()
  const categories = [
    {
      img:'https://img.freepik.com/free-vector/realistic-household-kitchen-appliances-set_1284-26013.jpg?w=740&t=st=1705413604~exp=1705414204~hmac=45573d6bcec94de1445f17c986c3713fa7da0beb93f5430f86869fd81bcee85b',
      title:'Home Appliances'
    },
    {
      img:'https://img.freepik.com/free-vector/collection-virtual-reality-equipment_23-2148778393.jpg?w=740&t=st=1705412981~exp=1705413581~hmac=181994beb94af166e225580328d4ca00eb74af3f2a251d3132f68d38a43df8a9',
      title:'Gaming'
    },
    {
      img:'https://img.freepik.com/free-vector/wireless-headphones-realistic-composition_1284-71370.jpg?w=1060&t=st=1705413184~exp=1705413784~hmac=a7625f839c0a3da32b69709d7f48b880e88e665c97187e8a07cd04ee9c06d052',
      title:'Audio & Headphones'
    },
    {
      img:'https://img.freepik.com/free-photo/computer-laptop-desk_23-2147785084.jpg?w=1060&t=st=1705413402~exp=1705414002~hmac=c4b9d0069ec7110d547fbe4e013102f1a375b19bc4d5a76b2c0ee0273175b337',
      title:'Computer & Laptops'
    },
    {
      img:'https://img.freepik.com/premium-photo/modern-smartphone-with-3-cameras-with-metal-body-smartphone-components-red-background-top-view-copy-space-charger-tips-etc-accessories-hd-camera-100x_531397-520.jpg?size=626&ext=jpg&ga=GA1.1.1631100672.1694082200&semt=ais',
      title:'Mobile & Accessories'
    },
    {
      img:'https://img.freepik.com/free-vector/realistic-camera-icons_1284-13125.jpg?w=740&t=st=1705413909~exp=1705414509~hmac=d97a678a88e7beacf0bd3f40fa72fbb279872df186beeafedc263df312bcbd44',
      title:'Camera & Photography'
    },
    {
      img:'https://img.freepik.com/free-vector/home-theater-realistic-interior-template_1284-14928.jpg?size=626&ext=jpg&ga=GA1.1.1631100672.1694082200&semt=ais',
      title:'Tv and Home Entertainment'
    },
    {
      img:'https://img.freepik.com/free-vector/wearable-technology-electronic-products-flat-circle-icons-composition-poster-with-wristwatch_1284-10031.jpg?w=740&t=st=1705414295~exp=1705414895~hmac=ab55809e5f854508d790b8fed32f43fc0a001c936a97cf7dcadac7bfadf3a8c2',
      title:'Wearables & Smart Devices'
    }
  ]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 bg-white">
    {/* category-1 */}
   {
    categories?.map((category)=>(
      <div className="flex flex-col items-center border-2 m-2 cursor-pointer" key={category?.title} onClick={()=>{navigate(`/categories/${category.title}`)}}>
      <div className='h-80'>
        <img
          src={category?.img}
          alt=""
          className='w-full object-cover'
        />
      </div>
      <div className="text-center">
        <p className="font-bold">{category?.title}</p>
        <p>10 products</p>
      </div>
    </div>
    ))
   }
  </div>
  )
}

export default ProductCategories

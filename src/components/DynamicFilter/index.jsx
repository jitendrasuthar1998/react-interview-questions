import { useEffect, useState } from "react";

// Example dataset
const data = [
  { name: "T-shirt", color: "red", category: "clothing", type: "casual" },
  {
    name: "Formal Shirt",
    color: "white",
    category: "clothing",
    type: "formal",
  },
  { name: "Laptop", color: "gray", category: "electronics", type: "gadgets" },
  { name: "Shoes", color: "black", category: "footwear", type: "casual" },
];

const smartphones = [
  {
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    price: 1099,
    image: "https://example.com/iphone15promax.jpg",
    description: "The ultimate smartphone experience.",
    storage: "256GB",
    color: "Space Black",
    processor: "A17 Bionic",
    type: "Smartphone",
  },
  {
    name: "Samsung Galaxy S23 Ultra",
    brand: "Samsung",
    price: 999,
    image: "https://example.com/galaxys23ultra.jpg",
    description: "A powerful phone with an incredible camera.",
    storage: "512GB",
    color: "Phantom Black",
    processor: "Snapdragon 8 Gen 2",
    type: "Smartphone",
  },
  {
    name: "Google Pixel 7 Pro",
    brand: "Google",
    price: 899,
    image: "https://example.com/pixel7pro.jpg",
    description: "Cutting-edge AI features in a sleek design.",
    storage: "128GB",
    color: "Obsidian",
    processor: "Google Tensor 2",
    type: "Smartphone",
  },
  {
    name: "OnePlus 11 Pro",
    brand: "OnePlus",
    price: 799,
    image: "https://example.com/oneplus11pro.jpg",
    description: "Super fast charging and smooth performance.",
    storage: "256GB",
    color: "Emerald Green",
    processor: "Snapdragon 8 Gen 2 Plus",
    type: "Smartphone",
  },
  {
    name: "Xiaomi 12S Ultra",
    brand: "Xiaomi",
    price: 949,
    image: "https://example.com/xiaomi12sultra.jpg",
    description: "Exceptional camera system with a large sensor.",
    storage: "512GB",
    color: "Gray",
    processor: "Snapdragon 8+ Gen 1",
    type: "Smartphone",
  },
];

/*
{
    name: "MacBook Pro 14",
    brand: "Apple",
    price: 1999,
    image: "https://example.com/macbookpro14.jpg",
    description: "Powerful performance for professionals.",
    processor: "M2 Pro",
    memory: "16GB",
    storage: "512GB",
    type: "Laptop"
  },
  {
    name: "Sony PlayStation 5",
    brand: "Sony",
    price: 499,
    image: "https://example.com/ps5.jpg",
    description: "Next-gen gaming console.",
    storage: "825GB SSD",
    color: "White",
    type: "Gaming Console"
  },
  {
    name: "Samsung Smart TV 55 inch",
    brand: "Samsung",
    price: 699,
    image: "https://example.com/samsungtv.jpg",
    description: "4K UHD Smart TV.",
    size: "55 inch",
    resolution: "4K",
    type: "Television"
  }
*/

const clothing = [
  {
    name: "Nike Air Max 90",
    brand: "Nike",
    price: 120,
    image: "https://example.com/airmax90.jpg",
    description: "Classic sneakers for everyday wear.",
    color: "Black",
    size: "10",
    type: "Sneakers",
  },
  {
    name: "Levi's 501 Jeans",
    brand: "Levi's",
    price: 70,
    image: "https://example.com/levis501.jpg",
    description: "The iconic jeans for any occasion.",
    color: "Blue",
    size: "32",
    type: "Jeans",
  },
  {
    name: "Adidas Originals T-Shirt",
    brand: "Adidas",
    price: 25,
    image: "https://example.com/adidastshirt.jpg",
    description: "Classic Adidas t-shirt.",
    color: "White",
    size: "M",
    type: "T-shirt",
  },
  {
    name: "H&M Winter Coat",
    brand: "H&M",
    price: 99,
    image: "https://example.com/hmcoat.jpg",
    description: "Warm winter coat.",
    color: "Black",
    size: "L",
    type: "Coat",
  },
];

const homeAndKitchen = [
  {
    name: "KitchenAid Stand Mixer",
    brand: "KitchenAid",
    price: 299,
    image: "https://example.com/kitchenaidmixer.jpg",
    description: "A powerful mixer for all your baking needs.",
    color: "Red",
    type: "Kitchen Appliance",
  },
  {
    name: "Nest Thermostat",
    brand: "Nest",
    price: 129,
    image: "https://example.com/nestthermostat.jpg",
    description: "Smart thermostat to control your home's temperature.",
    color: "White",
    type: "Smart Home Device",
  },
  {
    name: "Philips Air Fryer",
    brand: "Philips",
    price: 149,
    image: "https://example.com/philipsairfryer.jpg",
    description: "Healthy and delicious frying.",
    capacity: "2L",
    color: "Black",
    type: "Kitchen Appliance",
  },
  {
    name: "Samsung Smart TV 55 inch",
    brand: "Samsung",
    price: 699,
    image: "https://example.com/samsungtv.jpg",
    description: "4K UHD Smart TV.",
    size: "55 inch",
    resolution: "4K",
    type: "Television",
  },
];

// const filters = {
//   "brands":[{title:"Samsung", value:"Samsung", checked: false},{title:"Xiaomi", value:"Xiaomi", checked: false},{title:"OnePlus", value:"OnePlus", checked: false},{title:"Google", value:"Google", checked: false},{title:"Apple", value:"Apple", checked: false} ],

// }

const FilterableProductList = () => {
  // Step 1: Dynamically generate filter options

  const uniqueFields = ["brand", "color", "processor"];

  const [filters, setFilters] = useState({});

  const handleFilterChange = (filterType, filterValue) => {
    console.log("filterType", filterType);
    console.log("filterValue", filterValue);
    const updatedFilters = JSON.parse(JSON.stringify(filters));
    const filterArray = [...updatedFilters[filterType]]; // Create a copy of the array
    const index = filterArray.findIndex((item) => {
      console.log("item value", item.value);
     return item.value ===filterValue;
    });
    filterArray[index].checked = !filterArray[index].checked;
    updatedFilters[filterType] = filterArray;
    console.log(updatedFilters);
    setFilters(updatedFilters);
  };

  useEffect(() => {
    const filters = {};

    uniqueFields.forEach((field) => {
      const uniqueValues = new Set();
      smartphones.forEach((phone) => uniqueValues.add(phone[field]));
      filters[`${field}s`] = Array.from(uniqueValues).map((value) => ({
        title: value,
        value: value,
        checked: false,
      }));
    });
    setFilters(filters);
  }, []);

  // useEffect(()=> {
  //   handleFilterChange("colors",'Gray')
  // },[])

  console.log("filters after useEffect", filters);

  function filterSmartphones(smartphones, filters) {
    // Combine filter conditions for brands, colors, and processors
    const filterFn = (smartphone) => {
      const brandMatch = filters.brands.some(brand => brand.checked && brand.value === smartphone.brand);
      // const colorMatch = filters.colors.some(color => color.checked && color.value === smartphone.color);
      // const processorMatch = filters.processors.some(processor => processor.checked && processor.value === smartphone.processor);
  
      // Smartphone is included if all filters (brand, color, processor) match
      return brandMatch ;
    };
  
    console.log(smartphones.filter(filterFn));
  }
  
  
  
  // This will only contain smartphones that match the selected filters
  /*
  {
    "brands": [
        {
            "title": "Apple",
            "value": "Apple",
            "checked": true
        },
        {
            "title": "Samsung",
            "value": "Samsung",
            "checked": false
        },
        {
            "title": "Google",
            "value": "Google",
            "checked": false
        },
        {
            "title": "OnePlus",
            "value": "OnePlus",
            "checked": false
        },
        {
            "title": "Xiaomi",
            "value": "Xiaomi",
            "checked": false
        }
    ],
    "colors": [
        {
            "title": "Space Black",
            "value": "Space Black",
            "checked": false
        },
        {
            "title": "Phantom Black",
            "value": "Phantom Black",
            "checked": false
        },
        {
            "title": "Obsidian",
            "value": "Obsidian",
            "checked": false
        },
        {
            "title": "Emerald Green",
            "value": "Emerald Green",
            "checked": true
        },
        {
            "title": "Gray",
            "value": "Gray",
            "checked": true
        }
    ],
    "processors": [
        {
            "title": "A17 Bionic",
            "value": "A17 Bionic",
            "checked": false
        },
        {
            "title": "Snapdragon 8 Gen 2",
            "value": "Snapdragon 8 Gen 2",
            "checked": false
        },
        {
            "title": "Google Tensor 2",
            "value": "Google Tensor 2",
            "checked": false
        },
        {
            "title": "Snapdragon 8 Gen 2 Plus",
            "value": "Snapdragon 8 Gen 2 Plus",
            "checked": false
        },
        {
            "title": "Snapdragon 8+ Gen 1",
            "value": "Snapdragon 8+ Gen 1",
            "checked": false
        }
    ]
}
  */

  return (
    <div>
      <h2>Filter Products</h2>

      <button
        onClick={() => {
          handleFilterChange("colors", "Gray");
        
        }}
      >
        Filter products
      </button>

      <button
        onClick={() => {
          
          handleFilterChange("colors", "Emerald Green");
 
        }}
      >
        Filter products
      </button>

      <button
        onClick={() => {
          
          handleFilterChange("brands", "Apple");
        }}
      >
        Filter products
      </button>

      <br/>

      <button onClick={()=> filterSmartphones(smartphones, filters)}>Submit</button>
    </div>
  );
};

export default FilterableProductList;

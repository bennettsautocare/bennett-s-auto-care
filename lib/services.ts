export const SETMORE_URL =
  "https://bennettsautocare.setmore.com/?utm_source=in-app&utm_medium=iosapp&utm_campaign=settsharebp"

export type ServiceCategory = "Cleaning" | "Detailing" | "Steam" | "Diagnostics"

export type Service = {
  category: ServiceCategory
  name: string
  price: string
  duration: string
  description: string
  image: string
}

export const CATEGORIES: ServiceCategory[] = [
  "Cleaning",
  "Detailing",
  "Steam",
  "Diagnostics",
]

export const services: Service[] = [
  // =========================
  // CLEANING
  // =========================
  {
    category: "Cleaning",
    name: "Regular Sedan & Hatchback Cleaning",
    price: "$1,500",
    duration: "45 min",
    description: "Hand wash, vacuum and shine.",
    image: "/SEDAN.jpg",
  },
  {
    category: "Cleaning",
    name: "Regular CRV, RAV4 & Voxy Cleaning",
    price: "$2,000",
    duration: "45 min",
    description: "Regular wash, vacuum and shine for larger vehicles.",
    image: "/CRV-RAV4-VOXY.jpg",
  },
  {
    category: "Cleaning",
    name: "Regular Hiace, Prado & Pickups Cleaning",
    price: "$3,000",
    duration: "1 hr",
    description: "Wash, vacuum and shine for larger personal vehicles.",
    image: "/hiace-prado-pickups-regular.jpg",
  },
  {
    category: "Cleaning",
    name: "Regular Coaster, Tipper & Box Truck Cleaning",
    price: "$5,000",
    duration: "1 hr 30 min",
    description: "Professional wash, vacuum and shine.",
    image: "/coaster.jpg",
  },
  {
    category: "Cleaning",
    name: "Regular Commercial Vehicles Cleaning",
    price: "$7,000",
    duration: "1 hr 30 min",
    description: "Keep your commercial vehicle clean and presentable.",
    image: "/commercial truck.jpg",
  },

  // =========================
  // DETAILING
  // =========================
  {
    category: "Detailing",
    name: "Express Full Interior Detailing",
    price: "$9,500",
    duration: "2 hrs",
    description:
      "Deep clean for seats, dashboard, floor and regular wash package.",
    image: "/car seat before after 2.jpg",
  },
  {
    category: "Detailing",
    name: "Seat Shampoo",
    price: "$4,000",
    duration: "1 hr",
    description: "Steam, scrub and dry treatment for tough stains.",
    image: "/Car seat before after.JPG",
  },
  {
    category: "Detailing",
    name: "Carpet Shampoo",
    price: "$4,500",
    duration: "1 hr",
    description:
      "Deep floor cleaning to help reduce mould, mildew and odour.",
    image: "/Floor detailing.JPG",
  },
  {
    category: "Detailing",
    name: "Roof Shampoo",
    price: "$3,500",
    duration: "1 hr",
    description: "Deep clean for grease, scuffs and dust.",
    image: "/sealing detailing.JPG",
  },
  {
    category: "Detailing",
    name: "Engine Steam Cleaning",
    price: "$3,500",
    duration: "1 hr",
    description: "Steam-clean your engine area for a cleaner finish.",
    image: "/engine steam cleaning.JPG",
  },
  {
    category: "Detailing",
    name: "Buff & Wax",
    price: "$9,500",
    duration: "1 hr 30 min",
    description: "Clean and protect the paint for a glossy finish.",
    image: "/buffing detailing.JPG",
  },
  {
    category: "Detailing",
    name: "Headlight Cleaning & Restoration",
    price: "$4,500",
    duration: "30 min",
    description:
      "Restore clarity for a safer, more attractive headlight.",
    image: "/headlight cleaning.JPG",
  },

  // =========================
  // STEAM
  // =========================
  {
    category: "Steam",
    name: "Air Vent Steam Cleaning",
    price: "$1,500",
    duration: "30 min",
    description: "Steam and deodorizer treatment for musky odours.",
    image: "/vent steam cleaning.JPG",
  },

  // =========================
  // DIAGNOSTICS
  // =========================
  {
    category: "Diagnostics",
    name: "OBD Scan & Clear",
    price: "$4,500",
    duration: "30 min",
    description: "Quick scan for dashboard warning lights.",
    image: "/diagnostic 2.JPG",
  },
  {
    category: "Diagnostics",
    name: "Air Bag Reset",
    price: "$3,500",
    duration: "30 min",
    description:
      "Air-bag reset service after deployment; subject to inspection.",
    image: "/Airbag diagnostic.PNG",
  },
  {
    category: "Diagnostics",
    name: "ABS Bleeding",
    price: "$4,500",
    duration: "35 min",
    description: "Brake-system bleeding for trapped air in the module.",
    image: "/ABS Diagnostics.jpeg",
  },
  {
    category: "Diagnostics",
    name: "Diagnostic Report",
    price: "$2,500",
    duration: "30 min",
    description:
      "Plain-language summary of onboard computer codes and data.",
    image: "/diagnostic 3.jpg",
  },
]

export const BUSINESS_INFO = {
  name: "Bennetts Auto Care",
  short: "BAC",
  location:
    "Shop #5 Cornwall Court Shopping Center, Montego Bay, St. James",
  hours: [
    { day: "Monday", time: "Closed" },
    { day: "Tuesday – Saturday", time: "8:00 AM – 5:30 PM" },
    { day: "Sunday", time: "8:00 AM – 5:00 PM" },
  ],
}
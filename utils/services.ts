import { API_BASE_URL, API_HOST, API_KEY, DefaultLocationId, TOURS_END_POINT, TOURS_END_POINT_NO_LOCATION, filtersType } from "@/constants"
import { api } from ".";
import { parseJSON } from "date-fns";

export interface Tour {
    avgRating: number | null
    listingBathroomLabel: string
    bathrooms: number
    listingBedLabel: string
    bedrooms: number
    beds: number
    businessHostLabel: any
    city: string
    configurableContent: any
    contextualPicturesPageInfo: ContextualPicturesPageInfo
    emergencyMessage: any
    listingFloatingMessage: any
    formattedBadges: FormattedBadge[]
    listingGuestLabel: string
    id: string
    isAutoTranslated: boolean
    isNewListing: boolean
    isSuperhost: boolean
    relaxedFilterLabels: any
    localizedCityName: string
    localizedDistanceText: any
    locationTitle: any
    locationContext: any
    listingName: string
    listingObjType: string
    neighborhood: any
    listingPreviewAmenityNames: string[]
    previewTags: any[]
    publicAddress: string
    reviews: any[] | null
    reviewsCount: number
    richKickers: any
    roomType: string
    roomTypeCategory: string
    roomTypeId: any
    spaceType: string
    starRating: number | null
    summary: any
    wishlistedCount: any
    title: string
    avgRatingLocalized: string
    accessibilityLabel: string
    concatQualifierLeft: boolean
    price: string
    qualifier: string
    trailingContent: any
    adults: number
    children: number
    infants: number
    checkin: string
    checkout: string
    relaxedAmenityIds: any
    categoryTag: any
    pets: number
    location: Location
    verified: Verified
    images: string[]
  }
  
  export interface ContextualPicturesPageInfo {
    hasNextPage: boolean
    endCursor: string | null
  }
  
  export interface FormattedBadge {
    textColor: string
    text: string
    borderColor: string
    backgroundColor: string
  }
  
  export interface Location {
    mapBoundsHint: MapBoundsHint
    fallbackMapCenter: FallbackMapCenter
  }
  
  export interface MapBoundsHint {
    northeast: Northeast
    southwest: Southwest
  }
  
  export interface Northeast {
    latitude: number
    longitude: number
  }
  
  export interface Southwest {
    latitude: number
    longitude: number
  }
  
  export interface FallbackMapCenter {
    latitude: number
    longitude: number
  }
  
  export interface Verified {
    enabled: boolean
    badgeText: string
    badgeSecondaryText: string
    kickerBadgeType: string
  }
  

  const dataa : Tour[] = [
    {
    "avgRating":5,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"4 guests",
    "id":"818793168185303466",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Modern Cozy Apartment in Gulberg Greens, Islamabad",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":13,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"5.0 (13)",
    "accessibilityLabel":"$21 per night",
    "concatQualifierLeft":false,
    "price":"$21",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-07",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/effe5355-b435-4fa6-af30-0ffb94bbb26b.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/26e7f782-8bb7-4eb6-8c9d-7b14e3a3b5c4.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/83debd2e-1eb2-4cec-aa2f-a7f89da35ab9.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/89cb522d-8b0b-4041-b98c-45eeab3654e4.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/1cb08754-8db1-41d8-b13e-5335c960907e.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-818793168185303466/original/992f6257-7ff0-43d4-95ee-b032c32a435c.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"2 beds",
    "bedrooms":1,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"2 guests",
    "id":"869337891500998679",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"* * * 40% off | 1 Bed | Netflix | Nxt to food st",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":1,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$14 per night",
    "concatQualifierLeft":false,
    "price":"$14",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-06-06",
    "checkout":"2023-06-11",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/3e24a01f-f4ae-46bf-b482-ff6331f22c8f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/bff1b53d-db3d-48be-a74a-0b8ffc85be05.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/56a638c0-4a97-4cb6-982b-29a3d056c324.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/50a7e1fb-b880-4a79-b7b3-0472f538fa9e.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/f4da3b85-69b1-4fd6-9b6c-3305dcbef855.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-869337891500998679/original/4ffae361-8995-4edf-be99-59a6079729be.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"3.5 baths",
    "bathrooms":3.5,
    "listingBedLabel":"3 beds",
    "bedrooms":3,
    "beds":3,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"7 guests",
    "id":"828525698928053495",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Flamingo Grand Apartments",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":12,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"5.0 (12)",
    "accessibilityLabel":"$72 per night",
    "concatQualifierLeft":false,
    "price":"$72",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-07",
    "checkout":"2023-05-12",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/095d9ac3-a01d-453d-b7f7-e28d30a80e88.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/32fc2620-d16a-41a6-a822-a05ef4007680.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/963e59e3-8778-4759-bada-450372f29565.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/8bf98cff-c1da-4271-bc09-6607f09bfe1c.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/735201ea-603e-4428-a1df-753616eb04ed.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0bd697fa-0f2d-4c4a-9522-15d378bcc4ac.jpg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"2 guests",
    "id":"812140611954965572",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"1 bed apt in ISB F-10 2nd floor",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":9,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"5.0 (9)",
    "accessibilityLabel":"$37 per night",
    "concatQualifierLeft":false,
    "price":"$37",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/f85b73d8-0b6a-4af9-aa08-094ae763c424.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9f23d2fe-b4ea-4915-97bd-88a58ace2c59.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/55a501ee-d838-4927-8b87-f98dcdfa85dc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/298ff2a6-be2b-4cd5-85f5-46d2c8480405.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/2becd1d0-b5df-42cd-a889-bae16e282842.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d9e93552-a13a-4308-a48c-6397a1f5fb97.jpg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"3 guests",
    "id":"872460536951566824",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Experience Comfort in 1-Bedroom",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":1,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$22 per night",
    "concatQualifierLeft":false,
    "price":"$22",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-03",
    "checkout":"2023-05-10",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/08243d93-b0bf-44e2-b6af-c6c5be680e80.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/59fd0a1c-fc66-4e03-9f61-6ef836fda6c4.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/bb513388-9a0f-4bc9-bbd4-9e2495d9245c.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/225d50f9-02c3-48f9-91eb-c841c4ac03f8.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/7c3fae6a-6075-4c63-aa09-426bc0aed2bd.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-872460536951566824/original/976886b5-b9ce-410c-833b-7c83bd8f866b.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"1 private bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"3 guests",
    "id":"821337784345136526",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"1 BHK Spacious and Secluded Private Room",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":6,
    "richKickers":null,
    "roomType":"Private room",
    "roomTypeCategory":"private_room",
    "roomTypeId":null,
    "spaceType":"Private room",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Private room in Islamabad",
    "avgRatingLocalized":"5.0 (6)",
    "accessibilityLabel":"$13 per night",
    "concatQualifierLeft":false,
    "price":"$13",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-04",
    "checkout":"2023-05-09",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/9fe7da74-bff3-4fe2-b584-1b28b04f2f24.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/da0e2171-b1db-40fd-b183-1f51d28a5dc3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/ab324367-9ade-4e23-a3dc-d2eb23147924.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/2f6b03c8-3569-45e9-9511-e38054a8ef31.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/9ba5ad2d-34a6-4b15-ac76-183e5307acbf.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-821337784345136526/original/c17f36b2-0e52-47e9-b85d-2cf39255ac4b.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":4.9,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"3 guests",
    "id":"749763093138734740",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"305 woody themed minimalist 1BHK Netflix-heated",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":20,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Condo",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Condo in Islamabad",
    "avgRatingLocalized":"4.9 (20)",
    "accessibilityLabel":"$34 per night",
    "concatQualifierLeft":false,
    "price":"$34",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-02",
    "checkout":"2023-05-07",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/20a8f248-7bbf-4216-9bb3-006b8a2c190b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-744686581644638590/original/b5e8033e-6d50-4278-87af-a86ae0ad771c.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-744686581644638590/original/3f09c338-2c6e-4b81-859a-7714c67d7c95.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-744686581644638590/original/78963e2a-3d47-42a9-8a48-0861087650c6.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-744686581644638590/original/41804d70-94ef-47d5-af35-8a59e1a87833.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-744686581644638590/original/07ec8eef-9334-4554-a7d1-bb01ed8a6c7c.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"1.5 baths",
    "bathrooms":1.5,
    "listingBedLabel":"2 beds",
    "bedrooms":1,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"4 guests",
    "id":"871927695568298222",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Luxurious Designer Apt by Suede",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":1,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$39 per night",
    "concatQualifierLeft":false,
    "price":"$39",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/385b3630-ec7c-4476-91cc-f15f768f6811.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/9d966cf8-af81-4ab3-b821-858f5a0dbd3d.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5a4f29d7-6c77-43eb-b372-e7bf4b9255d0.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/3186ece3-8c20-4251-9b17-e30e66784b31.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/efecc966-14c5-4017-aff9-3b6078f136ca.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/56b463cb-f47b-4967-96ef-97227aaa25e2.jpg?im_w=720"
    ]
    },
    {
    "avgRating":4.82,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"2 guests",
    "id":"832986290918249253",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"One Bed Apartment",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":11,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"4.82 (11)",
    "accessibilityLabel":"$10 per night",
    "concatQualifierLeft":false,
    "price":"$10",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-04",
    "checkout":"2023-05-10",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/00f33d9b-5498-46e0-ab3c-913f22c53b44.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/f9f4edc7-74d8-4e4f-9371-b0239524651b.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/7b7b1715-7d90-4e69-99de-3644003f6af3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/99d5d914-89b2-4dea-abf4-9ef20825ee4a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/7aca9360-80bc-4a05-938b-382dfb0326f3.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-832986290918249253/original/697e5f7c-9e75-409c-9691-dfef13a3c339.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":4.93,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"2 guests",
    "id":"789851860141313044",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Designer 1 BHK in elysium mall",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":14,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"4.93 (14)",
    "accessibilityLabel":"$52 per night",
    "concatQualifierLeft":false,
    "price":"$52",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/ad2e07df-1583-4dcf-9200-07b9769651d6.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-789851860141313044/original/e63b8b38-6655-4156-8a4d-0fffa7b1845f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-789851860141313044/original/56f2522e-81db-479a-9822-3cf4eced6a1a.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-789851860141313044/original/4f1a0b3d-2c67-48e3-9671-012511fd2068.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-789851860141313044/original/8c846348-6752-4bfa-b80d-47589fad91bc.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-789851860141313044/original/77d2d445-dfdd-458c-9b93-e3b8ae1b1aa4.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"3 baths",
    "bathrooms":3,
    "listingBedLabel":"2 beds",
    "bedrooms":2,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"4 guests",
    "id":"745609359657128076",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Presidential Suite with 180°view in Downtown City.",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":24,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Condo",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Condo in Islamabad",
    "avgRatingLocalized":"5.0 (24)",
    "accessibilityLabel":"$84 per night",
    "concatQualifierLeft":false,
    "price":"$84",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-07",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/90504073-4320-4265-8862-f54b148cc491.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c367ed80-2c29-4956-954e-8e317aef8403.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/08b2556c-fa30-4e22-a8b6-f11bd0385f21.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c528e3a0-ce29-4509-bc50-40cd6f72c675.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/85277c22-765c-4fcf-89fe-b78e91536658.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/549fabb4-8f0f-467f-be51-9ccfbdfdfed1.jpg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"3 guests",
    "id":"833252617634421462",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Flat in the Heart of the City",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":4,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"5.0 (4)",
    "accessibilityLabel":"$52 per night",
    "concatQualifierLeft":false,
    "price":"$52",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-02",
    "checkout":"2023-05-07",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/7783fecc-c66f-4dcf-84b4-6356f1d3a979.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/d80dd8d1-5759-4e72-a6d2-e1d8ecd3a5eb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/29d167c0-ecf3-4a5f-bbfc-df370f54d551.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0f765fad-9eb0-4147-8337-dbb8662f2143.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/bd135740-1f87-4e87-b125-56cb47b084bd.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/288eb9e5-4b56-4c75-8724-5a726488d1bc.jpg?im_w=720"
    ]
    },
    {
    "avgRating":4.86,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"3 guests",
    "id":"675413111484907051",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Executive Apartment w/ free parking & Wi-Fi",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":36,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"4.86 (36)",
    "accessibilityLabel":"$52 per night",
    "concatQualifierLeft":false,
    "price":"$52",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/da10d173-5833-40c5-94ae-e96eb464b765.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/66287f44-cb25-4bb8-8c6b-594b3e1a9260.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/fcbd8879-50e5-4799-88ca-9305c398e87a.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/5c7fd169-5078-4136-810a-58ad773aa124.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/f64b76c9-fcba-49be-ab81-fcc839590ac4.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/3ca21c12-f558-40d8-b79c-f2d431a36362.jpg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":false,
    "endCursor":null
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"3 guests",
    "id":"877529662812740635",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Peaceful and Private Family Executive Room.",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":0,
    "richKickers":null,
    "roomType":"Private room",
    "roomTypeCategory":"private_room",
    "roomTypeId":null,
    "spaceType":"Private room",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Private room in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$14 per night",
    "concatQualifierLeft":false,
    "price":"$14",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-03",
    "checkout":"2023-05-08",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-852642414037867354/original/8555e490-a16c-4209-a3f9-b06506719708.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-852642414037867354/original/b4ce2e78-6d00-4c45-b22b-e2845cf53aa5.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-852642414037867354/original/41843035-f50c-48b7-9329-425bdf352a60.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-852642414037867354/original/3ffcc53d-cb65-40dc-b748-30782fcae90e.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-852642414037867354/original/1049acf9-b87b-4395-9232-0e39775891fd.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"3.5 baths",
    "bathrooms":3.5,
    "listingBedLabel":"3 beds",
    "bedrooms":3,
    "beds":3,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"6 guests",
    "id":"706773455983237139",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Stylish 3 bedroom home in central Islamabad.",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Self check-in",
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":11,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Home",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Home in Islamabad",
    "avgRatingLocalized":"5.0 (11)",
    "accessibilityLabel":"$77 per night",
    "concatQualifierLeft":false,
    "price":"$77",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-07",
    "checkout":"2023-05-12",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/57d25ba6-913a-4f09-8724-37841b89a13f.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/4284de5d-df6b-4a34-be39-542c88c90bba.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/77be1b2c-f427-49a1-8136-bd31c8d314b9.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/cb376423-6b99-4a79-8646-cbd659e76a31.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/365a2a8e-c371-487e-ab85-b4acae89f7e0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-706773455983237139/original/7dc3cc6b-bdac-44b4-af9a-8a196b8930de.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"2 baths",
    "bathrooms":2,
    "listingBedLabel":"2 beds",
    "bedrooms":2,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"5 guests",
    "id":"863435223470524829",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Lake View Resort",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":1,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Home",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Home in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$12 per night",
    "concatQualifierLeft":false,
    "price":"$12",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/3117af88-a593-476b-b531-67b8ad56efbb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c59eae05-0955-4536-b10e-ba6bddf1bcd0.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/594fedc5-265e-47c1-859a-ce8f83631064.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/593ed567-08ed-4c67-bd8d-89245d2e31a3.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/338a9621-9f33-4cd1-8707-a19851125dbf.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e25dd12b-070d-411e-b40e-abda34a8ae66.jpg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":1,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"3 guests",
    "id":"873045018671865613",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Studio Apartment in Islamabad \nOpposite Centaurus",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":1,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$50 per night",
    "concatQualifierLeft":false,
    "price":"$50",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-02",
    "checkout":"2023-05-07",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-873045018671865613/original/28176a15-ee4d-416e-8f1b-e1e9eddd0eb6.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/bca01c74-8399-4052-8339-74a6551c3958.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-873045018671865613/original/e9cd42ec-2e6c-4f54-bf35-b2129c249b36.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/e4f9ddcb-d722-454e-bd6d-bcd53a3a3653.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-873045018671865613/original/2c99c482-436c-458c-a639-380be83ed76b.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-873045018671865613/original/b2ae5436-5f5f-4f9d-854f-32799742cd04.jpeg?im_w=720"
    ]
    },
    {
    "avgRating":4.79,
    "listingBathroomLabel":"1 bath",
    "bathrooms":1,
    "listingBedLabel":"1 bed",
    "bedrooms":0,
    "beds":1,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"1 guest",
    "id":"37823529",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"American Style | AC | Furnished Studio Apartment",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":39,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"4.79 (39)",
    "accessibilityLabel":"$12 per night",
    "concatQualifierLeft":false,
    "price":"$12",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/e71248a8-ec19-4e13-9514-046b28d3b15b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/1aa8c90c-5d77-4ab6-b4fd-7935a3585405.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/c24ea401-50c7-426d-b3cc-4d150dca982b.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/899b77e0-3897-4617-ac61-f813e1c8295f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/0dd83452-b10e-4c0f-b9ef-b48205a73ac7.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/e748160a-82e9-46da-ab45-7e0d3c6ec554.jpg?im_w=720"
    ]
    },
    {
    "avgRating":5,
    "listingBathroomLabel":"2 baths",
    "bathrooms":2,
    "listingBedLabel":"2 beds",
    "bedrooms":2,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    {
    "textColor":"#222222",
    "text":"Superhost",
    "borderColor":"rgba(0, 0, 0, 0.2)",
    "backgroundColor":"rgba(255, 255, 255, 0.95)"
    }
    ],
    "listingGuestLabel":"5 guests",
    "id":"873258999407452263",
    "isAutoTranslated":false,
    "isNewListing":false,
    "isSuperhost":true,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Executive Heights | 2BHK",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":[
    ],
    "reviewsCount":10,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Condo",
    "starRating":5,
    "summary":null,
    "wishlistedCount":null,
    "title":"Condo in Islamabad",
    "avgRatingLocalized":"5.0 (10)",
    "accessibilityLabel":"$40 per night",
    "concatQualifierLeft":false,
    "price":"$40",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/b5d59960-f9ec-422a-b3ce-9e5abc7a0137.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/a9d137d5-682b-48ec-91f7-8408597ed53f.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/65db8ebe-820f-4b2b-bc2c-c777f403b7dc.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-873258999407452263/original/1d9612dc-b9c8-45c6-b06b-eb9375a68cc0.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/4477f8c4-eccd-4090-aa42-913798952d51.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/01ad8f70-4d82-4e46-b334-1e616859eb6a.jpg?im_w=720"
    ]
    },
    {
    "avgRating":null,
    "listingBathroomLabel":"2 baths",
    "bathrooms":2,
    "listingBedLabel":"2 beds",
    "bedrooms":1,
    "beds":2,
    "businessHostLabel":null,
    "city":"Islamabad",
    "configurableContent":null,
    "contextualPicturesPageInfo":{
    "hasNextPage":true,
    "endCursor":"NQ=="
    },
    "emergencyMessage":null,
    "listingFloatingMessage":null,
    "formattedBadges":[
    ],
    "listingGuestLabel":"4 guests",
    "id":"830814994978190963",
    "isAutoTranslated":false,
    "isNewListing":true,
    "isSuperhost":false,
    "relaxedFilterLabels":null,
    "localizedCityName":"Islamabad",
    "localizedDistanceText":null,
    "locationTitle":null,
    "locationContext":null,
    "listingName":"Sunny Side-up apartment",
    "listingObjType":"REGULAR",
    "neighborhood":null,
    "listingPreviewAmenityNames":[
    "Wifi",
    "Kitchen"
    ],
    "previewTags":[
    ],
    "publicAddress":"Islamabad, Islamabad Capital Territory, Pakistan",
    "reviews":null,
    "reviewsCount":0,
    "richKickers":null,
    "roomType":"Entire home/apt",
    "roomTypeCategory":"entire_home",
    "roomTypeId":null,
    "spaceType":"Apartment",
    "starRating":null,
    "summary":null,
    "wishlistedCount":null,
    "title":"Apartment in Islamabad",
    "avgRatingLocalized":"New",
    "accessibilityLabel":"$25 per night",
    "concatQualifierLeft":false,
    "price":"$25",
    "qualifier":"night",
    "trailingContent":null,
    "adults":1,
    "children":0,
    "infants":0,
    "checkin":"2023-05-01",
    "checkout":"2023-05-06",
    "relaxedAmenityIds":null,
    "categoryTag":null,
    "pets":0,
    "location":{
    "mapBoundsHint":{
    "northeast":{
    "latitude":33.7204997,
    "longitude":73.18164825439453
    },
    "southwest":{
    "latitude":33.51519269221106,
    "longitude":72.85934599999996
    }
    },
    "fallbackMapCenter":{
    "latitude":33.7204997,
    "longitude":73.0405277
    }
    },
    "verified":{
    "enabled":false,
    "badgeText":"Plus",
    "badgeSecondaryText":"Verified",
    "kickerBadgeType":"filled"
    },
    "images":[
    "https://a0.muscache.com/im/pictures/miso/Hosting-830814994978190963/original/a85bc786-eda9-45af-ac42-9f0ecc8ced44.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-830814994978190963/original/fcd85794-eb1c-4581-9a90-154c6d4a1bbf.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/1e512607-14a6-4b5d-8d37-3e93ff7b8feb.jpg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-830814994978190963/original/5cefb1a1-3848-4edf-86fa-583618dd24af.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-830814994978190963/original/1d2f984f-9769-4ff5-b360-b97019718dec.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/miso/Hosting-830814994978190963/original/0b98b29f-1394-4a9f-b982-966a32d7fa19.jpeg?im_w=720"
    ]
    }
    ]
export async function getTours() : Promise<Tour[]> {
    Promise.resolve(dataa);
    return(dataa);
    let tourApi = `${API_BASE_URL}${TOURS_END_POINT}`;
    // return;
    // if (!tourFilters?.locationId)
    // {
        const tourFilters = {
            id : DefaultLocationId
        }
    // }
        // tourFilters.locationId = DefaultLocationId;
    //   tourApi = `${API_BASE_URL}${TOURS_END_POINT_NO_LOCATION}`;
    // return;
    const {data} = await api.get(tourApi, {
      params: tourFilters,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return data.data;
}

export async function getFilteredTours(filters : filtersType) : Promise<Tour[]> {
    // const {data} = parseJSON(toursTestJson) as Tour[];
    Promise.resolve(dataa);
    return(dataa);
    const tourApi = `${API_BASE_URL}${TOURS_END_POINT}`;
    // return;
    // if (!tourFilters?.locationId)
    // {
        const tourFilters = {
            id : DefaultLocationId
        }
    // }
        // tourFilters.locationId = DefaultLocationId;
    //   tourApi = `${API_BASE_URL}${TOURS_END_POINT_NO_LOCATION}`;
    // return;
    const {data} = await api.get(tourApi, {
      params: tourFilters,
      headers: {
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": API_HOST,
      },
    });
    return data.data;
}
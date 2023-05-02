import { API_BASE_URL, API_HOST, API_KEY, DefaultLocationId, TOURS_END_POINT, TOURS_END_POINT_NO_LOCATION, filtersType } from "@/constants"
import { api } from ".";
import { parseJSON } from "date-fns";
import { tourData } from "@/constants/mockData";

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
  


export async function getTours() : Promise<Tour[]> {
    Promise.resolve(tourData);
    return(tourData);
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
    Promise.resolve(tourData);
    return(tourData);
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

export const saveTour = (tour: Tour) => {
    const existingToursJson = localStorage.getItem('tours');
    if(!existingToursJson)
    {
        localStorage.setItem('tours',JSON.stringify({ [tour.id] : tour}));
        return;
    }
    const existingTours = JSON.parse(existingToursJson);
    const tours = {...existingTours, ...{ [tour.id] : tour} }
    localStorage.setItem('tours',JSON.stringify(tours));
}

export const getTour = (id : string | string []) => {
    if(Array.isArray(id))
        return;

    const existingToursJson = localStorage.getItem('tours');
    if(!existingToursJson)
        return;
    const existingTours = JSON.parse(existingToursJson);
    return existingTours[id];
}
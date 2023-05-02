// export const API_KEY = '236f9b26e5msh2c89b635473aea7p1f446cjsnb55603114c20';
export const API_KEY = "8443a0aa8bmsh410ff1288cb8bf5p1374f5jsn94704b2b2ffc";
export const API_BASE_URL = "https://airbnb19.p.rapidapi.com/";
export const API_HOST = "airbnb19.p.rapidapi.com";
export const PLACES_END_POINT = "api/v1/searchDestination";
export const TOURS_END_POINT = "api/v1/searchPropertyByPlace";
export const TOURS_END_POINT_NO_LOCATION = "api/v1/searchProperty";
export const SERVER_URL = "http://localhost:4000/";
export const defaultToursId = "ChIJcSZPllwVsBQRKl9iKtTb2UA";
export const WEATHER_API_KEY = "4ce7481ec118414a81b135806222806";
export const WEATHER_API_BASE_URL = `http://api.weatherapi.com/`;
export const FORECAST_DAYS = 3;
export type menuItem = {
  title: string;
  url: string;
};
export const menu: menuItem[] = [
  {
    title: "Tours",
    url: "/",
  },
  {
    title: "Add Tour",
    url: "/",
  },
  {
    title: "My Tours",
    url: "/",
  },
  {
    title: "Login",
    url: "/api/auth/login",
  },
  {
    title: "Logout",
    url: "/api/auth/logout",
  },
];
export const POPULAR_PLACES = [
  {
    id: "ChIJOwg_06VPwokRYv534QaPC8g",
    location_name: "New York, NY, US",
  },
  {
    id: "ChIJHWyVfKG_3zgRkqcUZrwNOLY",
    location_name: "Islamabad, Pakistan",
  },

  {
    id: "ChIJcSZPllwVsBQRKl9iKtTb2UA",
    location_name: "Turkey",
  },
  {
    id: "ChIJP3Sa8ziYEmsRUKgyFmh9AQM",
    location_name: "Sydney, New South Wales, Australia",
  },
];
export const DefaultLocationId = POPULAR_PLACES[1].id;
export const DefaultImage = "https://via.placeholder.com/400x400";

export type filtersType = {
  id: string;
  minDate?: string;
  maxDate?: string;
  priceMin?: string;
  priceMax?: string;
};

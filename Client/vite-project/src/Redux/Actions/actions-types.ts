// Definir tipos de acciones
/* export const GET_HOTELS = 'GET_HOTELS';
export const GET_HOTEL_BY_ID = 'GET_HOTELS_ID';
export const GET_HOTEL_BY_NAME = 'GET_HOTEL_BY_NAME';
export const POST_HOTEL = 'POST_HOTEL';
export const GET_FILTERED_HOTELS = 'GET_FILTERED_HOTELS'


export const GET_USERS = 'GET_USERS'
export const GET_USER_NAME = 'GET_USER_NAME' */


export type HotelAction =
  | { type: 'GET_HOTELS'; payload: any }
  | { type: 'GET_HOTEL_BY_ID'; payload: any }
  | { type: 'GET_HOTEL_BY_NAME'; payload: any }
  | { type: 'GET_FILTERED_HOTELS'; payload: any };


//FILTROS


//ORDENAMIENTOS


//RESET


//....Vemos después que más



export type ProfiName = {
  title: "Miss" | "Mr"
  first: string
  last: string
}

export type ProfiStreet = {
  number: Number
  name: string
}
export type ProfiCoordinates = {
  latitude: string
  longitude: string
}
export type ProfiTimezone = {
  offset: string
  description: string
}
export type ProfiLocation = {
  street: ProfiStreet
  city: string
  country: string
  postcode: number
  coordinates: ProfiCoordinates
  timezone: ProfiTimezone
}
export type ProfiPicture = {
  large: string
  medium: string
  thumbnail: string
}

export type ProfiEmail = string
export type ProfiPhone = string
export type ProfiCell = string

export type Profi = {
  "name": ProfiName,
  "location": ProfiLocation,
  "email": ProfiEmail,
  "phone": ProfiPhone,
  "cell": ProfiCell,
  "picture": ProfiPicture
}

export type ProfisState = Profi[]

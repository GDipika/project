export interface cinema {
    id: string;
    name: string,
    location: string,
    rating: number,
    isBookingsOpen: boolean,
    layout: layout;
}

export interface layout {
    upperBalcony: seat[]
    lowerBalcony: seat[]

}

export interface seat {
    isBooked: boolean;
    disabled:boolean,
    id: number,
    isAvailable: boolean,
    isActive:boolean
}

/* this module hold the arrays of objects.. bands... venues... and booking data..
it exports the data at the bottom  */

const data = {
    bands: [
        {
            id: 1,
            genre: "Rock",
            name: "The Strolling Stones",
            members: 4,
            startYear: 1962
        },
        {
            id: 2,
            genre: "Pop",
            name: "The Meatles",
            members: 5,
            startYear: 1960
        },
        {
            id: 3,
            genre: "Alternative",
            name: "Potatiohead",
            members: 3,
            startYear: 1985
        },
        {
            id: 4,
            genre: "Rock",
            name: "The Funkies",
            members: 6,
            startYear: 1992
        },
        {
            id: 5,
            genre: "Pop",
            name: "No Doubt",
            members: 4,
            startYear: 1994
        },
        {
            id: 6,
            genre: "Alternative",
            name: "Ok Commuter",
            members: 3,
            startYear: 2002
        },
        {
            id: 7,
            genre: "Rock",
            name: "Dinky Doot",
            members: 7,
            startYear: 2011
        },
        {
            id: 8,
            genre: "Pop",
            name: "Pitter Patter",
            members: 4,
            startYear: 2020
        },
        {
            id: 9,
            genre: "Alternative",
            name: "The Chewers",
            members: 2,
            startYear: 2006
        },

    ],
    venues: [
        {
            id: 1,
            name: "Madison Square Garden",
            address: "4 Pennsylvania Plaza, New York",
            squareFootage: 820000,
            maxCapacity: 20000
        },
        {
            id: 2,
            name: "Red Rocks Amphitheatre",
            address: "18300 W Alameda Pkwy, Morrison",
            squareFootage: 73800,
            maxCapacity: 9525
        },
        {
            id: 3,
            name: "The Fillmore",
            address: "1805 Geary Blvd, San Francisco",
            squareFootage: 5475,
            maxCapacity: 1250
        },
        {
            id: 4,
            name: "The Troubadour",
            address: "9081 Santa Monica Blvd, West Hollywood",
            squareFootage: 2500,
            maxCapacity: 500
        },

        {
            id: 5,
            name: "House of Blues Chicago",
            address: "329 N Dearborn St, Chicago",
            squareFootage: 5500,
            maxCapacity: 1200
        },

        {
            id: 6,
            name: "Sydney Opera House",
            address: "Bennelong Point, Sydney",
            squareFootage: 3989,
            maxCapacity: 2679
        },


    ],

    bookings: [
        {
            id: 1,
            date: "02-15-2024",
            bandId: 1,
            venueId: 1
        },
        {
            id: 2,
            date: "02-16-2024",
            bandId:2 ,
            venueId: 6
        },
        {
            id: 3,
            date: "02-17-2024",
            bandId: 3,
            venueId: 5
        },
        {
            id: 4,
            date: "02-18-2024",
            bandId: 4,
            venueId: 4
        },
        {
            id: 5,
            date: "02-19-2024",
            bandId: 5,
            venueId: 3
        },
        {
            id: 6,
            date: "02-20-2024",
            bandId: 6,
            venueId: 2
        },
        {
            id: 7,
            date: "02-20-2024",
            bandId: 7,
            venueId: 1
        },
        {
            id: 8,
            date: "02-21-2024",
            bandId: 8,
            venueId: 6
        },
        {
            id: 9,
            date: "02-22-2024",
            bandId: 9,
            venueId: 6
        },
        {
            id: 10,
            date: "02-22-2024",
            bandId: 9,
            venueId: 1
        },
        {
            id: 11,
            date: "02-23-2024",
            bandId: 8,
            venueId: 2
        },
        {
            id: 12,
            date: "02-23-2024",
            bandId: 8,
            venueId: 3
        },
        {
            id: 13,
            date: "02-24-2024",
            bandId: 4,
            venueId: 4
        },
        {
            id: 14,
            date: "02-24-2024",
            bandId: 4,
            venueId: 5
        },
        {
            id: 15,
            date: "02-24-2024",
            bandId: 1,
            venueId: 6
        },




    ],

    bandMembers: [
        { firstName: "Mick", lastName: "Jagger", yearBorn: 1943, instrument: "Vocals", bandId: 1 },
        { firstName: "Keith", lastName: "Richards", yearBorn: 1943, instrument: "Guitar", bandId: 1 },
        { firstName: "John", lastName: "Lennon", yearBorn: 1940, instrument: "Guitar", bandId: 2 },
        { firstName: "Paul", lastName: "McCartney", yearBorn: 1942, instrument: "Bass", bandId: 2 },
        { firstName: "George", lastName: "Harrison", yearBorn: 1943, instrument: "Guitar", bandId: 2 },
        { firstName: "Ringo", lastName: "Starr", yearBorn: 1940, instrument: "Drums", bandId: 2 },
        { firstName: "Lars", lastName: "Ulrich", yearBorn: 1963, instrument: "Drums", bandId: 4 },
        { firstName: "James", lastName: "Hetfield", yearBorn: 1963, instrument: "Guitar", bandId: 4 },
        { firstName: "Alice", lastName: "Cooper", yearBorn: 1948, instrument: "Vocals", bandId: 1 },
        { firstName: "Angus", lastName: "Young", yearBorn: 1955, instrument: "Guitar", bandId: 1 },
        { firstName: "Freddie", lastName: "Mercury", yearBorn: 1946, instrument: "Vocals", bandId: 3 },
        { firstName: "Brian", lastName: "May", yearBorn: 1947, instrument: "Guitar", bandId: 3 },

        { firstName: "Rick", lastName: "Stagger", yearBorn: 1953, instrument: "Vocals", bandId: 5 },
        { firstName: "Wreath", lastName: "Lickards", yearBorn: 1974, instrument: "Guitar", bandId: 5 },
        { firstName: "Don", lastName: "Kinnon", yearBorn: 1970, instrument: "Guitar", bandId: 5 },
        { firstName: "Raul", lastName: "Malarky", yearBorn: 1982, instrument: "Bass", bandId: 6 },
        { firstName: "Porridge", lastName: "Garrison", yearBorn: 1993, instrument: "Guitar", bandId: 6 },
        { firstName: "Bingo", lastName: "Carr", yearBorn: 1990, instrument: "Drums", bandId: 6 },
        { firstName: "Mars", lastName: "Ostrich", yearBorn: 1993, instrument: "Drums", bandId: 7  },
        { firstName: "Jamie", lastName: "Shetfield", yearBorn: 1987, instrument: "Guitar", bandId:7 },
        { firstName: "Alisson", lastName: "Snooper", yearBorn: 1988, instrument: "Vocals", bandId: 7 },
        { firstName: "Ancil", lastName: "Tongue", yearBorn: 1995, instrument: "Guitar", bandId: 8 },
        { firstName: "Frankie", lastName: "Smercury", yearBorn: 1996, instrument: "Vocals", bandId: 8 },
        { firstName: "Britney", lastName: "Spears", yearBorn: 1979, instrument: "Guitar", bandId: 8 },

        { firstName: "Miss", lastName: "Piggy", yearBorn: 1948, instrument: "Vocals", bandId: 9 },
        { firstName: "Kermit", lastName: "TheFrog", yearBorn: 1955, instrument: "Guitar", bandId: 9 },
        { firstName: "Your", lastName: "Mom", yearBorn: 1946, instrument: "Vocals", bandId: 8 },
        { firstName: "Will", lastName: "Passionfruit", yearBorn: 1991, instrument: "Guitar", bandId: 7 },
    ]


}

export const getBands = () => {
    return data.bands.map(band => ({ ...band }))
}

export const getVenues = () => {
    return data.venues.map(venue => ({ ...venue }))
}

export const getBookings = () => {
    return data.bookings.map(booking => ({ ...booking }))
}

export const getBandMembers = () => {
    return data.bandMembers.map(member => ({ ...member}))
}
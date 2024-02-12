/* This module will import bookings, bands, and  from database
 This module will write a function that turns the bookings into a string template for html
 "band.name are playing at venue.name on booking.date" 
It will also add an event listener that displays the band's information when the booking is clicked.. 
this is going to show a list of all the band objects values 

Rocket Pumpkins
EDM
Formed in 2005
3 band members

*/

import { getBands, getBookings, getVenues } from "./database.js"

document.addEventListener(
    "click",
    (mouseClick) => {
        const bookingItemClicked = mouseClick.target
        if (bookingItemClicked.dataset.type === "booking") {
            let bandOnBill = { name: "Incorrect" }
            // if a booking is clicked and booking.bandname = band.name 
            for (const band of getBands()) {
                if (bookingItemClicked.dataset.band === band.name) {
                    bandOnBill = band
                }
            }
            window.alert(`${bandOnBill.name} \n ${bandOnBill.genre} \n Formed in ${bandOnBill.startYear} \n ${bandOnBill.members} band members `)
        }
    }

)


// ok so we need to access band.name and venue.name 

export const Bookings = () => {
    let html = "<ul>"
    let bandName = ""
    let venueName = ""

    for (const booking of getBookings()) {
        for (const band of getBands()) {
            if (booking.id == band.id) {
                bandName = band.name
            }
            for (const venue of getVenues()) {
                if (booking.venueId == venue.id) {
                    venueName = venue.name
                }
            }
        }
        html += `<li data-type="booking" data-band="${bandName}">${bandName} are playing at ${venueName} on ${booking.date}</li>`
    }
    html += "</ul>"

    return html
}








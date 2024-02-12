/* This module will import bands and venues from database 
 This module will write a function that turns the venue names into a string template for html to be invoked
 in main.js
It will also add an event listener that displays the bands name that is playing at the venue*/

import { getBookings, getVenues, getBands } from "./database.js"
//need to show them side by side when there is multiple bands 
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
       
        if (itemClicked.dataset.type === "venue") { 
            let bookingArray = []
          
                for (const booking of getBookings()) {
                    if (itemClicked.dataset.id == booking.venueId)
                    for (const band of getBands()) {
                        if( band.id == booking.bandId){
                            bookingArray.push(band.name)
                        }
                    }
                        
                }
                //let bandsString = bookingArray.join(' and ')
                window.alert(`${bookingArray.join(' and ')} are playing this venue!`)
            }
            
        }
   
)



export const Venues = () => {
    let html = "<ul>"

    for (const venue of getVenues()) {
        html += `<li data-id="${venue.id}"data-type="venue" data-name="${venue.name}">${venue.name}</li>`
    }

    html += "</ul>"

    return html
}

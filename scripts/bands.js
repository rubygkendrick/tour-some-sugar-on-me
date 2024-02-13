/* This module will import bands and venues from database 
 This module will write a function that turns the band names into a string template for html to be invoked
 in main.js
It will also add an event listener that displays the bands name and the venues they are playing at 
"Watch Yip perform at 40 Watt,(and?) Mercy Lounge!"
*/
/* Gail McDermott (lead singer)
Chad Wilson (guitar)
Melanie Hobson (bass)
Greg Broadstreet (drummer)

get a each band member to display 
save in an array if bandmember.bandid === bandItemClicked.dataset.name then push that band member into the array 


Upcoming shows:
Cellar Moss
Flint Rock Cafe*/


import { getBands, getBookings, getBandMembers, getVenues } from "./database.js"

document.addEventListener(
    "click",
    (bandMouseClick) => {
        const bandItemClicked = bandMouseClick.target
        let currentVenues = []
        let currentBandMembers = []
        let memberHtml = ``
        let venueString = ""
        if (bandItemClicked.dataset.type == "band") {
            for (const booking of getBookings()) {
                if (bandItemClicked.dataset.id == booking.bandId) {
                    for (const venue of getVenues()) {
                        if (booking.venueId == venue.id) {
                            currentVenues.push(venue.name)
                            venueString = currentVenues.join(' and ')
                        }
                    }
                }
            }
            for (const member of getBandMembers()) {
                if (bandItemClicked.dataset.id == member.bandId) {
                    currentBandMembers.push(member)
                }
            }
            for (const currentMember of currentBandMembers) {
                memberHtml += ` ${currentMember.firstName} ${currentMember.lastName} ( ${currentMember.instrument} )`
            }
            window.alert(`${memberHtml} \n Watch ${bandItemClicked.dataset.name} perform at ${venueString}`)
        }  
    }
)




export const Bands = () => {
    let html = "<ul>"

    for (const band of getBands()) {
        html += `<li data-id="${band.id}"data-type="band"data-name="${band.name}">${band.name}</li>`
    }

    html += "</ul>"

    return html
}
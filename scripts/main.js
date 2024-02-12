/* invoke the functions to replace the html in index.html */
import { Bookings } from "./bookings.js"
import { Venues } from "./venues.js"
import { Bands } from "./bands.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Tour Some Sugar On MeEEEE!</h1>

<article class="current-bookings">
<h2>Current Bookings:</h2>
${Bookings()}
</article>
<article class="details">

    <section class="detail--column list details__products">
        <h2>Venues:</h2>
        ${Venues()}
    </section>
    <section class="detail--column list details__products">
        <h2>Bands:</h2>
        ${Bands()}
    </section>

</article>

`

mainContainer.innerHTML = applicationHTML

# Bus Ticket Booking Website 

## Files
- `index.html` — page structure and dialogs
- `style.css` — responsive styling
- `script.js` — route search, return trip option, seat selection, demo booking, ticket print, and admin route management

## Run
Open `index.html` in a modern browser, or use VS Code Live Server.

## Demo features
- Sample routes: Latur ↔ Pune, Latur ↔ Mumbai, Latur ↔ Hyderabad
- Add/delete sample routes in Admin Panel
- Search buses and filter by bus type or fare/departure
- Outbound and return seat selection with separate availability by date and leg
- Combined round-trip fare calculation and coupon discount across both legs
- Passenger form and demo booking ID
- My Bookings, cancellation, ticket print / Save as PDF
- Demo coupon discounts, QR ticket, route analytics, reviews and help forms
- Uses browser LocalStorage for demo data

## Important limitations
This is a frontend-only student project. Routes and bookings are stored in the current browser only. Admin panel has no secure authentication; seats are not synchronized across devices; fares, schedules, operators, and ticket status are sample data. Do not use it to accept real bookings or payments without a secure backend, database, authentication, validation, and a real operator/payment integration.


## Maharashtra routes update
- Added curated sample routes between major Maharashtra cities, including Latur, Mumbai, Pune, Solapur, Nanded, Chhatrapati Sambhajinagar, Nashik, Nagpur, Amravati, Akola, Jalgaon, Kolhapur, Sangli, Satara, Ratnagiri, Thane, Panvel, Ahilyanagar, Beed, Dharashiv, Parbhani, Hingoli, Yavatmal, Wardha and Chandrapur.
- Each added corridor has a reverse-direction sample route so return journeys can find a return bus and prompt for a separate return-seat selection.
- Fares and schedules are illustrative demo data only; they are not live operator schedules or prices.
- Existing browser data is preserved and newly added sample route IDs are merged into LocalStorage.


## Admin panel: Latur → Pune sample buses
- Added three clearly labelled demo listings: MSRTC Shivneri, Private Travels and VRL Travels.
- Admin route form now includes a Bus / Operator Name field; routes can be added and removed from the demo dashboard.
- These names, schedules and fares are illustrative sample data only and do not indicate real-time services or availability.


## Visual update
- Integrated the generated Maharashtra red state-transport bus visual into the homepage hero area.
- Added `maharashtra-bus-hero.png` as a local asset, so the image works offline with the project files.
- Brand name remains **Bus Ticket Booking Website**.


## Admin panel homepage preview
- Added the user's supplied homepage design image inside the Admin Panel as a reference preview.
- Keep `homepage-design-preview.png` in the same project folder as `index.html`.

## Code and readability review
- JavaScript syntax checked with Node.js.
- Checked for duplicate HTML IDs and missing local image assets.
- Checked basic HTML section, div and form opening/closing counts.
- Increased tiny 10px/11px UI text to 12px and form control text to 14px for readability.
- This is a static/source review; full browser testing, booking workflow, and visual checks across devices should still be done before submission.

## Maharashtra-only routes and display fixes
- Out-of-state routes (including Hyderabad) are filtered from the demo network.
- Admin route creation accepts only the curated Maharashtra city list.
- Generic website-name operator labels are replaced with clearly labelled sample operator names.
- Overnight routes display a “Next day” arrival label when arrival time is earlier than departure.
- All operator names, schedules and fares are illustrative demo data, not live MSRTC/private operator inventory.

## Professional update
- Added operator-name search and maximum-fare filtering alongside bus type and fare/time sorting.
- Added a Download ticket action that opens a print/save-to-PDF friendly ticket view.
- Improved responsive bus cards, filter controls, ticket QR container and mobile ticket details.
- Existing demo QR generation uses the QR library when internet is available; ticket still clearly states demo booking status.


## UI wording cleanup
- Removed repeated visible “demo” labels from bus names, fares, coupons and booking confirmation.
- Kept one clear note that schedule and fare examples may differ from real operator services.
- Route records saved in localStorage are normalized to remove old “(demo)” suffixes when the site loads.


## Maharashtra Professional Pack additions
- English / Marathi language toggle for key navigation and cancellation-policy content.
- Dark / light theme toggle; preference is stored in this browser.
- City-aware sample boarding points based on the selected Maharashtra origin city.
- Clear cancellation-policy note explaining that cancellation is local demo behavior only.
- Existing Maharashtra-only routes, return journey flow with separate seat selection per leg, smart filters, generated homepage art, e-ticket / QR, reviews, and Admin Panel are retained.

## Important limitations
This is a frontend-only student project using HTML, CSS, and JavaScript. Routes, operators, timings, seats, fares, bookings, reviews, and support requests are illustrative and saved locally in the browser. There is no backend, secure admin authentication, live operator inventory, real reservation, payment gateway, email delivery, or actual cancellation/refund integration. The QR is a demo booking reference; its QR library may require internet access.


## Frontend demo limitations
This college project uses HTML, CSS and JavaScript with browser-side sample data. It does not connect to real bus operators, live seat inventory, a payment gateway, email/SMS delivery, or a secure server-side admin system. Sample fares and schedules are illustrative. Ticket printing/QR display is for demonstration and does not confirm a real-world reservation. Cancellation actions do not process an actual refund.

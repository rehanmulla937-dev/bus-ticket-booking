const $ = (id) => document.getElementById(id);
const STORAGE = {routes:'laturRideRoutes_v2', bookings:'laturRideBookings_v2', seatBookings:'laturRideSeatBookings_v2', reviews:'laturRideReviews_v2', help:'laturRideHelp_v2'};
const defaultRoutes = [
  {id:'r1',from:'Latur',to:'Pune',operator:'MSRTC Shivneri',type:'AC Sleeper',fare:650,departure:'06:00',duration:'8h 30m',arrival:'14:30'},
  {id:'r2',from:'Latur',to:'Pune',operator:'Maharashtra Travels',type:'Non-AC Seater',fare:550,departure:'07:30',duration:'8h 45m',arrival:'16:15'},
  {id:'r-latur-pune-vrl',from:'Latur',to:'Pune',operator:'Sahyadri Express',type:'AC Sleeper',fare:900,departure:'20:00',duration:'8h 00m',arrival:'04:00'},
  {id:'r3',from:'Latur',to:'Mumbai',type:'AC Sleeper',fare:1200,departure:'19:30',duration:'9h 00m',arrival:'04:30'},
  {id:'r4',from:'Latur',to:'Mumbai',type:'AC Seater',fare:950,departure:'20:45',duration:'9h 30m',arrival:'06:15'},
  {id:'r5',from:'Latur',to:'Hyderabad',type:'AC Sleeper',fare:900,departure:'22:00',duration:'5h 30m',arrival:'03:30'},
  {id:'r6',from:'Latur',to:'Hyderabad',type:'Non-AC Seater',fare:600,departure:'23:00',duration:'6h 00m',arrival:'05:00'},
  {id:'r7',from:'Pune',to:'Latur',type:'AC Sleeper',fare:850,departure:'21:30',duration:'6h 30m',arrival:'04:00'},
  {id:'r8',from:'Mumbai',to:'Latur',type:'AC Sleeper',fare:1200,departure:'19:00',duration:'9h 00m',arrival:'04:00'},
  {id:'r9',from:'Hyderabad',to:'Latur',type:'AC Sleeper',fare:900,departure:'22:30',duration:'5h 30m',arrival:'04:00'}
];
const maharashtraRoutes = [
  {
    "id": "mh001",
    "from": "Latur",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "20:00",
    "duration": "6h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh002",
    "from": "Pune",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "21:00",
    "duration": "6h 30m",
    "arrival": "03:30"
  },
  {
    "id": "mh003",
    "from": "Latur",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 1200,
    "departure": "22:00",
    "duration": "9h",
    "arrival": "07:00"
  },
  {
    "id": "mh004",
    "from": "Mumbai",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1200,
    "departure": "23:00",
    "duration": "9h",
    "arrival": "08:00"
  },
  {
    "id": "mh005",
    "from": "Latur",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "19:00",
    "duration": "3h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh006",
    "from": "Solapur",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "20:00",
    "duration": "3h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh007",
    "from": "Latur",
    "to": "Nanded",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "21:00",
    "duration": "3h",
    "arrival": "00:00"
  },
  {
    "id": "mh008",
    "from": "Nanded",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "22:00",
    "duration": "3h",
    "arrival": "01:00"
  },
  {
    "id": "mh009",
    "from": "Latur",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 600,
    "departure": "23:00",
    "duration": "4h 30m",
    "arrival": "03:30"
  },
  {
    "id": "mh010",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 600,
    "departure": "19:00",
    "duration": "4h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh011",
    "from": "Latur",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 900,
    "departure": "20:00",
    "duration": "7h",
    "arrival": "03:00"
  },
  {
    "id": "mh012",
    "from": "Nashik",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 900,
    "departure": "21:00",
    "duration": "7h",
    "arrival": "04:00"
  },
  {
    "id": "mh013",
    "from": "Latur",
    "to": "Kolhapur",
    "type": "AC Sleeper",
    "fare": 1000,
    "departure": "22:00",
    "duration": "8h",
    "arrival": "06:00"
  },
  {
    "id": "mh014",
    "from": "Kolhapur",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1000,
    "departure": "23:00",
    "duration": "8h",
    "arrival": "07:00"
  },
  {
    "id": "mh015",
    "from": "Latur",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 1250,
    "departure": "19:00",
    "duration": "10h",
    "arrival": "05:00"
  },
  {
    "id": "mh016",
    "from": "Nagpur",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1250,
    "departure": "20:00",
    "duration": "10h",
    "arrival": "06:00"
  },
  {
    "id": "mh017",
    "from": "Latur",
    "to": "Amravati",
    "type": "AC Sleeper",
    "fare": 1100,
    "departure": "21:00",
    "duration": "8h 30m",
    "arrival": "05:30"
  },
  {
    "id": "mh018",
    "from": "Amravati",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1100,
    "departure": "22:00",
    "duration": "8h 30m",
    "arrival": "06:30"
  },
  {
    "id": "mh019",
    "from": "Latur",
    "to": "Akola",
    "type": "AC Sleeper",
    "fare": 950,
    "departure": "23:00",
    "duration": "7h 30m",
    "arrival": "06:30"
  },
  {
    "id": "mh020",
    "from": "Akola",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 950,
    "departure": "19:00",
    "duration": "7h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh021",
    "from": "Latur",
    "to": "Jalgaon",
    "type": "AC Sleeper",
    "fare": 950,
    "departure": "20:00",
    "duration": "7h 30m",
    "arrival": "03:30"
  },
  {
    "id": "mh022",
    "from": "Jalgaon",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 950,
    "departure": "21:00",
    "duration": "7h 30m",
    "arrival": "04:30"
  },
  {
    "id": "mh023",
    "from": "Latur",
    "to": "Sangli",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "22:00",
    "duration": "6h 30m",
    "arrival": "04:30"
  },
  {
    "id": "mh024",
    "from": "Sangli",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "23:00",
    "duration": "6h 30m",
    "arrival": "05:30"
  },
  {
    "id": "mh025",
    "from": "Latur",
    "to": "Satara",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "19:00",
    "duration": "6h",
    "arrival": "01:00"
  },
  {
    "id": "mh026",
    "from": "Satara",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "20:00",
    "duration": "6h",
    "arrival": "02:00"
  },
  {
    "id": "mh027",
    "from": "Latur",
    "to": "Ratnagiri",
    "type": "AC Sleeper",
    "fare": 1300,
    "departure": "21:00",
    "duration": "10h",
    "arrival": "07:00"
  },
  {
    "id": "mh028",
    "from": "Ratnagiri",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1300,
    "departure": "22:00",
    "duration": "10h",
    "arrival": "08:00"
  },
  {
    "id": "mh029",
    "from": "Latur",
    "to": "Thane",
    "type": "AC Sleeper",
    "fare": 1150,
    "departure": "23:00",
    "duration": "8h 30m",
    "arrival": "07:30"
  },
  {
    "id": "mh030",
    "from": "Thane",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1150,
    "departure": "19:00",
    "duration": "8h 30m",
    "arrival": "03:30"
  },
  {
    "id": "mh031",
    "from": "Latur",
    "to": "Panvel",
    "type": "AC Sleeper",
    "fare": 1200,
    "departure": "20:00",
    "duration": "9h",
    "arrival": "05:00"
  },
  {
    "id": "mh032",
    "from": "Panvel",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1200,
    "departure": "21:00",
    "duration": "9h",
    "arrival": "06:00"
  },
  {
    "id": "mh033",
    "from": "Latur",
    "to": "Ahilyanagar",
    "type": "AC Sleeper",
    "fare": 700,
    "departure": "22:00",
    "duration": "5h",
    "arrival": "03:00"
  },
  {
    "id": "mh034",
    "from": "Ahilyanagar",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 700,
    "departure": "23:00",
    "duration": "5h",
    "arrival": "04:00"
  },
  {
    "id": "mh035",
    "from": "Latur",
    "to": "Beed",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "19:00",
    "duration": "2h 30m",
    "arrival": "21:30"
  },
  {
    "id": "mh036",
    "from": "Beed",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "20:00",
    "duration": "2h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh037",
    "from": "Latur",
    "to": "Dharashiv",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "21:00",
    "duration": "2h",
    "arrival": "23:00"
  },
  {
    "id": "mh038",
    "from": "Dharashiv",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "22:00",
    "duration": "2h",
    "arrival": "00:00"
  },
  {
    "id": "mh039",
    "from": "Latur",
    "to": "Parbhani",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "23:00",
    "duration": "2h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh040",
    "from": "Parbhani",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "19:00",
    "duration": "2h 30m",
    "arrival": "21:30"
  },
  {
    "id": "mh041",
    "from": "Latur",
    "to": "Hingoli",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "20:00",
    "duration": "3h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh042",
    "from": "Hingoli",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "21:00",
    "duration": "3h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh043",
    "from": "Latur",
    "to": "Yavatmal",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "22:00",
    "duration": "6h 30m",
    "arrival": "04:30"
  },
  {
    "id": "mh044",
    "from": "Yavatmal",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "23:00",
    "duration": "6h 30m",
    "arrival": "05:30"
  },
  {
    "id": "mh045",
    "from": "Latur",
    "to": "Wardha",
    "type": "AC Sleeper",
    "fare": 1150,
    "departure": "19:00",
    "duration": "9h",
    "arrival": "04:00"
  },
  {
    "id": "mh046",
    "from": "Wardha",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1150,
    "departure": "20:00",
    "duration": "9h",
    "arrival": "05:00"
  },
  {
    "id": "mh047",
    "from": "Latur",
    "to": "Chandrapur",
    "type": "AC Sleeper",
    "fare": 1350,
    "departure": "21:00",
    "duration": "10h 30m",
    "arrival": "07:30"
  },
  {
    "id": "mh048",
    "from": "Chandrapur",
    "to": "Latur",
    "type": "AC Sleeper",
    "fare": 1350,
    "departure": "22:00",
    "duration": "10h 30m",
    "arrival": "08:30"
  },
  {
    "id": "mh049",
    "from": "Mumbai",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 500,
    "departure": "23:00",
    "duration": "3h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh050",
    "from": "Pune",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 500,
    "departure": "19:00",
    "duration": "3h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh051",
    "from": "Mumbai",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "20:00",
    "duration": "4h",
    "arrival": "00:00"
  },
  {
    "id": "mh052",
    "from": "Nashik",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "21:00",
    "duration": "4h",
    "arrival": "01:00"
  },
  {
    "id": "mh053",
    "from": "Mumbai",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 1400,
    "departure": "22:00",
    "duration": "13h",
    "arrival": "11:00"
  },
  {
    "id": "mh054",
    "from": "Nagpur",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 1400,
    "departure": "23:00",
    "duration": "13h",
    "arrival": "12:00"
  },
  {
    "id": "mh055",
    "from": "Mumbai",
    "to": "Kolhapur",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "19:00",
    "duration": "7h",
    "arrival": "02:00"
  },
  {
    "id": "mh056",
    "from": "Kolhapur",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "20:00",
    "duration": "7h",
    "arrival": "03:00"
  },
  {
    "id": "mh057",
    "from": "Mumbai",
    "to": "Ratnagiri",
    "type": "AC Sleeper",
    "fare": 700,
    "departure": "21:00",
    "duration": "6h",
    "arrival": "03:00"
  },
  {
    "id": "mh058",
    "from": "Ratnagiri",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 700,
    "departure": "22:00",
    "duration": "6h",
    "arrival": "04:00"
  },
  {
    "id": "mh059",
    "from": "Mumbai",
    "to": "Jalgaon",
    "type": "AC Sleeper",
    "fare": 650,
    "departure": "23:00",
    "duration": "7h",
    "arrival": "06:00"
  },
  {
    "id": "mh060",
    "from": "Jalgaon",
    "to": "Mumbai",
    "type": "AC Sleeper",
    "fare": 650,
    "departure": "19:00",
    "duration": "7h",
    "arrival": "02:00"
  },
  {
    "id": "mh061",
    "from": "Pune",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "20:00",
    "duration": "4h",
    "arrival": "00:00"
  },
  {
    "id": "mh062",
    "from": "Nashik",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "21:00",
    "duration": "4h",
    "arrival": "01:00"
  },
  {
    "id": "mh063",
    "from": "Pune",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "22:00",
    "duration": "4h",
    "arrival": "02:00"
  },
  {
    "id": "mh064",
    "from": "Solapur",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "23:00",
    "duration": "4h",
    "arrival": "03:00"
  },
  {
    "id": "mh065",
    "from": "Pune",
    "to": "Kolhapur",
    "type": "AC Sleeper",
    "fare": 550,
    "departure": "19:00",
    "duration": "5h",
    "arrival": "00:00"
  },
  {
    "id": "mh066",
    "from": "Kolhapur",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 550,
    "departure": "20:00",
    "duration": "5h",
    "arrival": "01:00"
  },
  {
    "id": "mh067",
    "from": "Pune",
    "to": "Sangli",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "21:00",
    "duration": "4h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh068",
    "from": "Sangli",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "22:00",
    "duration": "4h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh069",
    "from": "Pune",
    "to": "Satara",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "23:00",
    "duration": "2h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh070",
    "from": "Satara",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "19:00",
    "duration": "2h 30m",
    "arrival": "21:30"
  },
  {
    "id": "mh071",
    "from": "Pune",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 1000,
    "departure": "20:00",
    "duration": "11h",
    "arrival": "07:00"
  },
  {
    "id": "mh072",
    "from": "Nagpur",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 1000,
    "departure": "21:00",
    "duration": "11h",
    "arrival": "08:00"
  },
  {
    "id": "mh073",
    "from": "Pune",
    "to": "Amravati",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "22:00",
    "duration": "9h",
    "arrival": "07:00"
  },
  {
    "id": "mh074",
    "from": "Amravati",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 850,
    "departure": "23:00",
    "duration": "9h",
    "arrival": "08:00"
  },
  {
    "id": "mh075",
    "from": "Pune",
    "to": "Akola",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "19:00",
    "duration": "8h",
    "arrival": "03:00"
  },
  {
    "id": "mh076",
    "from": "Akola",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 800,
    "departure": "20:00",
    "duration": "8h",
    "arrival": "04:00"
  },
  {
    "id": "mh077",
    "from": "Pune",
    "to": "Jalgaon",
    "type": "AC Sleeper",
    "fare": 550,
    "departure": "21:00",
    "duration": "6h",
    "arrival": "03:00"
  },
  {
    "id": "mh078",
    "from": "Jalgaon",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 550,
    "departure": "22:00",
    "duration": "6h",
    "arrival": "04:00"
  },
  {
    "id": "mh079",
    "from": "Pune",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "23:00",
    "duration": "4h 30m",
    "arrival": "03:30"
  },
  {
    "id": "mh080",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "19:00",
    "duration": "4h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh081",
    "from": "Pune",
    "to": "Nanded",
    "type": "AC Sleeper",
    "fare": 650,
    "departure": "20:00",
    "duration": "6h",
    "arrival": "02:00"
  },
  {
    "id": "mh082",
    "from": "Nanded",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 650,
    "departure": "21:00",
    "duration": "6h",
    "arrival": "03:00"
  },
  {
    "id": "mh083",
    "from": "Pune",
    "to": "Thane",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "22:00",
    "duration": "3h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh084",
    "from": "Thane",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "23:00",
    "duration": "3h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh085",
    "from": "Pune",
    "to": "Panvel",
    "type": "AC Sleeper",
    "fare": 500,
    "departure": "19:00",
    "duration": "4h",
    "arrival": "23:00"
  },
  {
    "id": "mh086",
    "from": "Panvel",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 500,
    "departure": "20:00",
    "duration": "4h",
    "arrival": "00:00"
  },
  {
    "id": "mh087",
    "from": "Nashik",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "21:00",
    "duration": "3h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh088",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "22:00",
    "duration": "3h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh089",
    "from": "Nashik",
    "to": "Jalgaon",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "23:00",
    "duration": "3h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh090",
    "from": "Jalgaon",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "19:00",
    "duration": "3h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh091",
    "from": "Nashik",
    "to": "Dhule",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "20:00",
    "duration": "2h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh092",
    "from": "Dhule",
    "to": "Nashik",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "21:00",
    "duration": "2h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh093",
    "from": "Nagpur",
    "to": "Amravati",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "22:00",
    "duration": "3h",
    "arrival": "01:00"
  },
  {
    "id": "mh094",
    "from": "Amravati",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "23:00",
    "duration": "3h",
    "arrival": "02:00"
  },
  {
    "id": "mh095",
    "from": "Nagpur",
    "to": "Akola",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "19:00",
    "duration": "4h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh096",
    "from": "Akola",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 450,
    "departure": "20:00",
    "duration": "4h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh097",
    "from": "Nagpur",
    "to": "Wardha",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "21:00",
    "duration": "2h",
    "arrival": "23:00"
  },
  {
    "id": "mh098",
    "from": "Wardha",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "22:00",
    "duration": "2h",
    "arrival": "00:00"
  },
  {
    "id": "mh099",
    "from": "Nagpur",
    "to": "Chandrapur",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "23:00",
    "duration": "3h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh100",
    "from": "Chandrapur",
    "to": "Nagpur",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "19:00",
    "duration": "3h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh101",
    "from": "Amravati",
    "to": "Akola",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "20:00",
    "duration": "2h",
    "arrival": "22:00"
  },
  {
    "id": "mh102",
    "from": "Akola",
    "to": "Amravati",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "21:00",
    "duration": "2h",
    "arrival": "23:00"
  },
  {
    "id": "mh103",
    "from": "Solapur",
    "to": "Kolhapur",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "22:00",
    "duration": "4h",
    "arrival": "02:00"
  },
  {
    "id": "mh104",
    "from": "Kolhapur",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "23:00",
    "duration": "4h",
    "arrival": "03:00"
  },
  {
    "id": "mh105",
    "from": "Solapur",
    "to": "Sangli",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "19:00",
    "duration": "3h",
    "arrival": "22:00"
  },
  {
    "id": "mh106",
    "from": "Sangli",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 300,
    "departure": "20:00",
    "duration": "3h",
    "arrival": "23:00"
  },
  {
    "id": "mh107",
    "from": "Solapur",
    "to": "Satara",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "21:00",
    "duration": "3h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh108",
    "from": "Satara",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "22:00",
    "duration": "3h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh109",
    "from": "Nanded",
    "to": "Parbhani",
    "type": "AC Sleeper",
    "fare": 150,
    "departure": "23:00",
    "duration": "1h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh110",
    "from": "Parbhani",
    "to": "Nanded",
    "type": "AC Sleeper",
    "fare": 150,
    "departure": "19:00",
    "duration": "1h 30m",
    "arrival": "20:30"
  },
  {
    "id": "mh111",
    "from": "Nanded",
    "to": "Hingoli",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "20:00",
    "duration": "2h",
    "arrival": "22:00"
  },
  {
    "id": "mh112",
    "from": "Hingoli",
    "to": "Nanded",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "21:00",
    "duration": "2h",
    "arrival": "23:00"
  },
  {
    "id": "mh113",
    "from": "Nanded",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "22:00",
    "duration": "3h 30m",
    "arrival": "01:30"
  },
  {
    "id": "mh114",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Nanded",
    "type": "AC Sleeper",
    "fare": 350,
    "departure": "23:00",
    "duration": "3h 30m",
    "arrival": "02:30"
  },
  {
    "id": "mh115",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Jalgaon",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "19:00",
    "duration": "3h",
    "arrival": "22:00"
  },
  {
    "id": "mh116",
    "from": "Jalgaon",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "20:00",
    "duration": "3h",
    "arrival": "23:00"
  },
  {
    "id": "mh117",
    "from": "Kolhapur",
    "to": "Ratnagiri",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "21:00",
    "duration": "4h",
    "arrival": "01:00"
  },
  {
    "id": "mh118",
    "from": "Ratnagiri",
    "to": "Kolhapur",
    "type": "AC Sleeper",
    "fare": 400,
    "departure": "22:00",
    "duration": "4h",
    "arrival": "02:00"
  },
  {
    "id": "mh119",
    "from": "Thane",
    "to": "Panvel",
    "type": "AC Sleeper",
    "fare": 150,
    "departure": "23:00",
    "duration": "1h 30m",
    "arrival": "00:30"
  },
  {
    "id": "mh120",
    "from": "Panvel",
    "to": "Thane",
    "type": "AC Sleeper",
    "fare": 150,
    "departure": "19:00",
    "duration": "1h 30m",
    "arrival": "20:30"
  },
  {
    "id": "mh121",
    "from": "Ahilyanagar",
    "to": "Pune",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "20:00",
    "duration": "2h 30m",
    "arrival": "22:30"
  },
  {
    "id": "mh122",
    "from": "Pune",
    "to": "Ahilyanagar",
    "type": "AC Sleeper",
    "fare": 250,
    "departure": "21:00",
    "duration": "2h 30m",
    "arrival": "23:30"
  },
  {
    "id": "mh123",
    "from": "Dharashiv",
    "to": "Solapur",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "22:00",
    "duration": "2h",
    "arrival": "00:00"
  },
  {
    "id": "mh124",
    "from": "Solapur",
    "to": "Dharashiv",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "23:00",
    "duration": "2h",
    "arrival": "01:00"
  },
  {
    "id": "mh125",
    "from": "Beed",
    "to": "Chhatrapati Sambhajinagar",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "19:00",
    "duration": "2h",
    "arrival": "21:00"
  },
  {
    "id": "mh126",
    "from": "Chhatrapati Sambhajinagar",
    "to": "Beed",
    "type": "AC Sleeper",
    "fare": 200,
    "departure": "20:00",
    "duration": "2h",
    "arrival": "22:00"
  }
];
const maharashtraCities = new Set(["Latur", "Pune", "Mumbai", "Solapur", "Nanded", "Chhatrapati Sambhajinagar", "Nashik", "Kolhapur", "Nagpur", "Amravati", "Akola", "Jalgaon", "Sangli", "Satara", "Ratnagiri", "Thane", "Panvel", "Ahilyanagar", "Beed", "Dharashiv", "Parbhani", "Hingoli", "Yavatmal", "Wardha", "Chandrapur", "Dhule"]);
// Keep only routes whose origin and destination are in Maharashtra, then seed the curated network.
let routes = load(STORAGE.routes, defaultRoutes).filter(r => maharashtraCities.has(r.from) && maharashtraCities.has(r.to));
{
  const known = new Set(routes.map(r => r.id));
  maharashtraRoutes.forEach(r => { if (!known.has(r.id)) routes.push(r); });
  // Replace generic labels with named sample operators; these are not live operator listings.
  const sampleOperators = ['MSRTC Ordinary','Shivneri Service','Shivshahi Service','Maharashtra Travels','Sahyadri Travels'];
  routes = routes.map((r,i) => ({...r,
    operator: ((r.operator||'').replace(/\s*\(demo\)/ig,'').trim() && !(r.operator||'').includes('Website Express'))
      ? (r.operator||'').replace(/\s*\(demo\)/ig,'').trim()
      : sampleOperators[i % sampleOperators.length]
  }));
  try { localStorage.setItem(STORAGE.routes, JSON.stringify(routes)); } catch {}
}
let bookings = load(STORAGE.bookings, []);
let seatBookings = load(STORAGE.seatBookings, {});
let activeBus = null, activeJourneyDate = '', activeReturnDate = '', selectedSeats = [], currentLeg = 'outbound', bookingDraft = null, toastTimer, appliedCoupon = null;
let reviews = load(STORAGE.reviews, []), helpRequests = load(STORAGE.help, []);

function load(key, fallback){ try { const v=localStorage.getItem(key); return v ? JSON.parse(v) : structuredClone(fallback); } catch { return structuredClone(fallback); } }
function save(){localStorage.setItem(STORAGE.routes,JSON.stringify(routes));localStorage.setItem(STORAGE.bookings,JSON.stringify(bookings));localStorage.setItem(STORAGE.seatBookings,JSON.stringify(seatBookings));}
function money(n){return '₹'+Number(n).toLocaleString('en-IN');}
function esc(s){return String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function showToast(message){const t=$('toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}
function openModal(id){$(id).classList.remove('hidden');document.body.style.overflow='hidden';}
function closeModal(id){$(id).classList.add('hidden');if(!document.querySelector('.modal-backdrop:not(.hidden)'))document.body.style.overflow='';}
document.querySelectorAll('[data-close]').forEach(b=>b.addEventListener('click',()=>closeModal(b.dataset.close)));
document.querySelectorAll('.modal-backdrop').forEach(bg=>bg.addEventListener('click',e=>{if(e.target===bg)closeModal(bg.id)}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal-backdrop:not(.hidden)').forEach(m=>closeModal(m.id));});
$('year').textContent=new Date().getFullYear();

function cityOptions(){
  const cities=[...new Set(['Latur',...routes.flatMap(r=>[r.from,r.to])])].sort((a,b)=>a==='Latur'?-1:b==='Latur'?1:a.localeCompare(b));
  const fill=(sel,chosen)=>{sel.innerHTML=cities.map(c=>`<option ${c===chosen?'selected':''}>${esc(c)}</option>`).join('');};
  fill($('fromCity'),'Latur');fill($('toCity'),'Pune');
  if($('fromCity').value===$('toCity').value && cities.length>1)$('toCity').value=cities.find(c=>c!==$('fromCity').value);
}
cityOptions();
const today=new Date();const localISO=d=>{const x=new Date(d.getTime()-d.getTimezoneOffset()*60000);return x.toISOString().slice(0,10)};
$('journeyDate').min=localISO(today);$('journeyDate').value=localISO(today);
$('returnDate').min=localISO(today);
$('returnToggle').addEventListener('change',()=>{$('returnField').classList.toggle('hidden',!$('returnToggle').checked);$('returnDate').required=$('returnToggle').checked;if($('returnToggle').checked){$('returnDate').min=$('journeyDate').value;$('returnDate').value=$('journeyDate').value;}});
$('journeyDate').addEventListener('change',()=>{$('returnDate').min=$('journeyDate').value;if($('returnDate').value<$('journeyDate').value)$('returnDate').value=$('journeyDate').value;});
$('swapCities').addEventListener('click',()=>{const v=$('fromCity').value;$('fromCity').value=$('toCity').value;$('toCity').value=v;});
document.querySelectorAll('.route-card').forEach(card=>card.addEventListener('click',()=>{$('fromCity').value='Latur';$('toCity').value=card.dataset.destination;$('search').scrollIntoView({behavior:'smooth'});}));
$('searchForm').addEventListener('submit',e=>{e.preventDefault();if($('fromCity').value===$('toCity').value){showToast('Choose two different cities.');return;}if($('returnToggle').checked && $('returnDate').value<$('journeyDate').value){showToast('Return date must be on or after journey date.');return;}activeJourneyDate=$('journeyDate').value;activeReturnDate=$('returnToggle').checked?$('returnDate').value:'';renderBuses();$('resultsSection').classList.remove('hidden');$('resultsSection').scrollIntoView({behavior:'smooth',block:'start'});});
$('typeFilter').addEventListener('change',renderBuses);$('sortFilter').addEventListener('change',renderBuses);
$('operatorFilter').addEventListener('input',renderBuses);$('maxFareFilter').addEventListener('input',renderBuses);

function getAvailableRoutes(from,to){let list=routes.filter(r=>r.from.toLowerCase()===from.toLowerCase()&&r.to.toLowerCase()===to.toLowerCase());const type=$('typeFilter').value;if(type!=='all')list=list.filter(r=>r.type===type);
 const operatorQuery=($('operatorFilter')?.value||'').trim().toLowerCase();if(operatorQuery)list=list.filter(r=>(r.operator||'Maharashtra Bus Service').toLowerCase().includes(operatorQuery));
 const maxFare=Number($('maxFareFilter')?.value||0);if(maxFare>0)list=list.filter(r=>Number(r.fare)<=maxFare);
 if($('sortFilter').value==='price')list.sort((a,b)=>a.fare-b.fare);else list.sort((a,b)=>a.departure.localeCompare(b.departure));return list;}
function formatDate(d){if(!d)return '—';return new Date(d+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'});}
function renderBuses(){
  const from=$('fromCity').value,to=$('toCity').value;let list=getAvailableRoutes(from,to);
  $('resultsTitle').textContent=`${from} to ${to}${activeReturnDate?' · Return included':''}`;$('resultCount').textContent=`${list.length} option${list.length===1?'':'s'}`;
  if(!list.length){$('busList').innerHTML='<div class="empty-state"><span>🚌</span><strong>No sample buses on this route</strong><p>Try another route or add one in the Admin Panel.</p></div>';return;}
  $('busList').innerHTML=list.map(r=>`<article class="bus-card"><div><div class="operator">${esc(r.operator||'Maharashtra Bus Service')}</div><div class="bus-type">${esc(r.type)}</div></div><div class="trip-times"><div><strong>${esc(r.departure)}</strong><small>${esc(r.from)}</small></div><span class="trip-line"></span><div><strong>${esc(r.arrival||r.duration)}</strong><small>${r.arrival?'Arrival · '+esc(r.to)+(r.arrival<=r.departure?' · Next day':''):'Trip duration'}</small></div></div><div class="bus-meta"><b>${money(r.fare)}</b>per seat</div><button class="primary-btn" data-book="${esc(r.id)}">Select seats →</button></article>`).join('');
  $('busList').querySelectorAll('[data-book]').forEach(btn=>btn.addEventListener('click',()=>startBooking(routes.find(r=>r.id===btn.dataset.book),'outbound')));
}
function bookedFor(route,date,leg){return seatBookings[`${route.id}|${date}|${leg}`]||[];}
const boardingPointsByCity = {
  "Latur": ["Latur Central Bus Stand", "Ausa Road Pickup Point", "Latur Railway Station Road"],
  "Pune": ["Pune Station Bus Stand", "Swargate Bus Stand", "Wakad Pickup Point"],
  "Mumbai": ["Dadar Bus Stand", "Borivali Pickup Point", "Thane Bus Station"],
  "Solapur": ["Solapur Central Bus Stand", "Akkalkot Road Pickup Point"],
  "Nanded": ["Nanded Central Bus Stand", "Railway Station Road Pickup Point"],
  "Nashik": ["Nashik CBS", "Dwarka Circle Pickup Point"],
  "Nagpur": ["Nagpur Ganeshpeth Bus Stand", "Wardha Road Pickup Point"],
  "Kolhapur": ["Kolhapur Central Bus Stand", "Rankala Pickup Point"]
};
function updateBoardingPoints(city){
 const sel=$('boardingPoint');if(!sel)return;const previous=sel.value;
 const points=boardingPointsByCity[city]||[`${city} Central Bus Stand`,`${city} Main Bus Stop`,`${city} Highway Pickup Point`];
 sel.innerHTML=points.map(point=>`<option>${esc(point)}</option>`).join('');if(points.includes(previous))sel.value=previous;
}
$('fromCity').addEventListener('change',()=>updateBoardingPoints($('fromCity').value));
updateBoardingPoints($('fromCity').value);

function startBooking(route,leg){
  activeBus=route;currentLeg=leg;selectedSeats=[];bookingDraft={outbound:null,return:null};appliedCoupon=null;$('passengerPanel').classList.add('hidden');$('continueBooking').classList.remove('hidden');$('modalStep').textContent=activeReturnDate?'OUTBOUND SEATS · 1 OF 2':'STEP 1 OF 2';$('continueBooking').textContent=activeReturnDate?'Continue to return seats →':'Continue to passenger details →';$('bookingTitle').textContent='Choose your seats';$('selectedBusText').textContent=`${route.from} → ${route.to} · ${formatDate(leg==='outbound'?activeJourneyDate:activeReturnDate)} · ${route.type}`;renderSeats();openModal('bookingModal');
}
function seatExtra(id){const n=Number(String(id).replace('S',''));return n%7===0?100:(n%4===1||n%4===0?50:0);}
function selectedSeatBase(){return selectedSeats.reduce((sum,id)=>sum+activeBus.fare+seatExtra(id),0);}
function renderSeats(){
  const date=currentLeg==='outbound'?activeJourneyDate:activeReturnDate;const booked=bookedFor(activeBus,date,currentLeg);let html='';
  for(let i=1;i<=28;i++){const id='S'+String(i).padStart(2,'0');const isBooked=booked.includes(id);const kind=i%7===0?'Sleeper':(i%4===1||i%4===0?'Window':'Aisle');const premium=kind==='Window'?50:kind==='Sleeper'?100:0;html+=`<button type="button" title="${kind}${premium?' · +'+money(premium):''}" class="seat ${isBooked?'booked':''} ${selectedSeats.includes(id)?'selected':''}" data-seat="${id}" data-kind="${kind}" ${isBooked?'disabled':''} aria-label="Seat ${id}, ${kind}${isBooked?', booked':''}">${id}<small>${kind==='Window'?'W':kind==='Sleeper'?'S':'A'}</small></button>`;}
  $('seatGrid').innerHTML=html;$('seatGrid').querySelectorAll('[data-seat]').forEach(b=>b.addEventListener('click',()=>{const s=b.dataset.seat;selectedSeats=selectedSeats.includes(s)?selectedSeats.filter(x=>x!==s):[...selectedSeats,s];renderSeats();}));
  const seatBase=selectedSeats.reduce((sum,id)=>sum+activeBus.fare+(seatExtra(id)),0);$('selectedSeatsText').textContent=selectedSeats.length?selectedSeats.join(', '):'None';$('seatTotal').textContent=money(seatBase);$('continueBooking').disabled=selectedSeats.length===0;$('passengerTotal').textContent=money(seatBase);$('baseFare').textContent=money(seatBase);$('discountFare').textContent='−'+money(0);$('couponCode').value='';$('couponMessage').textContent='Available coupons: FIRST10 (10% off) · RETURN15 (15% off on return bookings)';$('couponMessage').classList.remove('applied');appliedCoupon=null;
}
$('continueBooking').addEventListener('click',()=>{
 if(!selectedSeats.length)return;
 bookingDraft[currentLeg]={route:activeBus,date:currentLeg==='outbound'?activeJourneyDate:activeReturnDate,seats:[...selectedSeats],fare:selectedSeatBase(),legKey:currentLeg};
 if(currentLeg==='outbound'&&activeReturnDate){
  const returnRoute=routes.find(r=>r.from.toLowerCase()===activeBus.to.toLowerCase()&&r.to.toLowerCase()===activeBus.from.toLowerCase());
  if(!returnRoute){showToast('Return bus is not configured. Please add the reverse route in Admin Panel.');return;}
  currentLeg='return';activeBus=returnRoute;selectedSeats=[];$('modalStep').textContent='RETURN SEATS · 2 OF 2';$('bookingTitle').textContent='Choose return seats';$('continueBooking').textContent='Continue to passenger details →';$('selectedBusText').textContent=`${returnRoute.from} → ${returnRoute.to} · ${formatDate(activeReturnDate)} · ${returnRoute.type}`;renderSeats();$('seatGrid').scrollIntoView({behavior:'smooth',block:'nearest'});return;
 }
 $('passengerPanel').classList.remove('hidden');$('continueBooking').classList.add('hidden');$('modalStep').textContent='PASSENGER DETAILS';$('bookingTitle').textContent='Passenger details';const combined=(bookingDraft.outbound?.fare||0)+(bookingDraft.return?.fare||0);$('baseFare').textContent=money(combined);$('passengerTotal').textContent=money(combined);$('discountFare').textContent='−'+money(0);$('passengerPanel').scrollIntoView({behavior:'smooth',block:'nearest'});
});
$('applyCoupon').addEventListener('click',()=>{
 const code=$('couponCode').value.trim().toUpperCase();const base=(bookingDraft?.outbound?.fare||0)+(bookingDraft?.return?.fare||0);let pct=0,msg='';
 if(code==='FIRST10'){pct=10;msg='FIRST10 applied: 10% discount applied.';}
 else if(code==='RETURN15'&&activeReturnDate){pct=15;msg='RETURN15 applied: 15% discount applied to the return booking.';}
 else {appliedCoupon=null;$('couponMessage').textContent=code==='RETURN15'?'RETURN15 is available only for return bookings.':'Coupon not recognized. Try FIRST10 or RETURN15.';$('couponMessage').classList.remove('applied');$('discountFare').textContent='−'+money(0);$('passengerTotal').textContent=money(base);return;}
 appliedCoupon={code,pct};$('couponMessage').textContent=msg;$('couponMessage').classList.add('applied');$('discountFare').textContent='−'+money(Math.round(base*pct/100));$('passengerTotal').textContent=money(base-Math.round(base*pct/100));
});
$('passengerForm').addEventListener('submit',e=>{
 e.preventDefault();const name=$('passengerName').value.trim(),age=Number($('passengerAge').value),phone=$('passengerPhone').value.trim();if(!name||age<1||age>110||!/^\d{10}$/.test(phone)){showToast('Please check passenger details.');return;}
 const legs=[bookingDraft.outbound, ...(activeReturnDate?[bookingDraft.return]:[])].filter(Boolean);if(activeReturnDate&&!bookingDraft.return){showToast('Please select your return seats first.');return;}
 const baseTotal=legs.reduce((sum,l)=>sum+l.fare,0);const discount=appliedCoupon?Math.round(baseTotal*appliedCoupon.pct/100):0;
 const id='BT'+Date.now().toString().slice(-8);const booking={id,name,age,phone,boarding:$('boardingPoint').value,createdAt:new Date().toISOString(),status:'Confirmed',legs,total:Math.max(0,baseTotal-discount),baseTotal,discount,coupon:appliedCoupon?.code||'',returnDate:activeReturnDate||''};
 // Validate seats again before reserving to reduce accidental duplicate selections.
 for(const leg of legs){const key=`${leg.route.id}|${leg.date}|${leg.legKey||'outbound'}`;const occupied=seatBookings[key]||[];if(leg.seats.some(s=>occupied.includes(s))){showToast('A selected seat was just booked. Please reopen booking and choose available seats.');closeModal('bookingModal');return;}}
 for(const leg of legs){const key=`${leg.route.id}|${leg.date}|${leg.legKey||'outbound'}`;seatBookings[key]=[...(seatBookings[key]||[]),...leg.seats];}
 bookings.unshift(booking);save();closeModal('bookingModal');renderBookings();renderAdmin();showTicket(booking);$('passengerForm').reset();
});
function showTicket(b){$('ticketContent').innerHTML=`<div class="ticket-header"><div><div class="section-kicker">BUS TICKET E-TICKET</div><h2 id="ticketTitle">Booking confirmed</h2></div><span class="ticket-status">✓ BOOKING CONFIRMED</span></div>${b.legs.map(l=>`<div class="ticket-route"><div><strong>${esc(l.route.from)}</strong><small>${formatDate(l.date)} · ${esc(l.route.departure)}</small></div><span class="route-mid">→</span><div style="text-align:right"><strong>${esc(l.route.to)}</strong><small>${esc(l.route.duration)}</small></div></div>`).join('')}<div class="ticket-qr-row"><div><strong>Booking QR</strong><p class="hint">Use this code as the booking reference for this website.</p></div><div id="ticketQr" class="ticket-qr" aria-label="Booking QR code"></div></div><div class="ticket-details"><div><span>BOOKING ID</span><strong class="ticket-id">${esc(b.id)}</strong></div><div><span>PASSENGER</span><strong>${esc(b.name)} · ${b.age} yrs</strong></div><div><span>MOBILE</span><strong>${esc(b.phone)}</strong></div><div><span>BOARDING POINT</span><strong>${esc(b.boarding)}</strong></div><div><span>SEATS</span><strong>${b.legs.map(l=>l.seats.length?l.seats.join(', '):'Not selected').map(esc).join(' / ')}</strong></div><div><span>BUS TYPE</span><strong>${b.legs.map(l=>esc(l.route.type)).join(' / ')}</strong></div><div><span>BASE FARE</span><strong>${money(b.baseTotal??b.total)}</strong></div><div><span>COUPON / DISCOUNT</span><strong>${esc(b.coupon||'—')} · ${money(b.discount||0)}</strong></div><div><span>TOTAL DEMO FARE</span><strong>${money(b.total)}</strong></div><div><span>STATUS</span><strong>Confirmed (demo)</strong></div></div><p class="hint">This is a sample e-ticket only. No actual bus, operator or payment is confirmed.</p>`;openModal('ticketModal');const qr=$('ticketQr');qr.innerHTML='';if(window.QRCode){new QRCode(qr,{text:JSON.stringify({bookingId:b.id,route:b.legs.map(l=>`${l.route.from}-${l.route.to}`),date:b.legs[0].date}),width:92,height:92});}else{qr.innerHTML='<small>QR library needs internet</small>';} }
$('downloadTicket')?.addEventListener('click',()=>{
 const content=$('ticketContent').innerHTML;
 const w=window.open('','_blank');if(!w){showToast('Allow pop-ups to print or save your ticket.');return;}
 w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>Bus Ticket Booking Website - E-Ticket</title><style>body{font:14px Arial,sans-serif;color:#111827;padding:24px;max-width:850px;margin:auto}h2{margin:0 0 12px}.ticket-route,.ticket-details{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:14px 0}.ticket-details>div{border:1px solid #ddd;padding:10px;border-radius:8px}.ticket-details span,.ticket-details strong{display:block}.ticket-details span{font-size:11px;color:#666;margin-bottom:5px}.ticket-qr{margin:10px 0}@media print{body{padding:0}}</style></head><body><h1>Bus Ticket Booking Website</h1>${content}<script>window.onload=()=>window.print()<\/script></body></html>`);
 w.document.close();
});
$('printTicket').addEventListener('click',()=>{
 if(window.jspdf?.jsPDF){const b=bookings.find(x=>$('ticketContent').textContent.includes(x.id));if(b){const doc=new window.jspdf.jsPDF();doc.setFontSize(18);doc.text('Bus Ticket Booking Website - Demo E-Ticket',15,18);doc.setFontSize(11);doc.text(`Booking ID: ${b.id}`,15,31);doc.text(`Passenger: ${b.name}`,15,40);doc.text(`Mobile: ${b.phone}`,15,49);let y=62;b.legs.forEach((l,i)=>{doc.text(`${i+1}. ${l.route.from} to ${l.route.to} | ${l.date} | ${l.route.departure}`,15,y);y+=9;doc.text(`Seats: ${l.seats.length?l.seats.join(', '):'Not selected'} | ${l.route.type}`,20,y);y+=9;});doc.text(`Base fare: ${money(b.baseTotal??b.total)}`,15,y+3);doc.text(`Discount: ${money(b.discount||0)} (${b.coupon||'no coupon'})`,15,y+12);doc.setFontSize(14);doc.text(`Demo total: ${money(b.total)}`,15,y+24);doc.setFontSize(9);doc.text('Student demo only. No actual bus booking or payment is confirmed.',15,y+36);doc.save(`Bus Ticket Booking Website-${b.id}.pdf`);return;}}
 window.print();
});
function renderBookings(){
 const el=$('bookingList');if(!bookings.length){el.innerHTML='<div class="empty-state"><span>🎟️</span><strong>No bookings yet</strong><p>Your confirmed demo tickets will appear here.</p></div>';return;}
 el.innerHTML=bookings.map(b=>`<article class="booking-item"><div><strong>${esc(b.legs.map(l=>l.route.from+' → '+l.route.to).join(' + '))}</strong><p>${esc(b.id)} · ${formatDate(b.legs[0].date)} · ${esc(b.name)} · ${esc(b.status)}</p></div><div class="booking-price">${money(b.total)}</div><div class="booking-actions"><button class="outline-btn" data-view-ticket="${esc(b.id)}">View ticket</button><button class="outline-btn" data-cancel-booking="${esc(b.id)}">Cancel demo</button></div></article>`).join('');
 el.querySelectorAll('[data-view-ticket]').forEach(btn=>btn.addEventListener('click',()=>{const b=bookings.find(x=>x.id===btn.dataset.viewTicket);if(b)showTicket(b)}));
 el.querySelectorAll('[data-cancel-booking]').forEach(btn=>btn.addEventListener('click',()=>cancelBooking(btn.dataset.cancelBooking)));
}
function cancelBooking(id){
 const b=bookings.find(x=>x.id===id);if(!b)return;if(!confirm('Cancel this demo booking?'))return;
 b.status='Cancelled (demo)';
 b.legs.forEach((l,idx)=>{if(!l.seats.length)return;const legName=idx===0?'outbound':'return';const key=`${l.route.id}|${l.date}|${legName}`;seatBookings[key]=(seatBookings[key]||[]).filter(s=>!l.seats.includes(s));});
 save();renderBookings();renderAdmin();showToast('Demo booking cancelled.');
}
$('refreshBookings').addEventListener('click',renderBookings);

$('adminOpen').addEventListener('click',()=>{renderAdmin();openModal('adminModal')});
$('routeForm').addEventListener('submit',e=>{e.preventDefault();const from=$('adminFrom').value.trim(),to=$('adminTo').value.trim(),fare=Number($('adminFare').value);if(!from||!to||from.toLowerCase()===to.toLowerCase()||fare<=0){showToast('Enter valid route details.');return;}if(!maharashtraCities.has(from)||!maharashtraCities.has(to)){showToast('Only Maharashtra city routes are allowed. Use a listed city name.');return;}routes.push({id:'r'+Date.now(),from,to,operator:$('adminOperator')?$('adminOperator').value.trim():'Maharashtra Bus Service (demo)',type:$('adminType').value,fare,departure:$('adminDeparture').value,duration:$('adminDuration').value.trim(),arrival:$('adminArrival').value});save();cityOptions();renderAdmin();if(!$('resultsSection').classList.contains('hidden'))renderBuses();e.target.reset();$('adminFrom').value='Latur';$('adminDeparture').value='21:00';$('adminDuration').value='6h 30m';$('adminArrival').value='03:30';showToast('Route added to this browser.');});
function renderAdmin(){
 $('adminRouteCount').textContent=routes.length;$('adminBookingCount').textContent=bookings.length;
 const confirmed=bookings.filter(b=>!String(b.status).startsWith('Cancelled')).length;$('adminConfirmedCount').textContent=confirmed;$('adminRevenue').textContent=money(bookings.filter(b=>!String(b.status).startsWith('Cancelled')).reduce((s,b)=>s+(b.total||0),0));
 const routeCounts=routes.map(r=>({label:r.from+' → '+r.to,count:bookings.filter(b=>!String(b.status).startsWith('Cancelled')&&b.legs.some(l=>l.route.id===r.id)).length})).sort((a,b)=>b.count-a.count).slice(0,5);const maxCount=Math.max(1,...routeCounts.map(x=>x.count));$('analyticsBars').innerHTML=routeCounts.map(x=>`<div class="analytics-row"><span>${esc(x.label)}</span><div class="analytics-track"><div class="analytics-fill" style="width:${(x.count/maxCount)*100}%"></div></div><b>${x.count}</b></div>`).join('');
 const coveredCities=[...new Set(routes.flatMap(r=>[r.from,r.to]))].sort((a,b)=>a.localeCompare(b));
 $('adminCityCoverage').innerHTML=coveredCities.map(city=>`<span class="admin-city-chip">📍 ${esc(city)}</span>`).join('');
 $('adminRouteList').innerHTML=routes.map(r=>`<div class="admin-route-row"><div><strong>${esc(r.from)} → ${esc(r.to)}</strong><small>${esc(r.type)} · Dep ${esc(r.departure)} · Arr ${esc(r.arrival||'—')} · ${esc(r.duration)} · ${money(r.fare)}</small></div><button class="danger-btn" data-delete-route="${esc(r.id)}">Delete</button></div>`).join('');
 $('adminRouteList').querySelectorAll('[data-delete-route]').forEach(b=>b.addEventListener('click',()=>{if(!confirm('Delete this sample route?'))return;routes=routes.filter(r=>r.id!==b.dataset.deleteRoute);save();cityOptions();renderAdmin();if(!$('resultsSection').classList.contains('hidden'))renderBuses();showToast('Route deleted.');}));
 $('adminBookingList').innerHTML=bookings.slice(0,5).map(b=>`<div class="admin-route-row"><div><strong>${esc(b.name)} · ${esc(b.id)}</strong><small>${esc(b.legs.map(l=>l.route.from+' → '+l.route.to).join(' + '))} · ${money(b.total)} · ${esc(b.status)}</small></div></div>`).join('')||'<p class="hint">No bookings yet.</p>';
}
function renderReviews(){const el=$('reviewList');if(!reviews.length){el.innerHTML='<p class="hint">No reviews yet. Be the first to leave feedback.</p>';return;}el.innerHTML=reviews.slice(0,8).map(r=>`<article class="review-card"><div style="display:flex;justify-content:space-between;gap:10px"><strong>${esc(r.name)}</strong><span class="review-stars">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span></div><p>${esc(r.message)}</p></article>`).join('');}
$('reviewForm').addEventListener('submit',e=>{e.preventDefault();reviews.unshift({name:$('reviewName').value.trim(),rating:Number($('reviewRating').value),message:$('reviewMessage').value.trim(),date:new Date().toISOString()});localStorage.setItem(STORAGE.reviews,JSON.stringify(reviews));e.target.reset();renderReviews();showToast('Thanks! Your demo review was saved in this browser.');});
$('helpForm').addEventListener('submit',e=>{e.preventDefault();helpRequests.unshift({email:$('helpEmail').value.trim(),message:$('helpMessage').value.trim(),date:new Date().toISOString()});localStorage.setItem(STORAGE.help,JSON.stringify(helpRequests));e.target.reset();showToast('Demo support request saved locally. No email was sent.');});
const translations = {
 en:{bookBus:'Book Bus',popularRoutes:'Popular Routes',myBookings:'My Bookings',cancellationTitle:'Cancellation policy',cancellationText:"In this student demo, cancelling a booking updates only your browser's saved sample data and releases its demo seats. No real operator cancellation, refund, or payment is processed."},
 mr:{bookBus:'बस बुक करा',popularRoutes:'लोकप्रिय मार्ग',myBookings:'माझी बुकिंग',cancellationTitle:'रद्द करण्याचे धोरण',cancellationText:'या विद्यार्थी डेमोमध्ये बुकिंग रद्द केल्यावर फक्त या ब्राउझरमधील नमुना माहिती बदलते आणि डेमो सीट मोकळी होते. प्रत्यक्ष बस ऑपरेटरकडे रद्द करणे, परतावा किंवा पेमेंट होत नाही.'}
};
function setLanguage(lang){const dict=translations[lang]||translations.en;document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(dict[key])el.textContent=dict[key];});document.documentElement.lang=lang==='mr'?'mr':'en';try{localStorage.setItem('btbwLanguage',lang)}catch{}}
const languageSelect=$('languageSelect');if(languageSelect){let savedLang='en';try{savedLang=localStorage.getItem('btbwLanguage')||'en'}catch{}languageSelect.value=savedLang;setLanguage(savedLang);languageSelect.addEventListener('change',()=>setLanguage(languageSelect.value));}
const themeToggle=$('themeToggle');function setTheme(dark){document.body.classList.toggle('dark-mode',dark);if(themeToggle){themeToggle.textContent=dark?'☀️':'🌙';themeToggle.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');}try{localStorage.setItem('btbwDarkMode',dark?'1':'0')}catch{}}
let savedDark=false;try{savedDark=localStorage.getItem('btbwDarkMode')==='1'}catch{}setTheme(savedDark);themeToggle?.addEventListener('click',()=>setTheme(!document.body.classList.contains('dark-mode')));
renderReviews();renderBookings();renderAdmin();

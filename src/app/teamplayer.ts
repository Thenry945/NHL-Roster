export interface ITeamPlayers {
    "id": number,
    "status": string,
    "full_name": string,
    "first_name": string,
    "last_name": string,
    "abbr_name": string,
    "height": number,
    "weight": number,
    "handedness": string,
    "position": string,
    "primary_position": string,
    "jersey_number": number,
    "experience": number,
    "college": string,
    "birth_place": string,
    "birthdate": Date
}

// {
//     "id": "441660ea-0f24-11e2-8525-18a905767e44",
//     "name": "Blues",
//     "alias": "STL",
//     "market": "St. Louis",
//     "founded": 1967,
//     "venue": {
//         "id": "14e923b7-a636-476f-b810-b15967787e3c",
//         "name": "Scottrade Center",
//         "capacity": 19150,
//         "address": "1401 Clark Ave.",
//         "city": "St. Louis",
//         "state": "MO",
//         "zip": "63103",
//         "country": "USA",
//         "time_zone": "US/Central"
//     },
//     "league": {
//         "id": "fd560107-a85b-4388-ab0d-655ad022aff7",
//         "name": "NHL",
//         "alias": "NHL"
//     },
//     "conference": {
//         "id": "64901512-9ca9-4bea-aa80-16dbcbdae230",
//         "name": "WESTERN CONFERENCE",
//         "alias": "WESTERN"
//     },
//     "division": {
//         "id": "5e868c4d-c6a3-4901-bc3c-3b7a4509e402",
//         "name": "Central",
//         "alias": "CENTRAL"
//     },
//     "coaches": [{
//         "id": "fdaaeae0-6007-452d-912a-c0a3c5d0793b",
//         "full_name": "Mike Yeo",
//         "first_name": "Mike",
//         "last_name": "Yeo",
//         "position": "Head Coach"
//     }],
//     "players": [{
//         "id": "03389a55-0296-47d3-a0e2-ae0f848cf7cf",
//         "status": "ACT",
//         "full_name": "Colton Parayko",
//         "first_name": "Colton",
//         "last_name": "Parayko",
//         "abbr_name": "C.Parayko",
//         "height": 78,
//         "weight": 226,
//         "handedness": "R",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "55",
//         "experience": "1",
//         "college": "Alaska",
//         "birth_place": "St. Albert, AB, CAN",
//         "birthdate": "1993-05-12",
//         "updated": "2016-09-25T16:00:33+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2012,
//             "round": "3",
//             "pick": "86"
//         }
//     }, {
//         "id": "0c421a8e-4695-42b1-b89f-f78a0c96ab8c",
//         "status": "ACT",
//         "full_name": "Oskar Sundqvist",
//         "first_name": "Oskar",
//         "last_name": "Sundqvist",
//         "abbr_name": "O.Sundqvist",
//         "height": 75,
//         "weight": 209,
//         "handedness": "R",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "39",
//         "experience": "0",
//         "birth_place": "Boden,, SWE",
//         "birthdate": "1994-03-23",
//         "updated": "2017-07-11T14:42:31+00:00",
//         "draft": {
//             "team_id": "4417b7d7-0f24-11e2-8525-18a905767e44",
//             "year": 2012,
//             "round": "3",
//             "pick": "81"
//         }
//     }, {
//         "id": "16d46661-808a-4dbe-b5e5-4374f49d9b4d",
//         "status": "ACT",
//         "full_name": "Joel Edmundson",
//         "first_name": "Joel",
//         "last_name": "Edmundson",
//         "abbr_name": "J.Edmundson",
//         "height": 76,
//         "weight": 207,
//         "handedness": "L",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "6",
//         "experience": "1",
//         "birth_place": "Brandon, MB, CAN",
//         "birthdate": "1993-06-28",
//         "updated": "2016-12-06T17:34:56+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2011,
//             "round": "2",
//             "pick": "46"
//         }
//     }, {
//         "id": "429246c1-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Carter Hutton",
//         "first_name": "Carter",
//         "last_name": "Hutton",
//         "abbr_name": "C.Hutton",
//         "height": 73,
//         "weight": 201,
//         "handedness": "L",
//         "position": "G",
//         "primary_position": "G",
//         "jersey_number": "40",
//         "experience": "4",
//         "college": "Massachusetts-Lowell",
//         "birth_place": "Thunder Bay, ON, CAN",
//         "birthdate": "1985-12-19",
//         "updated": "2016-09-25T16:00:31+00:00"
//     }, {
//         "id": "429decb4-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Jay Bouwmeester",
//         "first_name": "Jay",
//         "last_name": "Bouwmeester",
//         "abbr_name": "J.Bouwmeester",
//         "height": 76,
//         "weight": 212,
//         "handedness": "L",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "19",
//         "experience": "13",
//         "birth_place": "Edmonton, AB, CAN",
//         "birthdate": "1983-09-27",
//         "updated": "2016-09-25T16:00:30+00:00",
//         "draft": {
//             "team_id": "4418464d-0f24-11e2-8525-18a905767e44",
//             "year": 2002,
//             "round": "1",
//             "pick": "3"
//         }
//     }, {
//         "id": "42a7b3a4-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Paul Stastny",
//         "first_name": "Paul",
//         "last_name": "Stastny",
//         "abbr_name": "P.Stastny",
//         "height": 72,
//         "weight": 205,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "26",
//         "experience": "10",
//         "college": "Denver",
//         "birth_place": "Quebec City, QC, CAN",
//         "birthdate": "1985-12-27",
//         "updated": "2017-02-20T18:44:22+00:00",
//         "draft": {
//             "team_id": "4415ce44-0f24-11e2-8525-18a905767e44",
//             "year": 2005,
//             "round": "2",
//             "pick": "44"
//         }
//     }, {
//         "id": "42b1ad1c-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Magnus Paajarvi",
//         "first_name": "Magnus",
//         "last_name": "Paajarvi",
//         "abbr_name": "M.Paajarvi",
//         "height": 75,
//         "weight": 208,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "56",
//         "experience": "6",
//         "birth_place": "Norrkoping,, SWE",
//         "birthdate": "1991-04-12",
//         "updated": "2017-02-26T21:03:18+00:00",
//         "draft": {
//             "team_id": "4415ea6c-0f24-11e2-8525-18a905767e44",
//             "year": 2009,
//             "round": "1",
//             "pick": "10"
//         }
//     }, {
//         "id": "42b729b5-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Kyle Brodziak",
//         "first_name": "Kyle",
//         "last_name": "Brodziak",
//         "abbr_name": "K.Brodziak",
//         "height": 74,
//         "weight": 212,
//         "handedness": "R",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "28",
//         "experience": "11",
//         "birth_place": "St. Paul, AB, CAN",
//         "birthdate": "1984-05-25",
//         "updated": "2017-02-17T19:46:42+00:00",
//         "draft": {
//             "team_id": "4415ea6c-0f24-11e2-8525-18a905767e44",
//             "year": 2003,
//             "round": "7",
//             "pick": "214"
//         }
//     }, {
//         "id": "42bd7e89-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Nate Prosser",
//         "first_name": "Nate",
//         "last_name": "Prosser",
//         "abbr_name": "N.Prosser",
//         "height": 74,
//         "weight": 203,
//         "handedness": "R",
//         "position": "D",
//         "primary_position": "D",
//         "experience": "7",
//         "college": "Colorado College",
//         "birth_place": "Elk River, MN, USA",
//         "birthdate": "1986-05-07",
//         "updated": "2017-08-03T15:42:05+00:00"
//     }, {
//         "id": "42cf65c7-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Patrik Berglund",
//         "first_name": "Patrik",
//         "last_name": "Berglund",
//         "abbr_name": "P.Berglund",
//         "height": 75,
//         "weight": 217,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "21",
//         "experience": "8",
//         "birth_place": "Vasteras,, SWE",
//         "birthdate": "1988-06-02",
//         "updated": "2016-09-25T16:00:35+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2006,
//             "round": "1",
//             "pick": "25"
//         },
//         "injuries": [{
//             "id": "88521f43-fc6b-437e-97f2-f47b8a81a1b7",
//             "comment": "The Blues announced Berglund had surgery to repair a dislocated shoulder on Tuesday (June 27) and is expected to need five-to-six months to recover.",
//             "desc": "Shoulder",
//             "status": "Out",
//             "start_date": "2017-06-28",
//             "update_date": "2017-06-28"
//         }]
//     }, {
//         "id": "42d0c7ba-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Vladimir Sobotka",
//         "first_name": "Vladimir",
//         "last_name": "Sobotka",
//         "abbr_name": "V.Sobotka",
//         "height": 70,
//         "weight": 197,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "71",
//         "experience": "6",
//         "birth_place": "Trebic,, CZE",
//         "birthdate": "1987-07-02",
//         "updated": "2017-04-06T22:08:58+00:00",
//         "draft": {
//             "team_id": "4416ba1a-0f24-11e2-8525-18a905767e44",
//             "year": 2005,
//             "round": "4",
//             "pick": "106"
//         }
//     }, {
//         "id": "42d111d9-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Alexander Steen",
//         "first_name": "Alexander",
//         "last_name": "Steen",
//         "abbr_name": "A.Steen",
//         "height": 71,
//         "weight": 212,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "20",
//         "experience": "11",
//         "birth_place": "Winnipeg, MB, CAN",
//         "birthdate": "1984-03-01",
//         "updated": "2016-09-25T16:00:35+00:00",
//         "draft": {
//             "team_id": "441730a9-0f24-11e2-8525-18a905767e44",
//             "year": 2002,
//             "round": "1",
//             "pick": "24"
//         }
//     }, {
//         "id": "42d52288-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Alex Pietrangelo",
//         "first_name": "Alex",
//         "last_name": "Pietrangelo",
//         "abbr_name": "A.Pietrangelo",
//         "height": 75,
//         "weight": 210,
//         "handedness": "R",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "27",
//         "experience": "8",
//         "birth_place": "King City, ON, CAN",
//         "birthdate": "1990-01-18",
//         "updated": "2016-09-25T16:00:35+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2008,
//             "round": "1",
//             "pick": "4"
//         }
//     }, {
//         "id": "42d5f19b-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Jake Allen",
//         "first_name": "Jake",
//         "last_name": "Allen",
//         "abbr_name": "J.Allen",
//         "height": 74,
//         "weight": 195,
//         "handedness": "L",
//         "position": "G",
//         "primary_position": "G",
//         "jersey_number": "34",
//         "experience": "3",
//         "birth_place": "Fredericton, NB, CAN",
//         "birthdate": "1990-08-07",
//         "updated": "2016-09-25T16:00:34+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2008,
//             "round": "2",
//             "pick": "34"
//         }
//     }, {
//         "id": "4318e490-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Carl Gunnarsson",
//         "first_name": "Carl",
//         "last_name": "Gunnarsson",
//         "abbr_name": "C.Gunnarsson",
//         "height": 74,
//         "weight": 196,
//         "handedness": "L",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "4",
//         "experience": "7",
//         "birth_place": "Orebro, SWE",
//         "birthdate": "1986-11-09",
//         "updated": "2016-09-25T16:00:36+00:00",
//         "draft": {
//             "team_id": "441730a9-0f24-11e2-8525-18a905767e44",
//             "year": 2007,
//             "round": "7",
//             "pick": "194"
//         }
//     }, {
//         "id": "4335a201-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Brayden Schenn",
//         "first_name": "Brayden",
//         "last_name": "Schenn",
//         "abbr_name": "B.Schenn",
//         "height": 73,
//         "weight": 190,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "RW",
//         "jersey_number": "10",
//         "experience": "6",
//         "birth_place": "Saskatoon, SK, CAN",
//         "birthdate": "1991-08-22",
//         "updated": "2017-07-20T19:06:06+00:00",
//         "draft": {
//             "team_id": "44151f7a-0f24-11e2-8525-18a905767e44",
//             "year": 2009,
//             "round": "1",
//             "pick": "5"
//         }
//     }, {
//         "id": "4341950f-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Robert Bortuzzo",
//         "first_name": "Robert",
//         "last_name": "Bortuzzo",
//         "abbr_name": "R.Bortuzzo",
//         "height": 76,
//         "weight": 215,
//         "handedness": "R",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "41",
//         "experience": "5",
//         "birth_place": "Thunder Bay, ON, CAN",
//         "birthdate": "1989-03-18",
//         "updated": "2017-01-12T20:57:32+00:00",
//         "draft": {
//             "team_id": "4417b7d7-0f24-11e2-8525-18a905767e44",
//             "year": 2007,
//             "round": "3",
//             "pick": "78"
//         }
//     }, {
//         "id": "43558a28-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Chris Thorburn",
//         "first_name": "Chris",
//         "last_name": "Thorburn",
//         "abbr_name": "C.Thorburn",
//         "height": 75,
//         "weight": 235,
//         "handedness": "R",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "22",
//         "experience": "10",
//         "birth_place": "Sault Ste. Marie, ON, CAN",
//         "birthdate": "1983-06-03",
//         "updated": "2017-07-11T14:42:38+00:00",
//         "draft": {
//             "team_id": "4416d559-0f24-11e2-8525-18a905767e44",
//             "year": 2001,
//             "round": "2",
//             "pick": "50"
//         }
//     }, {
//         "id": "43660a5f-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Scottie Upshall",
//         "first_name": "Scottie",
//         "last_name": "Upshall",
//         "abbr_name": "S.Upshall",
//         "height": 72,
//         "weight": 200,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "10",
//         "experience": "13",
//         "birth_place": "Fort Mcmurray, AB, CAN",
//         "birthdate": "1983-10-07",
//         "updated": "2016-09-25T16:00:31+00:00",
//         "draft": {
//             "team_id": "441643b7-0f24-11e2-8525-18a905767e44",
//             "year": 2002,
//             "round": "1",
//             "pick": "6"
//         }
//     }, {
//         "id": "436dfe41-0f24-11e2-8525-18a905767e44",
//         "status": "ACT",
//         "full_name": "Jaden Schwartz",
//         "first_name": "Jaden",
//         "last_name": "Schwartz",
//         "abbr_name": "J.Schwartz",
//         "height": 70,
//         "weight": 190,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "17",
//         "experience": "5",
//         "college": "Colorado College",
//         "birth_place": "Melfort, SK, CAN",
//         "birthdate": "1992-06-25",
//         "updated": "2016-10-20T18:30:11+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2010,
//             "round": "1",
//             "pick": "14"
//         }
//     }, {
//         "id": "4a5a7feb-5f4e-11e2-9e6b-f4ce4684ea4c",
//         "status": "ACT",
//         "full_name": "Vladimir Tarasenko",
//         "first_name": "Vladimir",
//         "last_name": "Tarasenko",
//         "abbr_name": "V.Tarasenko",
//         "height": 72,
//         "weight": 219,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "RW",
//         "jersey_number": "91",
//         "experience": "4",
//         "birth_place": "Yaroslavl,, RUS",
//         "birthdate": "1991-12-13",
//         "updated": "2016-09-25T16:00:34+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2010,
//             "round": "1",
//             "pick": "16"
//         }
//     }, {
//         "id": "58f4e5f9-6811-48b7-b180-02a433ebf1a3",
//         "status": "ACT",
//         "full_name": "Ivan Barbashev",
//         "first_name": "Ivan",
//         "last_name": "Barbashev",
//         "abbr_name": "I.Barbashev",
//         "height": 72,
//         "weight": 180,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "49",
//         "birth_place": "Moscow,, RUS",
//         "birthdate": "1995-12-14",
//         "updated": "2017-02-27T22:42:16+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2014,
//             "round": "2",
//             "pick": "33"
//         }
//     }, {
//         "id": "6473e15d-8efc-4d95-a30e-9e2fbc17768c",
//         "status": "IR",
//         "full_name": "Robby Fabbri",
//         "first_name": "Robby",
//         "last_name": "Fabbri",
//         "abbr_name": "R.Fabbri",
//         "height": 70,
//         "weight": 180,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "LW",
//         "jersey_number": "15",
//         "experience": "1",
//         "birth_place": "Mississauga, ON, CAN",
//         "birthdate": "1996-01-22",
//         "updated": "2017-02-05T18:31:55+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2014,
//             "round": "1",
//             "pick": "21"
//         },
//         "injuries": [{
//             "id": "4911fbb0-696e-4085-b663-93682cbb704d",
//             "comment": "The Blues announced that Fabbri will miss the remainder of the 2016-17 season with an ACL injury.",
//             "desc": "Knee",
//             "status": "Out",
//             "start_date": "2017-02-05",
//             "update_date": "2017-02-05"
//         }]
//     }, {
//         "id": "868df5e1-02b9-455d-8348-0bc57e6282c3",
//         "status": "ACT",
//         "full_name": "Jordan Schmaltz",
//         "first_name": "Jordan",
//         "last_name": "Schmaltz",
//         "abbr_name": "J.Schmaltz",
//         "height": 74,
//         "weight": 190,
//         "handedness": "R",
//         "position": "D",
//         "primary_position": "D",
//         "jersey_number": "43",
//         "college": "North Dakota",
//         "birth_place": "Madison, WI, USA",
//         "birthdate": "1993-10-08",
//         "updated": "2017-05-04T15:46:50+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2012,
//             "round": "1",
//             "pick": "25"
//         }
//     }, {
//         "id": "d503fbaa-76d2-11e2-a3e0-f4ce4684ea4c",
//         "status": "ACT",
//         "full_name": "Beau Bennett",
//         "first_name": "Beau",
//         "last_name": "Bennett",
//         "abbr_name": "B.Bennett",
//         "height": 74,
//         "weight": 195,
//         "handedness": "R",
//         "position": "F",
//         "primary_position": "RW",
//         "jersey_number": "78",
//         "experience": "3",
//         "college": "Denver",
//         "birth_place": "Gardena, CA, USA",
//         "birthdate": "1991-11-27",
//         "updated": "2017-07-11T14:42:34+00:00",
//         "draft": {
//             "team_id": "4417b7d7-0f24-11e2-8525-18a905767e44",
//             "year": 2010,
//             "round": "1",
//             "pick": "20"
//         }
//     }, {
//         "id": "df87b465-825e-4810-b31b-baa59bd211af",
//         "status": "ACT",
//         "full_name": "Zach Sanford",
//         "first_name": "Zach",
//         "last_name": "Sanford",
//         "abbr_name": "Z.Sanford",
//         "height": 75,
//         "weight": 185,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "C",
//         "jersey_number": "12",
//         "college": "Boston College",
//         "birth_place": "Auburn, NH, USA",
//         "birthdate": "1994-11-09",
//         "updated": "2017-07-11T14:42:45+00:00",
//         "draft": {
//             "team_id": "4417eede-0f24-11e2-8525-18a905767e44",
//             "year": 2013,
//             "round": "2",
//             "pick": "61"
//         }
//     }, {
//         "id": "ff7a61ec-a229-11e2-a01b-f4ce4684ea4c",
//         "status": "ACT",
//         "full_name": "Dmitrij Jaskin",
//         "first_name": "Dmitrij",
//         "last_name": "Jaskin",
//         "abbr_name": "D.Jaskin",
//         "height": 74,
//         "weight": 217,
//         "handedness": "L",
//         "position": "F",
//         "primary_position": "RW",
//         "jersey_number": "23",
//         "experience": "4",
//         "birth_place": "Omsk,, RUS",
//         "birthdate": "1993-03-23",
//         "updated": "2016-09-25T16:00:30+00:00",
//         "draft": {
//             "team_id": "441660ea-0f24-11e2-8525-18a905767e44",
//             "year": 2011,
//             "round": "2",
//             "pick": "41"
//         }
//     }]
// }
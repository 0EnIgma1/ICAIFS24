export default [
  {
    name: `Home`,
    route: `/`,
    key: `home`,
    icon: `home`,
  },
  {
    name: `Important Dates`,
    route: `/program/dates`,
    key: `dates`,
  },
  {
    name: `Call For Paper`,
    route: `/call`,
    key: `call`,
  },
  {
    name: `Registration`,
    route: `/submission`,
    key: `submission`,
  },
  {
    name: `Submissions`,
    route: `/submission_guide`,
    key: `submissions`,
    icon: `file`,
  },
  {
    name: `Publication`,
    route: `/submission`,
    key: `publication`,
    icon: `file`,
  },
  {
    name: `Organization`,
    route: [
      {
        name2: `Program Committee`,
        route2: `/program/committee`,
        key2: `committee`,
      },
      {
        name2: `Organizer`,
        route2: `/program/organizer`,
        key2: `organizer`,
      },
      {
        name2: `Advisory Committee`,
        route2: `/program/advisory-committee`,
        key2: `advisorycommittee`,
      },
      {
        name2: `Contacts`,
        route2: `/program/contacts`,
        key2: `contacts`,
      },
    ],
    key: `organization`,
    icon: `globe`,
  },
  {
    name: `Keynote Speakers`,
    route: `/speakers/keynote`,
    key: `keynote`,
  },
  {
    name: `Venue`,
    route: `/venue`,
    key: `venue`,
    icon: `nav`,
  },
 
];

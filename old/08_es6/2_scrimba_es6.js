// Destructuring objects
const demoObject = {
  personName: "john doe",
  title: "player",
  more: {
    club: "demo club",
    designation: "football player",
    moreInfo: {
      moreNmore: {
        moreNmoreNmore: {
          height: "5.6",
        },
      },
    },
  },
  address: {
    city: "demo city",
    home: "121/A,Road",
  },
};
const {
  personName,
  title,
  more: { club, designation },
  address: { city, home },
  more: {
    moreInfo: {
      moreNmore: {
        moreNmoreNmore: { height },
      },
    },
  },
} = demoObject;
console.log(
  `${personName} (height:${height}) plays for ${club} who lives in ${city}`
);

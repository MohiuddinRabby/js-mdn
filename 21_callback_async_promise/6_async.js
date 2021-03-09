const hasMeeting = false;
const meeting = new Promise((resolve, reject) => {
  // do stuff
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Morning meeting",
      place: "Zoom",
      time: "10.00 am",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting has already fixed"));
  }
});
// meeting
//   .then((res) => {
//     //resolve data
//     console.log(res);
//   })
//   .catch((err) => {
//     //reject data
//     console.log(err.message);
//   });
const myMeeting = async () => {
  const getMeetingDetails = await meeting;
  console.log(getMeetingDetails);
};
myMeeting();

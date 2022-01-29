const projectLinks = [
  "https://cryptic-fjord-20559.herokuapp.com/",
  "https://safe-savannah-45972.herokuapp.com/",
  "https://salty-sea-13355.herokuapp.com/groups",
  "https://dannylivechatapp.herokuapp.com/",
  "https://lculatordannison.herokuapp.com/",
];
const pingLiveApps = () => {
  for (let i = 0; i < projectLinks.length; i += 1) {
    const p = new Ping();
    p.ping(projectLinks[i], function (err, data) {});
  }
};

export default pingLiveApps;

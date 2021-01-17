import React from "react";

function Profile({ name, email}) {
  return (
    <div>
      <h5>name: {name}</h5>
      <h6>email: {email}</h6>
    </div>
  )
}

const userProfile = [
  {
    name: "Rigyeong",
    email: "cute@cute.co"
  },
  {
    name: "Park Kim",
    email: "yeah@kane.kr"
  },
  {
    name: "kim Ba Bo",
    email: "noRajo@fjdo.324"
  }
]

function App() {
  return (
    <div>
      {userProfile.map(pf => (
          <Profile name={pf.name} email={pf.email} />
      ))}
    </div>
  );
}

export default App;

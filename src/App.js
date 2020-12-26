import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <button className="app__title">24 Task</button>
        <h1 className="app__hire">Hire</h1>
        <button className="app__remote">Remotely</button>
        <div className="user__profile">
          <Profile
            title="Developer"
            salary="50"
            avatar="https://instagram.fktm7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117744670_378222063145290_1730339332200529488_n.jpg?_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_ohc=rj5hObK9i8UAX-seNvh&tp=1&oh=55611de4ed3d3ff0e24f68d9169886be&oe=600F2D5C"
          />
          <Profile
            title="Designer"
            salary="30"
            avatar="https://instagram.fktm7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/33119537_945162538984670_5423740252495806464_n.jpg?_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_ohc=sGMViDFjw90AX9XYFgh&tp=1&oh=784144c8a72ed388a19b45ce6ac55e21&oe=60113495"
          />
          <Profile
            title="Writer"
            salary="10"
            avatar="https://instagram.fktm7-1.fna.fbcdn.net/v/t51.2885-19/s150x150/36746509_1043563809134168_6270841909325856768_n.jpg?_nc_ht=instagram.fktm7-1.fna.fbcdn.net&_nc_ohc=78mR8ATeYisAX9jJMhb&tp=1&oh=f067879ddb2ab9ed67cfddcafff64e6e&oe=6012A75D"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

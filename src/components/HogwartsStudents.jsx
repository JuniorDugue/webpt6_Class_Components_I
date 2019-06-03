import React from 'react';
import Student from './Student';

const students = [
  {
    name: 'Harry Potter',
    identity: 'The Chosen One',
    img:
      'https://tk-assets.lambdaschool.com/534cbd01-46c2-4d0e-b617-c89127b736fc_ScreenShot2019-02-11at8.04.05PM.png',
    age: 11,
    bestFriend: 'Ron Weasley and Hermione Granger'
  },
  {
    name: 'Ron Weasley',
    identity: "Youngest Weasley brother, Harry's best friend",
    img:
      'https://tk-assets.lambdaschool.com/e0a070cc-93e3-495b-959c-47dd54244456_ScreenShot2019-02-11at8.04.22PM.png',
    age: 11,
    bestFriend: 'Harry Potter and Hermione Granger'
  },
  {
    name: 'Hermione Granger',
    identity: "Smart McSmart pants, Harry's best friend",
    img:
      'https://tk-assets.lambdaschool.com/0ccfd05b-dd91-4caa-b761-4c16452093c6_ScreenShot2019-02-11at8.04.29PM.png',
    age: 11,
    bestFriend: 'Harry Potter and Ron Weasley'
  },
  {
    name: 'Draco Malfoy',
    identity: 'Jerk face',
    img:
      'https://tk-assets.lambdaschool.com/b331b729-6858-4519-94a1-33056d17a270_ScreenShot2019-02-11at8.04.38PM.png',
    age: 11,
    bestFriend: 'Crabbe and Goyle'
  }
];

class HogwartsStudents extends React.Component {
  constructor() {
    super();
    this.state = {
      studentsOnState: students,
      student: {
        name: '',
        identity: '',
        img: '',
        age: '',
        bestFriend: ''
      }
    };
  }

  // componentDidMount() {
  //   this.updateName();
  // }

  // updateName = () => {
  //   this.setState({
  //     student: {
  //       ...this.state.student,
  //       // same as:
  //       // name: 'Dustin',
  //       // identity: '',
  //       name: 'Thierry'
  //     }
  //   });
  // };

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      student: {
        ...this.state.student,
        [event.target.name]: event.target.value
      }
    });
  };

  addStudent = event => {
    event.preventDefault();
    this.setState({
      studentsOnState: [...this.state.studentsOnState, this.state.student],
      student: {}
    });
  };

  render() {
    return (
      <div>
        <h1>Hogwarts Students:</h1>

        <div className="class-list">
          {this.state.studentsOnState.map(student => (
            <Student student={student} />
          ))}
        </div>
        <form onSubmit={this.addStudent}>
          <input
            placeholder="Name"
            value={this.state.student.name}
            onChange={this.handleChanges}
            name="name"
          />
          <input
            placeholder="Identity"
            value={this.state.student.identity}
            onChange={this.handleChanges}
            name="identity"
          />
          <input
            placeholder="Image"
            value={this.state.student.img}
            onChange={this.handleChanges}
            name="img"
          />
          <input
            placeholder="Age"
            value={this.state.student.age}
            onChange={this.handleChanges}
            name="age"
          />
          <input
            placeholder="Best Friend"
            value={this.state.student.bestFriend}
            onChange={this.handleChanges}
            name="bestFriend"
          />
          <button>Add Student</button>
        </form>
      </div>
    );
  }
}

export default HogwartsStudents;

import React, { Component } from "react";
import Scores from "./Scoress";

class ListOfStudents extends Component {
  render(props) {
    return(
      <div>
        {this.props.ListOfStudents.map(student =>
          <div key={`${student.name}`}> 
            <h3>{student.name}</h3> 
            <p>{student.bio}</p> 
            <Scores scores={student.scores} />
          </div>
        )}
      </div>
    );
  }
}

export default ListOfStudents;
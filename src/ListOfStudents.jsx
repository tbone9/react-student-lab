import React, { Component } from "react";
import Score from "./Score";

class ListOfStudents extends Component {
  render(props) {
    return(
      <div>
        {this.props.ListOfStudents.map(student =>
          <div key={`${student.name}`}> 
            <h3>{student.name}</h3> 
            <p>{student.bio}</p> 
            <Score scores={student.scores} />
          </div>
        )}
      </div>
    );
  }
}

export default ListOfStudents;
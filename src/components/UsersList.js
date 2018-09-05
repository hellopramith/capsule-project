import React, { Component } from 'react'

class UsersList extends Component {

  render() {
    if (this.props.users) {
      return <ul>
        {this.props.users.map((user, index) => {
          if (user.id === this.props.currentUser.id) {
            return (
              <li key={user.id}>
              <strong>{user.name}</strong>
              </li>
            )
          }
          return (
            <li key={user.id}>
             {user.name}
            </li>
          )
        })}
      </ul>
    } else {
      return <p>Loading...</p>
    }
  }
}

export default UsersList;
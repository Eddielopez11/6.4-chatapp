import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      messages: [
        {
          sender: "eddie",
          message: "its dat boi"
        }
      ]
    }
  },
  render() {
    return (
      <section>
        <div>
          <ul>
            {
              this.state.messages.map((message, i) => {
                return <li key={i}>{message.sender}: {message.message}</li>
              })
            }
          </ul>
        </div>
        <form method="POST"
              action="#"
              onSubmit={this.onMessageSend}>
          <input type="text"
                 name="message"
                 placeholder="your message"
                 ref="message"/>
          <input type="submit"
                 value="Send"/>
        </form>
      </section>
    )
  }
})

import React from 'react'

export default React.createClass({
  render() {
    return (
      <section>
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

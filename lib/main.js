import React from 'react'

export default React.createClass({
  getInitialState() {
    return {
      messages: []
    }
  },
  componentDidMount() {
    setInterval(() => {
     this.getMessages()
   }, 2000)
  },
  getMessages() {
    var xhr = new XMLHttpRequest()
    xhr.addEventListener("load", (e) => {
      var responseJSON = JSON.parse(e.target.response)
      this.setState({
        messages: responseJSON
      })
    })
    xhr.open("GET", "http://tiny-tiny.herokuapp.com/collections/eddielopez-chatapp-test")
    xhr.send()
  },
  onMessageSend(e) {
    e.preventDefault();
    var currentMessage = this.refs.message.value

    var newMessageStringified = JSON.stringify({
      sender: "eddie",
      message: currentMessage
    });
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", (e)=>{
      var responseJSON = JSON.parse(e.target.response);
      this.getMessages()
    });
    this.refs.message.value = '';
    xhr.open("POST", "http://tiny-tiny.herokuapp.com/collections/eddielopez-chatapp-test")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(newMessageStringified);
  },
  render() {
    return (
      <section className="chatApp">
        <div className="chatApp__messages">
            {
              this.state.messages.map((message, i) => {
                return <div key={i} className="chatApp__message"><h4 className="sender">{message.sender}: </h4> <p className="message">{message.message}</p></div>
              }).reverse()
            }
        </div>
        <form method=""
              action="#"
              onSubmit={this.onMessageSend}
              className="chatApp__form">
          <input type="text"
                 name="message"
                 placeholder="your message"
                 autoComplete="off"
                 ref="message"
                 className="chatApp__textInput"/>
          <input type="submit"
                 name="submit"
                 value="Send"
                 className="chatApp__send"/>
        </form>
      </section>
    )
  }
})

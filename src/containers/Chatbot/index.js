const Chatbot = () => {
  return (
    <div id="chatbot">
      <div className="bot-position">
        <div className="chat">
          <div className="contact bar">
            <div className="pic stark"></div>
            <div className="name">TutTech</div>
            <div className="seen">Today at 12:56</div>
          </div>
          <div className="messages" id="chat">
            <div className="time">Today at 11:41</div>
            <div className="message parker">
              Hey, man! What's up, Mr Stark? 👋
            </div>
            <div className="message stark">
              Kid, where'd you come from?
            </div>
            <div className="message parker">Field trip! 🤣</div>
            <div className="message parker">
              Uh, what is this guy's problem, Mr. Stark? 🤔
            </div>
            <div className="message stark">
              Uh, he's from space, he came here to steal a necklace
              from a wizard.
            </div>
            <div className="message stark">
              <div className="typing typing-1"></div>
              <div className="typing typing-2"></div>
              <div className="typing typing-3"></div>
            </div>
          </div>
          <div className="input-container">
            <i className="fas fa-camera"></i>
            <i className="far fa-laugh-beam"></i>
            <input
              placeholder="Type your message here!"
              type="text"
            />
            <i className="fas fa-microphone"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

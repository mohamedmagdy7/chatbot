import { useEffect, useRef, useState } from "react";

const Chatbot = () => {
  const scrollableContainerRef = useRef();
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [isBotThinking, setIsBotThinking] = useState(false);
  const initialBotSuggestions = [
    "Learn more about TrianglZ",
    "Request a business meeting"
  ];

  const handleBotSuggestionClick = (suggestion) => {
    setMessages([...messages, { sender: "user", text: suggestion }]);
    setIsBotThinking(true);
    setTimeout(() => {
      setIsBotThinking(false);
      setMessages([
        ...messages,
        { sender: "user", text: suggestion },
        {
          sender: "bot",
          text: "Let’s start, at the beginning let’s answer some questions:"
        },
        {
          sender: "bot",
          text: "What is your full name?"
        }
      ]);
    }, 2000);
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTop =
        scrollableContainerRef.current.scrollHeight;
    }
  };

  return (
    <div id="chatbot">
      <div className="bot-position">
        <div className="chat">
          <div className="contact bar">
            <div className="pic message-bot"></div>
            <div className="name">TutTech</div>
          </div>
          <div
            className="messages"
            id="chat"
            ref={scrollableContainerRef}
          >
            <div className="message message-bot">
              Greetings, I'm Tut, your friendly virtual assistant. How
              can i help you today
            </div>
            {initialBotSuggestions.map((suggestion, index) => (
              <div
                className="suggestion-bot"
                key={index}
                onClick={() => {
                  handleBotSuggestionClick(suggestion);
                }}
              >
                {suggestion}
              </div>
            ))}
            {messages?.map((message, index) => (
              <div
                className={`message message-${message.sender}`}
                key={index}
              >
                {message.text}
              </div>
            ))}
            {isBotThinking && (
              <div className="message message-bot">
                <div className="typing typing-1"></div>
                <div className="typing typing-2"></div>
                <div className="typing typing-3"></div>
              </div>
            )}
          </div>
          <form
            className="input-container"
            onSubmit={(e) => {
              e.preventDefault();
              if (userMessage === "Yara Magdy") {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
                setIsBotThinking(true);
                setTimeout(() => {
                  setIsBotThinking(false);
                  setMessages([
                    ...messages,
                    { sender: "user", text: userMessage },
                    {
                      sender: "bot",
                      text: "What’s your email address"
                    }
                  ]);
                }, 2000);
              } else if (userMessage === "yara.magdy@test.com") {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
                setIsBotThinking(true);
                setTimeout(() => {
                  setIsBotThinking(false);
                  setMessages([
                    ...messages,
                    { sender: "user", text: userMessage },
                    { sender: "bot", text: "Where are you from?" }
                  ]);
                }, 2000);
              } else if (userMessage === "Egypt") {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
                setIsBotThinking(true);
                setTimeout(() => {
                  setIsBotThinking(false);
                  setMessages([
                    ...messages,
                    { sender: "user", text: userMessage },
                    {
                      sender: "bot",
                      text: "From where have you heard about us?"
                    }
                  ]);
                }, 2000);
              } else if (userMessage === "facebook") {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
                setIsBotThinking(true);
                setTimeout(() => {
                  setIsBotThinking(false);
                  setMessages([
                    ...messages,
                    { sender: "user", text: userMessage },
                    {
                      sender: "bot",
                      text: "Do you have any previous experiences in the software industry?"
                    }
                  ]);
                }, 2000);
              } else if (userMessage === "yes") {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
                setIsBotThinking(true);
                setTimeout(() => {
                  setIsBotThinking(false);
                  setMessages([
                    ...messages,
                    { sender: "user", text: userMessage },
                    {
                      sender: "bot",
                      text: "Thank you for sharing your business idea. We're eager to assist in turning your concept into reality."
                    },
                    {
                      sender: "bot",
                      text: "I'm pleased to share that we have considerable experience in similar industries and business concept."
                    },
                    {
                      sender: "bot",
                      text: "To provide you with more insights into our work and your product, here is a demo video for your review."
                    }
                  ]);
                }, 2000);
              } else {
                setMessages([
                  ...messages,
                  { sender: "user", text: userMessage }
                ]);
              }
              setUserMessage("");
            }}
          >
            <input
              placeholder="Type your message here!"
              type="text"
              onChange={(e) => {
                setUserMessage(e.target.value);
              }}
              value={userMessage}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;

import "./chat.css"
import { useEffect, useRef, useState } from "react"
import EmojiPicker from "emoji-picker-react"

const Chat = () => {
      const [open, setOpen] = useState(false);
      const [text, setText] = useState("");

      const endRef = useRef(null)

      useEffect(() => {
            endRef.current?.scrollIntoView({behavior:"smooth"})
      },[])

      const handleEmoji = e => {
            setText(prev => prev + e.emoji);
            setOpen (false)
      };

      console.log(text)
return (
<div className='chat'>
            <div className="top">
                  <div className="user">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                              <span>Uyen N. P. Tran</span>
                              <p>User Description</p>
                        </div>
                  </div>
                  <div className="icons">
                        <img src="./phone.png" alt="" />
                        <img src="./video.png" alt="" />
                        <img src="./info.png" alt="" />
                  </div>            
      
</div>     
            <div className="center">
                  <div className="message">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message own">
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message own">
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message own">
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message">
                        <img src="./avatar.png" alt="" />
                        <div className="texts">
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div className="message own">
                        <div className="texts">
                              <img src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7363727724084953131~c5_100x100.jpeg?lk3s=a5d48078&nonce=85682&refresh_token=fff902ac0ee07b9a8b4067be1c683668&x-expires=1717610400&x-signature=8agllNeuJIv41QNgbTshOQvP7L4%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                              <p>Random Text</p>
                              <span>1 min ago</span>
                        </div>
                  </div>
                  <div ref ={endRef}>

                  </div>
            </div>            
            <div className="bottom">
                  <div className="icons">
                        <img src="./img.png" alt="" />
                        <img src="./camera.png" alt="" />
                        <img src="./mic.png" alt="" />
                  </div>
                  <input type="text"
                         placeholder="Type a message..."
                         value = {text}
                         onChange={e => setText(e.target.value)} />
                  <div className="emoji">
                        <img src="./emoji.png" alt="" onClick={() => setOpen(prev =>!prev)} />
                        <div className="picker">
                        <EmojiPicker open={open} onEmojiClick={handleEmoji} />
                        </div>
                  </div>
                  <button className="sendButton">Send</button>
            
      </div>            
</div>
)
}

export default Chat
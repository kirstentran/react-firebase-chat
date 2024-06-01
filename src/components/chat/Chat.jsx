import "./Chat.css"

const Chat = () => {
return (
<div className='chat'>
            <div className="top">
                  <div className="user">
                        <img src="./avatar.png" alt="" />
                        <div className="text">
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
            <div className ="center"></div>            
            <div className ="bottom"></div>            
</div>
)
}

export default Chat
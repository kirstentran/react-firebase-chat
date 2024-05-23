import "./list.css"
import ChatList from "./chatList/ChatList"
import Userinfo from "./userInfor/UserInfor"

const List = () => {
return (
<div className ='list' >
    <Userinfo/>
    <ChatList/>
</div>
)
}

export default List
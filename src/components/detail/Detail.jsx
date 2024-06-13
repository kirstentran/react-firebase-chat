import "./detail.css"

const Detail = () => {
      return (
            <div className='detail' >
                  <div className="user">
                        <img src="./avatar.png" alt="" />
                        <h2>Uyen N. P. Tran</h2>
                        <p>User Dexcription</p>
                  </div>
                  <div className="info">
                        <div className="option">
                              <div className="title">
                                    <span>Chat Settings</span>
                                    <img src="./arrowUp.png" alt="" />
                              </div>
                        </div>
                        <div className="option">
                              <div className="title">
                                    <span>Privacy and Help</span>
                                    <img src="./arrowUp.png" alt="" />
                              </div>
                        </div>
                        <div className="option">
                              <div className="title">
                                    <span>Shared Photos</span>
                                    <img src="./arrowDown.png" alt="" />
                              </div>
                              <div className="photos">
                                    <div className="photoItem">
                                          <div className="photoDetail">
                                                <img src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7363727724084953131~c5_100x100.jpeg?lk3s=a5d48078&nonce=85682&refresh_token=fff902ac0ee07b9a8b4067be1c683668&x-expires=1717610400&x-signature=8agllNeuJIv41QNgbTshOQvP7L4%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                                                <span>photo_2024_2.png</span>
                                          </div>
                                          <img src="./download.png" alt="" className=" icon" />
                                    </div>
                                    <div className="photoItem">
                                          <div className="photoDetail">
                                                <img src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7363727724084953131~c5_100x100.jpeg?lk3s=a5d48078&nonce=85682&refresh_token=fff902ac0ee07b9a8b4067be1c683668&x-expires=1717610400&x-signature=8agllNeuJIv41QNgbTshOQvP7L4%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                                                <span>photo_2024_2.png</span>
                                          </div>
                                          <img src="./download.png" alt="" className=" icon" />
                                    </div>
                                    <div className="photoItem">
                                          <div className="photoDetail">
                                                <img src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7363727724084953131~c5_100x100.jpeg?lk3s=a5d48078&nonce=85682&refresh_token=fff902ac0ee07b9a8b4067be1c683668&x-expires=1717610400&x-signature=8agllNeuJIv41QNgbTshOQvP7L4%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                                                <span>photo_2024_2.png</span>
                                          </div>
                                          <img src="./download.png" alt="" className=" icon" />
                                    </div>
                                    <div className="photoItem">
                                          <div className="photoDetail">
                                                <img src="https://p16-pu-sign-useast8.tiktokcdn-us.com/tos-useast5-avt-0068-tx/7363727724084953131~c5_100x100.jpeg?lk3s=a5d48078&nonce=85682&refresh_token=fff902ac0ee07b9a8b4067be1c683668&x-expires=1717610400&x-signature=8agllNeuJIv41QNgbTshOQvP7L4%3D&shp=a5d48078&shcp=81f88b70" alt="" />
                                                <span>photo_2024_2.png</span>
                                          </div>
                                          <img src="./download.png" alt="" className=" icon" />
                                    </div>
                              </div>
                        </div>
                  
                        <div className="option">
                              <div className="title">
                                    <span>Shared Files</span>
                                    <img src="./arrowUp.png" alt="" />
                              </div>
                        </div>
                        <button>Block User</button>
                        <button className="logout">Log out</button>
                  </div>  
            </div>
      );
};

export default Detail;
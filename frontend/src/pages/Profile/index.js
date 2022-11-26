import "./Profile.css";
import "./menuImage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";



function Profile() {
    const [dataImg, setDataImg] = useState([]);
    const navigate = useNavigate();
    const [defaultState, setDefaultState] = useState("self_created");
    
    useEffect(() => {
        const cookies = new Cookies();
        let cookie = cookies.get('user_id');
        console.log(cookie);
        const resData = async () => {
            const response = await axios.post('http://localhost:5000/user/view-profile',
                {
                    "user_id": cookie
                });
                
            setDataImg(response.data.message)
            
            
        }
        resData();
        
    }, []);
    console.log(dataImg);
     
    const [model, setModel] = useState(false);
    const [temimgSrc, setTempImgSrc] = useState('');
    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }


    // const [userImg, setUserImg] = useState();
    // setUserImge(localstorage.get('image'))

   
   

    return (
        <div className="pageProfileContainer">

            <div className="profileContainer">
                <div className="userContainer">
                    <img src={localStorage.getItem("avatar")} className="userAvatar" />
                </div>

                <div className="usernameContainer">

                    <h1 className="username" >{localStorage.getItem("fullname")}</h1>

                    {/* <div className="bd colorbd">
                        <span>@nbi1830</span>
                    </div> */}

                </div>
                <div className="aboutContainer"><div className="aboutProfile"><span className="textAbout">{localStorage.getItem("about")}</span></div></div>
               
                    <div className="bd following">
                        <span className="spanFollow">{localStorage.getItem("num_users_followed")} followers</span>
    
                            <span className="spanFollow">-</span>
                        
                        <span className="spanFollow">{localStorage.getItem("num_users_following")} following</span>
                    </div>
                    
               
                <div className="buttonPFContainer">
                    <div className="ContainerButton">
                        <button className="buttonProfile button1">
                            <div className="textButton">Share</div>
                        </button>
                    </div>
                    <div className="ContainerButton">
                        <button className="buttonProfile button1">
                        <div className="textButton" onClick = {() =>{navigate("/settingprofile");}}>Edit profile</div>
                    </button>
                    </div>
                    
                </div>
            </div>

            <div className="buttonPFContainer">
                <div className="ContainerButton">
                    <button className="buttonProfile button2" onClick={() => setDefaultState("self_created")}>
                        <div className="textButton" onClick = {() =>{navigate("/post");}}>Created</div>
                    </button>
                </div>
                <div className="ContainerButton">
                    <button className="buttonProfile button2" onClick={() => setDefaultState("saved_from_other")}>
                        <div className="textButton">Saved</div>
                    </button>
                </div>
            </div>
            <div className={model ? "model open" : "model"}>
                <img src={temimgSrc} />

            </div>
            <div className="menuImage">
                {dataImg.map((item, index) => {
                    if(item.post_type == defaultState){
                        return (
                            <div className="pics" key={index} onClick={() => getImg(item.image)}>
                                <img src={item.image} className="imagemenu" />
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
}

export default Profile;

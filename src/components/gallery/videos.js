import React,{useState,useEffect} from 'react';
import firebase from '../../dbconfig/firebaseConnection';
import { trackPromise} from 'react-promise-tracker';
const Videos = ()=> {
    const [videos,setVideos] = useState([]);
    const db = firebase.firestore().collection("/videos");
    useEffect(()=> {
            async function loadData(){
                const videoList = [];
                const snapshot = await db.get("/videos");
                snapshot.docs.forEach(item => {
                    videoList.push(item.data());
                })
                setVideos(videoList)
            }
            trackPromise(
                loadData()
            )
    },[])
    return (
        <div className="row justify-content-center">
            {   videos.map(video => 
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <iframe height="300px" width="100%" src={video.link}/>
                        <div className="m-3">
                            <h5 className="card-title">{video.title}</h5>
                            <p className="card-text">{video.description}</p>
                        </div>
                        <div className="m-3">
                            <a href={video.link}>View on Youtube</a>
                        </div>
                    </div>
            )}
        </div>
    )
}

export default Videos;
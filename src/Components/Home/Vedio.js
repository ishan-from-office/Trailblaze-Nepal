import React from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

const Video = (props) => {






  // const { id } = useParams()
  // const [video, setVideo] = useState();




  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(`/api/tour/${id}`);
  //       setVideo(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData()
  // })


  return (
    <>
      <iframe
        width="100%"
        height="100%"
        src={props?.url}
        title="YouTube video player"
        frameBorder="0"
        allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </>
  );
};

export default Video;

const VideoTitle = ({title, overview}) => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 pt-[12vh] w-[40vw] text-white  bg-gradient-to-r from-black">
        <h1 className="p-4 text-2xl font-bold">{title}</h1>
        <p className="p-4 ">{overview}</p>
        <div className="mb-4 font-bold">
            <button className="p-2 px-5 m-2 bg-white text-black rounded-md hover:bg-opacity-70">Play</button>
            <button className="p-2  m-2 bg-white text-black rounded-md hover:bg-opacity-70">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
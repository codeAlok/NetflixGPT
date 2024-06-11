
const VideoTitle = ({title, overview}) => {
  return (
    <div className="border-2 border-red-500">
        <h1 className="p-4 text-2xl font-bold">{title}</h1>
        <p className="p-4 w-1/3">{overview}</p>
        <div>
            <button className="p-2 px-5 m-2 bg-gray-300 text-black rounded-md">Play</button>
            <button className="p-2 m-2 bg-gray-300 text-black rounded-md">More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
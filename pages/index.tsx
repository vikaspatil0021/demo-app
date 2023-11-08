import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  let session = useSession();

  const awsAPI = async () => {
    const { url } = await (await fetch('http://localhost:3000/api/awssdk', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ Key: "video0021", ContentType: "video/mp4" }),
    })).json();

    console.log(url);

    const selectedFile: any = document?.getElementById('myInput'); // Replace 'fileInput' with the ID of your file input element
    const fileData = await selectedFile?.files[0].arrayBuffer(); // Read the file as binary data


    const result = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'video/mp4',
      },
      body: fileData,
    })
    console.log(result.status, "video uploaded to s3");
  }



  // https://youtube0021.s3.ap-south-1.amazonaws.com/video.mp4?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCmFwLXNvdXRoLTEiRzBFAiAw7qWQyYoeUpqBLg47XPekbWZBgDWJX2XGwBBS0gh6EQIhALQiyJdvaCOdOnSKkXi%2BILFRJAhZgdI%2BW7mZbjd5mF1UKu0CCJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMjA2OTU4MDAyNjQxIgyYem7LjX2uaeVEtFsqwQJH6QKeXSGOVeSsyuuRrpiQsD5N3AOlhXi5jf0t2naesmaDvYV020leU4IVa6Sl6NPI6sZNTd%2BGmLkhMW7RfChv23FgGwrdtASqpkCZ1hqVtuDD%2Bhfts6YAfPuEB2Eeab0pran84Rrr8yvIyHm6thrS7QnAlbuvt9fx6WrZFkYj6ZGvsZlrX49EMTiJLNFAt%2BRzq8kSg5GtBhO4UOi9I%2BfbqB328U266KGug3xRUMwpVIcMV4ekirt6XxyxOs8kZEWs3wLX6zhLvI9t%2FQ2mJ2QUEG4W6Tihe0eozEuhDzTKuuRLJjAM0r1yKp97eqtF2TZ0yibTuLkXX%2FX1%2Bd4QTycInGteyJSKsauTCqsK5QosD4JT0sdzff9rFXBnZNTx1O4T7DEOOC4iCg8YyPtPhUXIN6wXe1e84V%2BCbQHmoyjj8agwgfmmqgY6swKvjmoqDrFdAHcvWIFw3c4SZ7vtzqLSInGtkoGs9QqhC7RqqLI6yCzOOR%2FRnLw620WZUF5S2UJuLzpmC7zJzNAI4JPJCUv8L7RWwHICV8uD6EIh%2BA3qMXJ4zFPhKbefACDn53ycZ8kNzU1Fp4%2FOsgP%2B5cFYchTr806MmIjFtjk%2F%2BnYkRZptmLpDu6MRdTRO9AxXkObSHJMxYVlte6u3MGGKRFfQEE7XOJL7iqHWD1bpJhwruQM6DntTZW64nBLHOIbFYSx%2BW%2FhouZPU80O0gQ52di%2BWANnNbI0cjDqmLMRliWxTsu0P%2FuZeYjaHWsL1%2BxlPHZOLwIAoIY%2FLS%2FOJp0NEcPq%2BQNiRGPLJ76dC8KiijGkB9eG3Py1PkMfR0cWOwvUpCwRWd3TOGcPpxmCTL1Zydnvi&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231107T060326Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATAL5IQHIZZ2S4YXD%2F20231107%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Signature=af31c84b7e7950fd7b77cc4a628402a16ad8044403f059ec1e64645be39ed6ac


  const googleAPI = async () => {
    await fetch('http://localhost:3000/api/youtube', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ data: session?.data }),
    }).then((res) => res.json())
      .then((res) => console.log(res));
  }

  if (session.data === null) {
    return (<>
      <button onClick={()=>signIn()}>Login</button>
    </>)
  }
  return (
    <div className='bg-black flex justify-center items-center'>

      <form>
        <input id="myInput" className='w-full' type="file" />
      </form>
      <button className="px-3 py-2 m-3 bg-purple-600 rounded-lg" onClick={awsAPI}>
        send Video to AWS s3
      </button>
      <button className="px-3 py-2 m-3 bg-green-600 rounded-lg" onClick={googleAPI}>
        send Video to youtube from s3
      </button>


      <div>

      </div>

    </div>
  )
}

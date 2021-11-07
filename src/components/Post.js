import { useParams } from "react-router-dom";
export default function Post() {
  const params = useParams();

  return (
    <div>
      <h1>Post</h1>
      <p>Post id is {params.postId}</p>
    </div>
  );
}

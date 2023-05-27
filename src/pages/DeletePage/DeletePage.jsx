import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeletePost = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => setPost(resp.data));
  }, [id]);

  const deleteApi = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((resp) => alert("успешно удалено " + "статус: " + resp.status))
      .then(navigate("/posts"));
  };

  return (
    <div>
      <div>{post.title}</div>
      <span>Вы хотите?</span>
      <button onClick={deleteApi}> Да</button>
      <button onClick={() => navigate("/posts")}>Нет</button>
    </div>
  );
};
export default DeletePost;

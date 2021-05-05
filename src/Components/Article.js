import { Link } from "react-router-dom";

const Article = ({ elem }) => {
  const id = elem._id;

  return (
    <Link to={`/offer/${id}`} className="article">
      {elem.product_name}
    </Link>
  );
};
export default Article;

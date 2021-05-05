import { Link } from "react-router-dom";

const Article = ({ elem }) => {
  const id = elem._id;

  return (
    <Link to={`/offer/${id}`} className="article">
      <img src={elem.product_pictures[0].secure_url} alt="" />
      <div>{elem.product_price}</div>
      <div>{elem.product_details[1].TAILLE}</div>
      <div>{elem.product_details[0].MARQUE}</div>

      <div>{elem.product_name}</div>
    </Link>
  );
};
export default Article;

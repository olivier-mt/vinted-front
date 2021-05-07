import { Link } from "react-router-dom";

const Article = ({ elem }) => {
  const id = elem._id;

  console.log(elem);

  return (
    <Link to={`/offer/${id}`} className="article">
      <div className="owner-info">
        <img src={elem.owner.account.avatar.secure_url} alt="" />
        {elem.owner.account.username}
      </div>
      <img src={elem.product_image.secure_url} alt="" className="article-img" />
      <div className="price">{elem.product_price}€</div>
      <div>{elem.product_details[1].TAILLE}</div>
      <div>{elem.product_details[0].MARQUE}</div>
      <div>{elem.product_name}</div>
    </Link>
  );
};
export default Article;

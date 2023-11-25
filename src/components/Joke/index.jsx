export const Joke = ({ avatar, name, text, likes, dislikes }) => {
  return (
    <div>
      <img className="user-avatar" src={avatar} />
      <p className="user-name">{name}</p>
      <p className="joke__text">{text}</p>
      <div className="joke__likes">
        <button id="btn-up" className="btn-like btn-like--up">
          {likes}
        </button>
        <span id="likes-up" className="likes-count likes-count--up"></span>
        <button id="btn-down" className="btn-like btn-like--down">
          {dislikes}
        </button>
        <span id="likes-down" className="likes-count likes-count--down"></span>
      </div>
    </div>
  );
};

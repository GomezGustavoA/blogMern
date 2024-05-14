import React, { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    if (!liked) {
      setLikes(likes + 1);
      setLiked(true);
    } else {
      setLikes(likes - 1);
      setLiked(false);
    }
  };

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 14s-5-3.5-5-6.96C3 4.219 4.589 2.5 8 2.5c3.403 0 5 1.719 5 4.54C13 10.5 8 14 8 14z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M8 14s-5-3.5-5-6.96c0-2.518 2.015-4.125 4.462-4.858C7.52 2.723 8 2.381 8.478 2.143a.75.75 0 0 1 .987 1.14L8 4.146l-.465-.864a.75.75 0 0 1 1.241-.832L8.73 4.74l.593-1.107a.75.75 0 0 1 1.341.664L9.54 4.143l.693 1.299c.3.56.48 1.185.48 1.828 0 2.518-2.015 4.125-4.462 4.858C3.48 10.277 3 10.619 3 10.619s5 3.5 5 6.96z"
            />
          </svg>
        )}
      </button>
      <span>{likes}</span>
    </div>
  );
};

export default LikeButton;

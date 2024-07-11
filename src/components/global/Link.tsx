import type { Link } from "../../types";

const Link = ({ text, url, classes }: Link) => {
  return (
    <a href={url} className={classes}>
      {text}
    </a>
  );
};

export default Link;

import type { LinkType } from "../../types"

const Link = ({ text, url, classes}: LinkType) => {
    return ( 
        <a href={url} className={classes}>{text}</a>
     );
}
 
export default Link;

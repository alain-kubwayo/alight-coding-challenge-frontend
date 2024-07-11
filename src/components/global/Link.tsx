type LinkProps = {
    text: string
    url: string
    classes: string
}


const Link = ({ text, url, classes}: LinkProps) => {
    return ( 
        <a href={url} className={classes}>{text}</a>
     );
}
 
export default Link;
type ButtonProps = {
    text: string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({text, handleClick}: ButtonProps) => {
    return ( 
        <button
            className="px-4 py-2 mr-3 text-sm rounded shadow-sm bg-primary-200 hover:ring-1 hover:ring-gray-200 hover:shadow-md"
            onClick={handleClick}
        >{text}</button>
     );
}
 
export default Button;

const Button = ({children}) => {

    return (
        <button style={{
            backgroundColor: 'red',
            color: 'green',
        }}>
            {children}
        </button>
    );
};

export default Button;
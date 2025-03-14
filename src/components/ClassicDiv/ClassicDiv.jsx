import PropTypes from "prop-types";
export default function ClassicDiv({ children}) {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            backgroundColor: "#141414",
            border: "solid 1px rgb(163, 166, 170) ",
            padding: '20px 30px',
            margin:'1rem'
        }}>
            {children}
        </div>
    );
}

ClassicDiv.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.string,
};


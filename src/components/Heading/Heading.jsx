import PropTypes from 'prop-types';
export default function Heading({headingName}) {
    return (
        <div style={{display:'flex', alignItems:'center',justifyContent:'center',padding:'20px'}}>
            <h1 style={{fontSize:'3rem',textDecoration:'underline',textDecorationColor:'grey'}}>{headingName}</h1>
        </div>
    );
}

Heading.propTypes = {
    headingName : PropTypes.string.isRequired
}

Heading.defaultProps = {
    headingName : 'This is Heading'
}

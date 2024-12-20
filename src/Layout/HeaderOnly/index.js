import PropTypes from 'prop-types';
import Header from './Header';

//File này chứa layout chung cố định
function HeaderOnly({ children }) {
    //Vì phần content động chuyền từ ngoài vào nên chuyền vào props children
    return (
        <div>
            <Header>{/* Header content */}</Header>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

HeaderOnly.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderOnly;

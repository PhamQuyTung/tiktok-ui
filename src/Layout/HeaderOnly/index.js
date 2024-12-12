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

export default HeaderOnly;

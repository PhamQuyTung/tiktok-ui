import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

/* 
to: Nếu có prop to, component sẽ sử dụng Link từ react-router-dom để điều hướng trong ứng dụng mà không cần tải lại trang. Điều này giữ lại trạng thái và trải nghiệm mượt mà của SPA (Single Page Application).
href: Nếu có prop href nhưng không có to, component sẽ dùng thẻ <a> để điều hướng đến một URL ngoài ứng dụng.
onClick: Nếu prop onClick được truyền vào, nó sẽ gắn vào component để thực hiện một hành động khi button được nhấn. */

function Button({
    to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    leftIcon,
    rightIcon,
    children,
    className,  //custom riêng các button khác nhau
    onClick,
    ...passProps
}) {
    //Nếu có cải tiến gì về button thì adđ thêm vào đây ví dụ: thêm button size small
    let Comp = 'button';

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disabled,
        //Thêm các thuộc tính về btn vào đây: ví dụ thêm "small" button
        small,
        large,
        text,
        rounded,
    });

    // Handle click events on the button itself and its children components when clicked on the button itself instead of its children components
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    // Remove event listeners when the button is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && props[key] === "function") {
                props[key] = undefined;
            }
        });
    }


    // Trả về component Link hoặc thẻ a với các thuộc tính và hành động đã xử lý
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>} {/* icon trái phải đều cách title */}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}  {/* icon trái phải đều cách title */}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button;

/* 
    Hãy phân tích chi tiết cách mà đoạn mã trên hoạt động và ý nghĩa của từng thành phần trong component `Button` này.

### Phân tích từng phần

1. **`import classNames from 'classnames/bind';`**
   - `classnames/bind` là một thư viện tiện ích giúp kết hợp nhiều lớp CSS lại thành một `className` có điều kiện. Với `.bind()`, ta có thể ràng buộc một `styles` cụ thể để tạo ra các lớp CSS động một cách dễ dàng và tránh lặp lại đoạn mã.

2. **`import styles from './Button.module.scss';`**
   - `styles` import từ `Button.module.scss` sẽ chứa các lớp CSS cho component `Button`. Với `styles`, ta có thể gọi tên lớp bằng cách viết `styles.className`, điều này giúp tránh xung đột tên lớp CSS nhờ cơ chế CSS Module.

3. **`const cx = classNames.bind(styles);`**
   - `cx` là một hàm được tạo bởi `classnames/bind`, đã liên kết với `styles`. Với `cx`, ta có thể dễ dàng kết hợp các lớp CSS trong `styles` một cách động dựa trên điều kiện (`primary`, `outline`).

### Giải thích các props và logic của `Button` component

- **`to` và `href`**
   - **`to`**: Khi `to` có giá trị, `Button` sẽ sử dụng `<Link>` từ `react-router-dom`, cho phép điều hướng nội bộ mà không tải lại trang, giữ trải nghiệm mượt mà của ứng dụng một trang (SPA).
   - **`href`**: Nếu có `href` nhưng không có `to`, `Button` sẽ dùng thẻ `<a>` để điều hướng đến một URL ngoài ứng dụng.

- **`onClick`**
   - Prop `onClick` cho phép thực hiện một hành động khi button được nhấn. Nó được gắn vào component để có thể xử lý các sự kiện click của người dùng.

- **`primary` và `outline`**
   - Hai props này cho phép định dạng button. `primary` có thể làm button nổi bật hơn với màu sắc chính, trong khi `outline` sẽ làm button có kiểu đường viền (không nền).
   - **`const classes = cx('wrapper', { primary, outline })`**: `cx` sẽ kết hợp `wrapper` với `primary` hoặc `outline` nếu các prop tương ứng là `true`.

- **`passProps`**
   - `passProps` dùng toán tử `...` để chứa các prop còn lại ngoài `to`, `href`, `primary`, `outline`, `children`, và `onClick`. Điều này giúp component `Button` linh hoạt, có thể nhận thêm các prop tùy ý như `target`, `rel`, `aria-*`, v.v.

### `Button` Component’s Render Logic
- **Determine `Comp`**: Nếu `to` có giá trị, `Comp` là `Link`; nếu `href` có giá trị, `Comp` là `a`; nếu không, `Comp` là `button`.
- **Render Button**: Trả về `Comp` với `className` (kết hợp các lớp CSS) và `props` (bao gồm sự kiện `onClick` và các prop bổ sung từ `passProps`).

### Ví dụ cách sử dụng `Button` với các props

```jsx
<Button primary onClick={() => console.log('Clicked!')}>Primary Button</Button>
<Button outline to="/about">Outline Link Button</Button>
<Button href="https://example.com" target="_blank" rel="noopener noreferrer">External Link Button</Button>
```

- **`<Button primary ... />`** sẽ có kiểu `primary`.
- **`<Button outline to="/about" ... />`** sẽ điều hướng đến `/about` trong ứng dụng mà không tải lại trang.
- **`<Button href="https://example.com" ... />`** sẽ mở một liên kết ngoài.

### Tóm lại

Component `Button` này là một button đa năng và linh hoạt với các thuộc tính như `primary`, `outline`, `to`, và `href`. Cách kết hợp `classnames`, CSS Module, và `react-router-dom` giúp component có thể dễ dàng tái sử dụng và tuỳ chỉnh trong nhiều trường hợp khác nhau.
*/


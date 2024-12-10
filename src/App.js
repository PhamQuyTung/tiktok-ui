import { Fragment } from 'react';
//Tạo cơ chế Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //B1
//B2: làm bằng cách "Đưa cấu hình routes ra ngoài" dễ dàng add thêm Router nhanh-gọn-lẹ
import { publicRoutes } from '~/routes'; //import publicRoutes từ file routes mới tạo
import { DefaultLayout } from '~/components/Layout'; // cách viết gọn thay cho cách viết dài import DefaultLayout from '~/component/Layout/DefaultLayout';

function App() {
    return (
        <Router>
            <Routes>
                {/* map qua mảng publicRoutes trong file routes */}
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout; // Nếu layout đã được thiết lập thì sử dụng layout đó
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />{' '}
                                    {/* Vì <Page thành children của Layout (DefaultLayout) mà DefaultLayout lại nhận children */}
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;

//File này để defile (cấu hình) ra các tuyến đường
//Cần sửa thì vào đây ví dụ: home: '/' -> home: '/home'
const RoutesConfig = {
    home: '/home',  //Tuyến đường cho trang chủ
    following: '/following',    //Tuyến đường cho trang following
    nickname: '/:nickname', //Tuyến đường cho trang profile
    upload: '/upload',  //Tuyến đường cho trang upload
    search: '/search',  //Tuyến đường cho trang tìm kiếm
};

export default RoutesConfig;
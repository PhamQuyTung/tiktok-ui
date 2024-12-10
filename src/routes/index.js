// File này chứa các tuyến đường
//Layouts
import { HeaderOnly } from '~/components/Layout';

//Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

//
import RoutesConfig from '~/config/routes';

//Public routes
const publicRoutes = [
    { path: RoutesConfig.home, component: Home },
    { path: RoutesConfig.following, component: Following },
    { path: RoutesConfig.nickname, component: Profile },
    { path: RoutesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: RoutesConfig.search, component: Search, layout: null }
];

const privateRoutes = [
    // Code...
];

export { publicRoutes, privateRoutes };

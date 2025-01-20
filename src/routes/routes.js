import config from '~/config'



import Home from '~/pages/Home'

import Upload from '~/pages/Upload'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.Upload, component: Upload },
]


const privateRoutes = []

export { publicRoutes, privateRoutes } 
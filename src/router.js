import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';

import DownloadDetail from "./routes/DownloadDetail";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/downloadDetail" component={DownloadDetail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;

// import React from 'react';
// import { Router } from 'dva/router';

// const cached = {};
// function registerModel(app, model) {
//   if (!cached[model.namespace]) {
//     app.model(model);
//     cached[model.namespace] = 1;
//   }
// }

// function RouterConfig({ history, app }) {
//   const routes = [
//     {
//       path: '/',
//       name: 'IndexPage',
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('./routes/IndexPage'));
//         });
//       },
//     },    
//     {
//       path: '/downloadDetail',
//       name: 'downloadDetail',
//       getComponent(nextState, cb) {
//         require.ensure([], (require) => {
//           registerModel(app, require('./models/DownloadDetail'));
//           cb(null, require('./routes/DownloadDetail'));
//         });
//       },
//     }   
//   ];

//   return <Router history={history} routes={routes} />;
// }

// export default RouterConfig;


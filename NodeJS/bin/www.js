let debug = require('debug')('chat');
let app = require('../app');

app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), () => {
    debug('Express server listening on port ' + server.address().port);
});

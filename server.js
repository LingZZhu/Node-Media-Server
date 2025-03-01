const NodeMediaServer = require('node-media-server');
const config = {
  logType: 2,  // reduce logging
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop: 2,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*'
  },
  hls: {
    enabled: true,
    hls_path: './hls',
    hls_fragment: 2,
    hls_playlist_length: 6
  }
};
var nms = new NodeMediaServer(config);
nms.run();
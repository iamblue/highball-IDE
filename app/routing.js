// client/server 共用的 routing table
module.exports = [
  {path:'/', handler: 'viewerHandler'},
  {path:'/editor/:projectId', handler: 'editorHandler'},
]

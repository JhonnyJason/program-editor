module.exports = {
    "mode": "production",
    "devtool": "none",
    "target": "node",
    "node": {
        "__filename": true,
        "__dirname": true
    },
    "optimization": {
        "minimize": false
    },
    "entry": "/home/lenny/gits/program-editor/toolset/compiled/js/index.js",
    "output": {
        "filename": "service.js",
        "path": "/home/lenny/gits/program-editor/output"
    }
}
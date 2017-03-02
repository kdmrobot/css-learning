/**
 * Created by wb.huanghuaqing on 2017/3/1.
 */
/**
 * Created by wb.huanghuaqing on 2017/2/24.
 */
const express = require('express')
const app = express()
app.use(express.static(__dirname));
app.get('/er',function (req,res) {
    res.send('eer');
})

const port = process.env.PORT || 8999
module.exports = app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})


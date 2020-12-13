const fs   = require('fs');
const sass = require('sass');

const res  = sass.renderSync({file: 'css/column.scss'});

fs.writeFileSync('css/column.css', res.css);

console.log('✅ CSS file created at css/column.css');
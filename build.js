import fs from 'node:fs/promises';
import beautify from 'simply-beautiful';


const pages = [
  'index.html',
  'Đoàn Thể.html',
  'Giáo Xứ.html',
  'Mục Vụ.html',
  'Phụng Vụ.html',
  'Sinh Hoạt.html',
  'Thông Tin.html',
];

const render = (await import('./dist/server/entry-server.js')).renderHTML;
for (const page of pages) {
  const rendered = await render(page);
  if (rendered) {
    const html = `
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Trinh Vương Parish</title>
  <link href="app.css" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
</head>
<body>

${rendered.html}

  <script type="text/javascript" src="script.js"></script>
</body>
</html>`;
    fs.writeFile(`./dist/${page}`, beautify.html(html));
  } else {
    console.log(`Could not build ${page}`);
  }
}

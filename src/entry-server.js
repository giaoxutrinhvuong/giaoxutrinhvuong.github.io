import a from './Index.svelte';
import b from './Đoàn Thể.svelte';
import c from './Giáo Xứ.svelte';
import d from './Mục Vụ.svelte';
import e from './Phụng Vụ.svelte';
import f from './Sinh Hoạt.svelte';
import g from './Thông Tin.svelte';

export async function renderHTML(file) {
  if (file === 'index.html') {
    return a.render();
  } else if (file === 'Đoàn Thể.html') {
    return b.render();
  } else if (file === 'Giáo Xứ.html') {
    return c.render();
  } else if (file === 'Mục Vụ.html') {
    return d.render();
  } else if (file === 'Phụng Vụ.html') {
    return e.render();
  } else if (file === 'Sinh Hoạt.html') {
    return f.render();
  } else if (file === 'Thông Tin.html') {
    return g.render();
  }
}

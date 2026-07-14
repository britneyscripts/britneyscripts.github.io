function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}
const entry = "pt/aplicando-karpathy-na-engenharia-de-produto.md";
const fileWithoutExt = entry.replace(/\.md$/, '');
const parts = fileWithoutExt.split('/');
console.log(parts.map(part => slugify(part)).join('/'));

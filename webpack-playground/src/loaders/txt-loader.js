module.exports = function(source) {
    const newSource = `'<div class="text">${source}</div>'`;
    console.log('**************************', 'Old text =>', source, 'New text =>', newSource, '**************************');
    return `export default ${newSource}`;
};
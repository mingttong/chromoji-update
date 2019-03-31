twemoji.parse('hello😄haha😜')
    .replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, (...args) => {
        var src = args[1];
        var style = `width:14px;height:14px;display:inline-block;background:url('${src}');background-size:100%;`;
        return `<span style="${style}"></span>`;
    });
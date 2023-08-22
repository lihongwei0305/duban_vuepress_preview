import{_ as a,c as e,o as s,N as n}from"./chunks/framework.d9f2368f.js";const F=JSON.parse('{"title":"正则表达式","description":"","frontmatter":{},"headers":[],"relativePath":"src/frontEnd/javaScript/reg.md"}'),l={name:"src/frontEnd/javaScript/reg.md"},o=n('<h1 id="正则表达式" tabindex="-1">正则表达式 <a class="header-anchor" href="#正则表达式" aria-label="Permalink to &quot;正则表达式&quot;">​</a></h1><h2 id="字面量" tabindex="-1">字面量 <a class="header-anchor" href="#字面量" aria-label="Permalink to &quot;字面量&quot;">​</a></h2><h2 id="元字符" tabindex="-1">元字符 <a class="header-anchor" href="#元字符" aria-label="Permalink to &quot;元字符&quot;">​</a></h2><ul><li><code>.</code> 匹配任意单个字符 <ul><li>需要注意的是，（.）不能匹配换行符，除非使用特定的标记或选项来启用这个功能</li><li>eg: <code>/a.b/s</code>,需要添加<code>s</code></li></ul></li><li><code>*</code> 匹配前面的元素零次或多次</li><li><code>?</code> 匹配前面的元素零次或一次</li></ul><h2 id="字符类" tabindex="-1">字符类 <a class="header-anchor" href="#字符类" aria-label="Permalink to &quot;字符类&quot;">​</a></h2><ul><li><code>[]</code> 可以指定一个字符集合，表示匹配其中任意一个字符</li></ul><h2 id="转义字符" tabindex="-1">转义字符 <a class="header-anchor" href="#转义字符" aria-label="Permalink to &quot;转义字符&quot;">​</a></h2><h2 id="量词" tabindex="-1">量词 <a class="header-anchor" href="#量词" aria-label="Permalink to &quot;量词&quot;">​</a></h2><ul><li>用于指定匹配元素的数量 <ul><li><code>*</code> 匹配零次或多次</li><li><code>+</code> 匹配一次或多次</li><li><code>?</code> 匹配零次或一次</li><li><code>{n}</code> 精确匹配前面的元素出现 n 次</li><li><code>{n,}</code> 匹配前面的元素至少出现 n 次</li><li><code>{n,m}</code> 匹配前面的元素出现 n 到 m 次</li></ul></li></ul><h2 id="边界匹配" tabindex="-1">边界匹配 <a class="header-anchor" href="#边界匹配" aria-label="Permalink to &quot;边界匹配&quot;">​</a></h2><h2 id="取反" tabindex="-1">取反 <a class="header-anchor" href="#取反" aria-label="Permalink to &quot;取反&quot;">​</a></h2><ul><li><code>[^abc]</code></li><li><code>d(?![abc])</code> 后面不能是abc</li><li><code>d(?&lt;![abc])</code> 前面不能是abc</li></ul><h2 id="eg" tabindex="-1">eg <a class="header-anchor" href="#eg" aria-label="Permalink to &quot;eg&quot;">​</a></h2><div class="language-text line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">text</span><pre class="shiki material-theme"><code><span class="line"><span style="color:#EEFFFF;"></span></span>\n<span class="line"><span style="color:#EEFFFF;">是否为空 `/^\\s*$/`</span></span>\n<span class="line"><span style="color:#EEFFFF;"></span></span>\n<span class="line"><span style="color:#EEFFFF;">是否为整数或小数(保留两位) `/^[0-9]+\\.{0,1}[0-9]{0,2}$/`</span></span>\n<span class="line"><span style="color:#EEFFFF;"></span></span>\n<span class="line"><span style="color:#EEFFFF;">是否为汉字 `/^(\\p{Unified_Ideograph})+$/u`</span></span>\n<span class="line"><span style="color:#EEFFFF;"></span></span>\n<span class="line"><span style="color:#EEFFFF;">只包含数字和 `/^[a-zA-Z0-9]+/`</span></span>\n<span class="line"><span style="color:#EEFFFF;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>',14),i=[o];function c(r,t,d,p,h,u){return s(),e("div",null,i)}const m=a(l,[["render",c]]);export{F as __pageData,m as default};

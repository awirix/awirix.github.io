import{_ as s,c as a,o as n,d as e}from"./app.49da8a3a.js";const A=JSON.parse('{"title":"Structure","description":"","frontmatter":{},"headers":[{"level":2,"title":"Passport","slug":"passport","link":"#passport","children":[]},{"level":2,"title":"Tester","slug":"tester","link":"#tester","children":[]},{"level":2,"title":"Scraper","slug":"scraper","link":"#scraper","children":[{"level":3,"title":"Media","slug":"media","link":"#media","children":[]},{"level":3,"title":"Noun","slug":"noun","link":"#noun","children":[]},{"level":3,"title":"Context","slug":"context","link":"#context","children":[]},{"level":3,"title":"Search","slug":"search","link":"#search","children":[]},{"level":3,"title":"Layers","slug":"layers","link":"#layers","children":[]},{"level":3,"title":"Actions","slug":"actions","link":"#actions","children":[]}]}],"relativePath":"guide/extensions/structure.md"}'),t={name:"guide/extensions/structure.md"},l=e(`<h1 id="structure" tabindex="-1">Structure <a class="header-anchor" href="#structure" aria-hidden="true">#</a></h1><p>Since extensions are just a folders with bunch of files, each extension must contain a few specific files in order to be functional.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">extension</span></span>
<span class="line"><span style="color:#A6ACCD;">├── passport.json</span></span>
<span class="line"><span style="color:#A6ACCD;">├── tester.lua</span></span>
<span class="line"><span style="color:#A6ACCD;">└── scraper.lua</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><nav class="table-of-contents"><ul><li><a href="#passport">Passport</a></li><li><a href="#tester">Tester</a></li><li><a href="#scraper">Scraper</a><ul><li><a href="#media">Media</a></li><li><a href="#noun">Noun</a></li><li><a href="#context">Context</a></li><li><a href="#search">Search</a></li><li><a href="#layers">Layers</a></li><li><a href="#actions">Actions</a></li></ul></li></ul></nav><h2 id="passport" tabindex="-1">Passport <a class="header-anchor" href="#passport" aria-hidden="true">#</a></h2><p>Passport contains information about extension&#39;s name, description, requirements (operating system, external programs) and such.</p><blockquote><p>JSON schema coming soon...</p></blockquote><h2 id="tester" tabindex="-1">Tester <a class="header-anchor" href="#tester" aria-hidden="true">#</a></h2><p>Tester is a file, that implements just one function</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div><p>This function can be run by the CI in order to verify extension&#39;s status.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>While it&#39;s better to include <code>tester.lua</code> with some meaningful tests in your extension, its absence won&#39;t cause any errors.</p></div><p>You can also import <a href="#scraper">scraper</a> module to test it&#39;s steps. For example:</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> scraper </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">scraper</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">M</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">test</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> results </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> scraper.</span><span style="color:#FFCB6B;">search</span><span style="color:#A6ACCD;">.</span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test query</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#82AAFF;">assert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">results </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">, </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Search did not return any results</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> M</span></span>
<span class="line"></span></code></pre></div><h2 id="scraper" tabindex="-1">Scraper <a class="header-anchor" href="#scraper" aria-hidden="true">#</a></h2><p>Scraper is the extension&#39;s core. It defines the functionality of the extension.</p><p>In order to work, <code>scraper.lua</code> must implement some <strong>steps</strong>.</p><p><strong>Steps</strong>, in essence, are just a handler functions that accept <a href="#media">Media</a> or text query and may output other medias.</p><p>Before going in further to what <strong>steps</strong> should be defined, let&#39;s run through the basic types.</p><h3 id="media" tabindex="-1">Media <a class="header-anchor" href="#media" aria-hidden="true">#</a></h3><p><code>Media</code> is an intermediate object (a lua table, basically) that represents a single media.</p><p>For example, imagine your extension has some sort of search function that gets the query and returns found results. Those results are essentially are lists of media. Sounds not too complex right?</p><p>Now, let&#39;s see how media looks like</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>Title that is used a string representation of the media.</td></tr><tr><td>description</td><td>string?</td><td>A short description of the media. Keep it one line.</td></tr><tr><td>info</td><td>(fun(self: Media): string)?</td><td>Additional long info about this media. Supports markdown</td></tr></tbody></table><blockquote><p>Question mark <code>?</code> means that type is optional -- it can be absent</p></blockquote><p>Any other fields, e.g. <code>url</code> or <code>my_super_important_field</code>, will be preserved when media is passed between states. So, while the fields above are reserved by <strong>Awirix</strong> and considered <em>special</em> (they provide additional functionality based on their presence) anything else is left for your needs.</p><h3 id="noun" tabindex="-1">Noun <a class="header-anchor" href="#noun" aria-hidden="true">#</a></h3><p>A small object that represents singular and plural forms of the noun.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>singular</td><td>string?</td><td>Singular form</td></tr><tr><td>plural</td><td>string?</td><td>Plural form</td></tr></tbody></table><h3 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-hidden="true">#</a></h3><p><code>Context</code> is object that is passed to the each state handler and is used to report progress or raise errors.</p><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>progress</td><td>func(message: string)</td><td>Sets the progress message to the given one</td></tr><tr><td>error</td><td>func(message: string)</td><td>Stops the execution and raises an error with the given message</td></tr></tbody></table><p>In generated extension&#39;s template you would see something like</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">-- @param media Media</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">-- @param ctx Context</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">media</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"></span></code></pre></div><p>That means you can use <code>ctx</code> param like this</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">ctx.</span><span style="color:#82AAFF;">progress</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Sending request...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.</span><span style="color:#82AAFF;">progress</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Parsing response...</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">ctx.</span><span style="color:#82AAFF;">error</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Oops!</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span></code></pre></div><p>Alright, now let&#39;s move to the <strong>steps</strong> themselves</p><h3 id="search" tabindex="-1">Search <a class="header-anchor" href="#search" aria-hidden="true">#</a></h3><p>A step that accepts text query by providing a user a text input screen.</p><p>This step may be omitted if this extension does not provide searching functionality. Might be the case if it is dedicated to the single show, movie, book etc.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">M.</span><span style="color:#FFCB6B;">search</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">query</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> {} </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> M</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>string?</td><td>Title to show when typing query.</td></tr><tr><td>subtitle</td><td>string?</td><td>Title in the list of search results.</td></tr><tr><td>placeholder</td><td>string?</td><td>Placeholder to show in the search input</td></tr><tr><td>handler</td><td>fun(query: string, ctx: Context): Media[]</td><td>Function that will be called to search for the media.</td></tr><tr><td>noun</td><td>Noun?</td><td>Noun that is used to name a single media.</td></tr></tbody></table><h3 id="layers" tabindex="-1">Layers <a class="header-anchor" href="#layers" aria-hidden="true">#</a></h3><p>Each layer returns a list of sub-media for the given one. For example, you can search for a show, then selected show will be passed to the first layer that&#39;s responsible for returning show&#39;s seasons. After that, the selected season will be passed to the second layer that would return season&#39;s episodes.</p><p>Layers may be omitted (<code>nil</code> or <code>0</code> length) if this extension does not provide such functionality (e.g. just search and watch, no seasons, no episodes). Each layer receives a single media selected from the <code>search</code> step or previous layer. If <code>search</code> step is omitted, first layer will receive a <code>nil</code> instead of the media.</p><blockquote><p>However, scraper <strong>must</strong> have either <code>layers</code>, <code>search</code> or <em>both</em></p></blockquote><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">M.</span><span style="color:#FFCB6B;">layers</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Layer 1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">media</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> {} </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Layer 2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">media</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> {} </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> M</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>Title to show in the list of layer&#39;s results.</td></tr><tr><td>handler</td><td>fun(media: Media, ctx: Context): Media[]</td><td>Function that will be called to run the layer.</td></tr><tr><td>noun</td><td>Noun?</td><td>Noun that is used to name a single media.</td></tr></tbody></table><h3 id="actions" tabindex="-1">Actions <a class="header-anchor" href="#actions" aria-hidden="true">#</a></h3><p>Actions are further actions that can be performed on the selected media. Something like <em>streaming</em> or <em>downloading</em> the selected media.</p><p>Actions may be omitted (<code>nil</code> or <code>0</code> length) if this extension does not provide such functionality (e.g. just media browsing, no actions), which is rare case but is allowed if you want to.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> M </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">M.</span><span style="color:#FFCB6B;">actions</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> {</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Stream</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Plays in your default video player</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">      max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">medias</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">   },</span></span>
<span class="line"><span style="color:#A6ACCD;">   {</span></span>
<span class="line"><span style="color:#A6ACCD;">      title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Download</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">medias</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#A6ACCD;"> M</span></span>
<span class="line"></span></code></pre></div><p>Note, that actions accept <code>Media[]</code> in their handlers. It makes sense for <code>Download</code> action to accept 10 or 20 medias to download them all at once but looks weird for the <code>Stream</code> action. Therefore, you can control how many medias an action can accept by changing <code>min/max</code> fields.</p><p>In this example, <code>Stream</code> action has field <code>max</code> set to <code>1</code>. That way, if user selected multiple medias, they would not be able to select this action.</p><div class="language-lua"><button title="Copy Code" class="copy"></button><span class="lang">lua</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    title </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Stream</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    description </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Plays in your default video player</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    max </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">handler</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">medias</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ctx</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">-- here we 100% than we won&#39;t receive more than 1 medias</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">local</span><span style="color:#A6ACCD;"> media </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> medias[</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">end</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>Field</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>title</td><td>string</td><td>Title to show in the list of actions.</td></tr><tr><td>description</td><td>string?</td><td>Short description of the action.</td></tr><tr><td>handler</td><td>fun(medias: Media[], ctx: Context)</td><td>Function that will be called to perform the action.</td></tr><tr><td>min</td><td>number?</td><td>Minimum number of the selected medias to perform this action</td></tr><tr><td>max</td><td>number?</td><td>Maximum number of the selected medias to perform this action</td></tr></tbody></table>`,56),o=[l];function p(r,c,i,d,y,D){return n(),a("div",null,o)}const h=s(t,[["render",p]]);export{A as __pageData,h as default};
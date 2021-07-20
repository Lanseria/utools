<template><h1 id="utools" tabindex="-1"><a class="header-anchor" href="#utools" aria-hidden="true">#</a> utools</h1>
<p>另类的 JavaScript 工具库</p>
<h2 id="treeforeach-树遍历" tabindex="-1"><a class="header-anchor" href="#treeforeach-树遍历" aria-hidden="true">#</a> treeForeach 树遍历</h2>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> treeForeach <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@lanseria/utools"</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 *
 * <span class="token keyword">@param</span> <span class="token parameter">node</span> A Node width children
 * <span class="token keyword">@param</span> <span class="token parameter">cb</span> A Function
 * <span class="token keyword">@param</span> <span class="token parameter">isRecursive</span> is Recursive
 * <span class="token keyword">@returns</span> void
 */</span>
<span class="token function">treeForeach</span><span class="token punctuation">(</span>
  node<span class="token punctuation">,</span>
  <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token boolean">true</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div></template>

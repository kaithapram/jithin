---
layout: page
title: Search
permalink: /search2/
---
<div id="search-container">
<input type="text" id="search-input" placeholder="Search...">
<ul id="results-container"></ul>
</div>

<script src="{{'/assets/js/search.js' | prepend: site.baseurl}}"></script>

<script>
SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '{{ site.url }}/search.json'
})
</script>
<br><br><br>
<button class="btn btn-block btn-info waves-effect waves-light" style="cursor: auto;">Google Search</button>
<form class="form-inline" method="get" action="https://www.google.com/search" target="google_window">
<input class="form-control mr-sm-2" type="text" name="q" size="20" maxlength="255" value=" Google search..." onfocus="if(this.value==' Google search...')this.value=''" onblur="if(this.value=='')this.value=' Google search...'"/>
<button class="btn btn-info mr-sm-2" type="submit" name="sa" value="Search">Search</button>
<input type="hidden" name="sitesearch" value="{{ site.url }}" checked="checked">
</form>



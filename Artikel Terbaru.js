function post_breakingnews_createEntries(){for(var e=feed.entry,t=[],n=0;n<jumlah_post;n++){var r=e[n],s=new Object;s.title=r.title.$t,s.href=getHref(r.link),t.push(s)}return t}function getBlogTitle(){return feed.title.$t}function getBlogURL(){return getHref(feed.link)}function getHref(e){for(var t=0;t<e.length;t++){var n=e[t];if("alternate"==n.rel)return n.href}return null}function post_breakingnews_start(e){feed=e.feed,entries=post_breakingnews_createEntries(),post_breakingnews_style(),post_breakingnews_content()}function post_breakingnews_text(){var e=feed_url+"?alt=json-in-script&callback=post_breakingnews_start&max-results="+jumlah_post,t="<script src='"+e+"'></script>";document.write(t)}function post_breakingnews_style(){var e="<style type='text/css'>";e+="#post_breakingnews{",e+="margin:0px;",e+="width:auto;",e+="background:#fff;",e+="}",e+="</style>",document.write(e)}function post_breakingnews_content(){var e="<div id='post_breakingnews'>";info_text&&(e+="<div class='breakingnews'>",e+="<div class='breakingnewstitle'>",e+="Artikel Terbaru",e+="</div>"),e+="  <marquee onmouseover='this.setAttribute(&#39scrollamount&#39,0);' onmouseout='this.setAttribute(&#39scrollamount&#39, "+marquee_speed+", 0);'>";for(var t=0;t<jumlah_post;t++){var n=entries[t];e+="<a href='"+n.href+"' ",e+=" title='"+n.title+"'>"+n.title+"</a>",t!=jumlah_post-1&&(e+=" | ")}e+="</marquee>",e+="</div>",close_button&&(e+="<div style='float:right;margin-right:15px;'>",e+="<a href='javascript:void(0)' onclick='document.getElementById(\"post_breakingnews\").style.display=\"none\"'>",e+="(x)",e+="</a>",e+="</div>"),document.write(e)}var entries,feed,feed_url=url_breaking.match(/\/$/)?url_breaking:url_breaking+"/";feed_url+="feeds/posts/default",post_breakingnews_text();
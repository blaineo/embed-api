Ext.data.JsonP.MTVNPlayer_Player({"parentMixins":[],"alternateClassNames":[],"tagname":"class","singleton":false,"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"html_meta":{},"mixins":[],"code_type":"assignment","inheritable":false,"requires":[],"meta":{},"files":[{"href":"api.html#MTVNPlayer-Player","filename":"api.js"}],"members":{"cfg":[{"owner":"MTVNPlayer.Player","tagname":"cfg","meta":{},"name":"config","id":"cfg-config"}],"method":[{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"bind","id":"method-bind"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{"private":true},"name":"checkEventName","id":"method-checkEventName"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{"private":true},"name":"checkEvents","id":"method-checkEvents"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"exitFullScreen","id":"method-exitFullScreen"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"getEmbedCode","id":"method-getEmbedCode"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{"deprecated":{"text":""}},"name":"getPlayerElement","id":"method-getPlayerElement"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"goFullScreen","id":"method-goFullScreen"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"mute","id":"method-mute"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"once","id":"method-once"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"pause","id":"method-pause"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"play","id":"method-play"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"playIndex","id":"method-playIndex"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"playURI","id":"method-playURI"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"seek","id":"method-seek"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"setVolume","id":"method-setVolume"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"unbind","id":"method-unbind"},{"owner":"MTVNPlayer.Player","tagname":"method","meta":{},"name":"unmute","id":"method-unmute"}],"property":[{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"currentMetadata","id":"property-currentMetadata"},{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"element","id":"property-element"},{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"playhead","id":"property-playhead"},{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"playlistMetadata","id":"property-playlistMetadata"},{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"ready","id":"property-ready"},{"owner":"MTVNPlayer.Player","tagname":"property","meta":{},"name":"state","id":"property-state"}],"css_var":[],"event":[],"css_mixin":[]},"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/api.html#MTVNPlayer-Player' target='_blank'>api.js</a></div></pre><div class='doc-contents'><p>The player object: use it to hook into events (<a href=\"#!/api/MTVNPlayer.Events\" rel=\"MTVNPlayer.Events\" class=\"docClass\">MTVNPlayer.Events</a>), call methods, and read properties.</p>\n\n<pre><code> var player = new <a href=\"#!/api/MTVNPlayer.Player\" rel=\"MTVNPlayer.Player\" class=\"docClass\">MTVNPlayer.Player</a>(element/id,config,events);\n player.bind(\"onReady\",function(event){player.mute();});\n player.pause();\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-cfg-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-cfg-config' class='name expandable'>config</a><span> : Object</span></div><div class='description'><div class='short'>The main configuration object. ...</div><div class='long'><p>The main configuration object.</p>\n<ul><li><span class='pre'>uri</span> : String<div class='sub-desc'><p>The URI of the media.</p>\n</div></li><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The width of the player</p>\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The height of the player</p>\n</div></li><li><span class='pre'>flashVars</span> : Object (optional)<div class='sub-desc'><p>Flashvars are passed to the flash player</p>\n</div></li><li><span class='pre'>params</span> : Object (optional)<div class='sub-desc'><p>wmode, allowFullScreen, etc. (allowScriptAccess is always forced to true). See <a href=\"http://kb2.adobe.com/cps/127/tn_12701.html\">Adobe Help</a></p>\n</div></li><li><span class='pre'>attributes</span> : Object (optional)<div class='sub-desc'><p>see <a href=\"http://kb2.adobe.com/cps/127/tn_12701.html\">Adobe Help</a></p>\n</div></li><li><span class='pre'>fullScreenCssText</span> : String (optional)<div class='sub-desc'><p>When the HTML5 player goes full screen, this is the css that is set on the iframe.</p>\n</div></li><li><span class='pre'>templateURL</span> : String (optional)<div class='sub-desc'><p>(For TESTING) A URL to use for the embed of iframe src. The template var for uri is {uri}, such as http://site.com/uri={uri}.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-currentMetadata' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-currentMetadata' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-currentMetadata' class='name expandable'>currentMetadata</a><span> : Object</span></div><div class='description'><div class='short'>The current metadata is the metadata that is playing back at this moment. ...</div><div class='long'><p>The current metadata is the metadata that is playing back at this moment.\nThis could be ad metadata, or it could be content metadata.\nTo access the metadata for the content items in the playlist see <a href=\"#!/api/MTVNPlayer.Player-property-playlistMetadata\" rel=\"MTVNPlayer.Player-property-playlistMetadata\" class=\"docClass\">playlistMetadata</a></p>\n\n<p><em>The best way to inspect the metadata is by using a modern browser and calling console.log(\"metadata\",metadata);</em></p>\n<p>Defaults to: <code>null</code></p><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of this metadata in relation to the playlist items. If isAd is true, the index will be -1.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>The duration of the content. This will update as the duration becomes more accurate.</p>\n</div></li><li><span class='pre'>live</span> : Boolean<div class='sub-desc'><p>Whether or not the video that's playing is a live stream.</p>\n</div></li><li><span class='pre'>isAd</span> : Boolean<div class='sub-desc'><p>Whether or not the video that's playing is an advertisment.</p>\n</div></li><li><span class='pre'>isBumper</span> : Boolean<div class='sub-desc'><p>Whether or not the video that's playing is a bumper.</p>\n</div></li><li><span class='pre'>rss</span> : Object<div class='sub-desc'><p>The data in the rss feed maps to this object, mirroring the rss's hierarchy</p>\n<ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>Corresponds to the rss title.</p>\n</div></li><li><span class='pre'>description</span> : String<div class='sub-desc'><p>Corresponds to the rss description.</p>\n</div></li><li><span class='pre'>link</span> : String<div class='sub-desc'><p>Corresponds to the rss link.</p>\n</div></li><li><span class='pre'>guid</span> : String<div class='sub-desc'><p>Corresponds to the rss guid.</p>\n</div></li><li><span class='pre'>group</span> : Object<div class='sub-desc'><p>Corresponds to the rss group.</p>\n<ul><li><span class='pre'>categories</span> : Object<div class='sub-desc'><p>Corresponds to the rss group categories</p>\n</div></li></ul></div></li></ul></div></li></ul></div></div></div><div id='property-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-element' class='name expandable'>element</a><span> : HTMLElement</span></div><div class='description'><div class='short'>The swf embed or the iframe element. ...</div><div class='long'><p>The swf embed or the iframe element. This may be null after invoking new <a href=\"#!/api/MTVNPlayer.Player\" rel=\"MTVNPlayer.Player\" class=\"docClass\">MTVNPlayer.Player</a>\nif swfobject needs to be loaded asynchronously. Once swfobject is loaded, the swf embed will be created and this.element will be set.\nIf this is a problem, load swfobject before creating players.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-playhead' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-playhead' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-playhead' class='name expandable'>playhead</a><span> : Number</span></div><div class='description'><div class='short'>The current playhead time in seconds. ...</div><div class='long'><p>The current playhead time in seconds.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-playlistMetadata' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-playlistMetadata' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-playlistMetadata' class='name expandable'>playlistMetadata</a><span> : Object</span></div><div class='description'><div class='short'>The playlistMetadata is the metadata about all the playlist items. ...</div><div class='long'><p>The playlistMetadata is the metadata about all the playlist items.</p>\n<p>Defaults to: <code>null</code></p><ul><li><span class='pre'>items</span> : Array<div class='sub-desc'><p>An array of metadata corresponding to each playlist item, see:<a href=\"#!/api/MTVNPlayer.Player-property-currentMetadata\" rel=\"MTVNPlayer.Player-property-currentMetadata\" class=\"docClass\">currentMetadata</a></p>\n</div></li></ul></div></div></div><div id='property-ready' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-ready' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-ready' class='name expandable'>ready</a><span> : Boolean</span></div><div class='description'><div class='short'>The current ready state of the player ...</div><div class='long'><p>The current ready state of the player</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-state' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-property-state' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-property-state' class='name expandable'>state</a><span> : String</span></div><div class='description'><div class='short'>The current play state of the player. ...</div><div class='long'><p>The current play state of the player.</p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/MTVNPlayer.Player-method-constructor' class='name expandable'>MTVNPlayer.Player</a>( <span class='pre'>String/HTMLElement id-or-element, Object config, Object events</span> ) : Object</div><div class='description'><div class='short'>Create a new MTVNPlayer.Player ...</div><div class='long'><p>Create a new <a href=\"#!/api/MTVNPlayer.Player\" rel=\"MTVNPlayer.Player\" class=\"docClass\">MTVNPlayer.Player</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id-or-element</span> : String/HTMLElement<div class='sub-desc'><p>Pass in a string id, or an actual HTMLElement</p>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>config object, see: <a href=\"#!/api/MTVNPlayer.Player-cfg-config\" rel=\"MTVNPlayer.Player-cfg-config\" class=\"docClass\">config</a></p>\n</div></li><li><span class='pre'>events</span> : Object<div class='sub-desc'><p>Event callbacks, see: <a href=\"#!/api/MTVNPlayer.Events\" rel=\"MTVNPlayer.Events\" class=\"docClass\">MTVNPlayer.Events</a></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p><a href=\"#!/api/MTVNPlayer.Player\" rel=\"MTVNPlayer.Player\" class=\"docClass\">MTVNPlayer.Player</a></p>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-bind' class='name expandable'>bind</a>( <span class='pre'>String eventName, Function callback</span> )</div><div class='description'><div class='short'>Adds an event listener for an event. ...</div><div class='long'><p>Adds an event listener for an event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>an <a href=\"#!/api/MTVNPlayer.Events\" rel=\"MTVNPlayer.Events\" class=\"docClass\">MTVNPlayer.Events</a>.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to invoke when the event is fired.</p>\n</div></li></ul></div></div></div><div id='method-checkEventName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-checkEventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-checkEventName' class='name expandable'>checkEventName</a>( <span class='pre'>String eventName</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>Check if the event exists in our list of events.</p>\n</div></li></ul></div></div></div><div id='method-checkEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-checkEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-checkEvents' class='name expandable'>checkEvents</a>( <span class='pre'>Object events</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : Object<div class='sub-desc'><p>Loop through the events, and check the event names</p>\n</div></li></ul></div></div></div><div id='method-exitFullScreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-exitFullScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-exitFullScreen' class='name expandable'>exitFullScreen</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Exits full screen and returns the player to its initial embed size. ...</div><div class='long'><p>Exits full screen and returns the player to its initial embed size.\nDoes not work with Prime builds older than 1.12.</p>\n</div></div></div><div id='method-getEmbedCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-getEmbedCode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-getEmbedCode' class='name expandable'>getEmbedCode</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the embed code used to share this instance of the player ...</div><div class='long'><p>Returns the embed code used to share this instance of the player</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>the embed code as a string.</p>\n</div></li></ul></div></div></div><div id='method-getPlayerElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-getPlayerElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-getPlayerElement' class='name expandable'>getPlayerElement</a>( <span class='pre'></span> )<strong class='deprecated signature'>deprecated</strong></div><div class='description'><div class='short'>2.1.0 Use element ...</div><div class='long'><p>2.1.0 Use <a href=\"#!/api/MTVNPlayer.Player-property-element\" rel=\"MTVNPlayer.Player-property-element\" class=\"docClass\">element</a></p>\n        <div class='signature-box deprecated'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        \n\n        </div>\n</div></div></div><div id='method-goFullScreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-goFullScreen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-goFullScreen' class='name expandable'>goFullScreen</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Puts the player in full screen mode, does not work for the flash player do the flash restrictions. ...</div><div class='long'><p>Puts the player in full screen mode, does not work for the flash player do the flash restrictions.</p>\n</div></div></div><div id='method-mute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-mute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-mute' class='name expandable'>mute</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Mutes the volume ...</div><div class='long'><p>Mutes the volume</p>\n</div></div></div><div id='method-once' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-once' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-once' class='name expandable'>once</a>( <span class='pre'>String eventName, Function callback</span> )</div><div class='description'><div class='short'>Adds an event listener for an event that will only fire once and then be removed. ...</div><div class='long'><p>Adds an event listener for an event that will only fire once and then be removed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>an <a href=\"#!/api/MTVNPlayer.Events\" rel=\"MTVNPlayer.Events\" class=\"docClass\">MTVNPlayer.Events</a>.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to invoke when the event is fired.</p>\n</div></li></ul></div></div></div><div id='method-pause' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-pause' class='name expandable'>pause</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Pauses the media. ...</div><div class='long'><p>Pauses the media.</p>\n</div></div></div><div id='method-play' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-play' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-play' class='name expandable'>play</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Begins playing or unpauses. ...</div><div class='long'><p>Begins playing or unpauses.</p>\n</div></div></div><div id='method-playIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-playIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-playIndex' class='name expandable'>playIndex</a>( <span class='pre'>Number index, Number startTime</span> )</div><div class='description'><div class='short'>Play an item from the playlist specified by the index and optionally at a certain time in the clip. ...</div><div class='long'><p>Play an item from the playlist specified by the index and optionally at a certain time in the clip.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>startTime</span> : Number<div class='sub-desc'><p>value between 0 and the duration of the current clip.</p>\n</div></li></ul></div></div></div><div id='method-playURI' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-playURI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-playURI' class='name expandable'>playURI</a>( <span class='pre'>String uri</span> )</div><div class='description'><div class='short'>Play a new URI ...</div><div class='long'><p>Play a new URI</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uri</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-seek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-seek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-seek' class='name expandable'>seek</a>( <span class='pre'>Number value</span> )</div><div class='description'><div class='short'>Seeks to the time specified in seconds relative to the first clip. ...</div><div class='long'><p>Seeks to the time specified in seconds relative to the first clip.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>between 0 and the duration of the playlist.\nThe value is relative to the first clip. It's recommended that when\nseeking to another clip besides the first, use <a href=\"#!/api/MTVNPlayer.Player-method-playIndex\" rel=\"MTVNPlayer.Player-method-playIndex\" class=\"docClass\">playIndex</a>.</p>\n</div></li></ul></div></div></div><div id='method-setVolume' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-setVolume' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-setVolume' class='name expandable'>setVolume</a>( <span class='pre'>Number value</span> )</div><div class='description'><div class='short'>Change the volume ...</div><div class='long'><p>Change the volume</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>between 0 and 1.</p>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-unbind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-unbind' class='name expandable'>unbind</a>( <span class='pre'>String eventName, Function callback</span> )</div><div class='description'><div class='short'>Removes an event listener ...</div><div class='long'><p>Removes an event listener</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : String<div class='sub-desc'><p>an MTVNPlayer.Event.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The function to that was bound to the event.</p>\n</div></li></ul></div></div></div><div id='method-unmute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='MTVNPlayer.Player'>MTVNPlayer.Player</span><br/><a href='source/api.html#MTVNPlayer-Player-method-unmute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/MTVNPlayer.Player-method-unmute' class='name expandable'>unmute</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Returns the volume to the level before it was muted. ...</div><div class='long'><p>Returns the volume to the level before it was muted.</p>\n</div></div></div></div></div></div></div>","component":false,"aliases":{},"inheritdoc":null,"superclasses":[],"name":"MTVNPlayer.Player","uses":[],"mixedInto":[],"subclasses":[],"id":"class-MTVNPlayer.Player","extends":null});
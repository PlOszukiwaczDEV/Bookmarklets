// I am very busy so i will finish adding new features later


// download site info
function downloadSiteInfo(filename, text){
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();
    element.remove();
}

var html = `
	<!-- navigation ->
	<div class="devConsole-container-nav">
		<a class="devConsole-container-nav-elementViewer" style="float: left;">` + "\uD83D\uDD0D" + `</a>
		<a class="devConsole-container-nav-elementEditor" style="float: left;">` + "\u270E" + `</a>
		<a name="devConsole-container-body-elements" style="float: left;">Elements</a>
		<a name="devConsole-container-body-console" style="float: left;">Console</a>
		<a name="devConsole-container-body-sources" style="float: left;">Sources</a>
		<a name="devConsole-container-body-tools" style="float: left;">Tools</a>
		<a name="devConsole-container-body-settings" style="float: left;">Settings</a>
		<a class="devConsole-container-body-exit" style="float: right;">` + "\uD83D\uDDD9" + `</a>
	</div>

	<!-- elements tab->
	<div class="devConsole-container-body">
		<div class="devConsole-container-body-elements hidden">
			<h3 style="border-bottom: 2px solid #000;">Elements</h3>
            <div class="devConsole-container-body-elements-container" style="white-space: pre; width: 100%; height: 200px; overflow: scroll;">
        </div>
	</div>
	
	<!-- console tab ->
	<div class="devConsole-container-body-console hidden">
		<div class="devConsole-container-body-console-text" style="user-select: auto;">
			<div class="devConsole-container-body-console-messages">
				<span style="color: #bababa; user-select: none;">` + "\u2B9E" + new Date().toLocaleTimeString().split(" ")[0] + ` </span>
				<span style="color: #000;">Console has loaded!</span>
			</div>
		</div>
		<div class="devConsole-container-body-console-commands">
			<textarea id="devConsole-container-body-console-input" placeholder="console.log('Hello World!');" style="resize: horizontal; position: sticky; width: 100%; height: 90%; outline: none; border: none;"></textarea>
		</div>
	</div>

	<div class="devConsole-container-body-sources showing">
		<div class="devConsole-container-body-sources-scripts" style="padding-left: 10px;">
			<h3 style="border-bottom: 2px solid #000;">Page <a class="devConsole-container-body-sources-scripts-reload" style="cursor: pointer; color: #0a68ff; user-select: none;">` + "\u21BA" + `</a></h3>
			<div class="devConsole-container-body-sources-scripts-container" style="float: left; width: 60%; background-color: #bababa;">
				<ul style="float: left; width: 26%; padding: 3%; margin: 0;">
					<li>Scripts</li>
					<ul class="devConsole-container-body-sources-other" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">
						<li>Main.js</li>
						<li>Script.js</li>
					</ul>
				</ul>
				<ul style="float: left; width: 26%; padding: 3%; margin: 0;">
					<li>Styles</li>
					<ul class="devConsole-container-body-sources-styles" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">
						<li>Main.css</li>
						<li>Style.css</li>
					</ul>
				</ul>
				<ul style="float: left; width: 26%; padding: 3%; margin: 0;">
					<li>Meta</li>
					<ul class="devConsole-container-body-sources-main" style="padding: 3px; height: 120px; overflow:hidden; overflow-y:scroll; background-color: #e0e0e0;">
						<li>Index.js</li>
						<li>Style.js</li>
					</ul>
				</ul>
			</div>
				
			<div class="devConsole-container-body-sources-scripts-preview" style="float: left; width: 40 %; background-color: #bababa;">
				<iframe class="devConsole-container-body-sources-scripts-preview-frame" width="100%" height="100%" frameborder="0" scrolling="yes"></iframe>
			</div>
		</div>
	</div>

	<div class="devConsole-container-body-tools hidden">
		<h3 style="border-bottom: 2px solid #000;">Tools</h3>
        <h4>Local Storage</h4><div id="devConsole-localStorage"></div>
	</div>
		
	<div class="devConsole-container-body-settings hidden">
		<h3 style="border-bottom: 2px solid #000;">Settings</h3>
	</div>
`

var javascript = `
	var variables = {

	}
`



		listeners: [],
		loaded: true,
		showing: true,
		hijackFunctions: true,
        hideLogs: true, 
		log: console.log,
		warn: console.warn,
		error: console.error,
		tooltip: {
			showing : false,
			offsetX : 0,
			offsetY : 0,
			color : "rgba(0, 0, 0, 1)"
		}
	}
	/*
	Element.prototype.oldAddEventListener = Element.prototype.addEventListener;
	Element.prototype.addEventListener = function(type, handler, capture) {
		if (!capture) {
			capture = false;
		}
		this.oldAddEventListener(type, handler, capture);
		variables.listeners.push({
			type : type,
			func : handler,
			capture : capture,
			elem : this,
			enabled : true
		});
	}

    // disable listener
	function disableListener(index) {
		var elem = variables.listeners[index].elem;
		var type = variables.listeners[index].type;
		var func = variables.listeners[index].func;
		variables.listeners[index].enabled = false;
		var capture = variables.listeners[index].capture;
		elem.removeEventListener(type, func, capture);
	}

    // toggle listener
	function toggleListener(index) {
		if (variables.listeners[index].enabled) {
			disableListener(index);
		} else {
			enableListener(index);
		}
	}

    // enable listener
	function enableListener(index) {
		var elem = variables.listeners[index].elem;
		var type = variables.listeners[index].type;
		var func = variables.listeners[index].func;
		var capture = variables.listeners[index].capture;
		variables.listeners[index].enabled = true;
		elem.oldAddEventListener(type, elem, func, capture);
	}
	*/

    // log msg
    console.log = function(msg) {
		var c = document.getElementsByClassName("devConsole-container-body-console-text")[0];
		var cHeight = 10;
		if (variables.hijackFunctions && c) {
			try {
				msg = msg.replace(/(\?\:\\r\\n|\\r|\\n)/g, "<br>");
			} catch(e) {}
            if (typeof(msg) == "number") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2705" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #0015ff;"> ' + msg +'</span></div>';	
			} else if (typeof(msg) == "string") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2705" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #1c0000;">' + msg +'</span><span style="color: #000">"</span></div>';				
			} else if (typeof(msg) == "function") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2705" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #1c0000;">' + msg +'</span><span style="color: #000">"</span></div>';								
			} else if (typeof(msg) == "undefined") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2B9E" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #b5b5b5;"> ' + msg +'</span></div>';
			} else {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2705" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #1c0000;"> ' + msg +'</span></div>';
			}
			if (c.childElementCount > cHeight) {
				c.children[0].remove();
			}
			document.getElementById("devConsole-container-body-console-input").scrollIntoView();
		} else {
			variables.log(msg);
		}
	}
    

    // error msg
	console.error = function(msg) {
		var c = document.getElementsByClassName("devConsole-container-body-console-text")[0];
		var cHeight = 10;
		if (variables.hijackFunctions && c) {
			try {
				msg = msg.replace(/(\?\:\\r\\n|\\r|\\n)/g, "<br>");
			} catch(e) {}
			if (variables.hideLogs) {
                // Stop logging
			} else if (typeof(msg) == "number") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u274C" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #0015ff;"> ' + msg +'</span></div>';	
			} else if (typeof(msg) == "string") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u274C" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #d10000;">' + msg +'</span><span style="color: #000">"</span></div>';				
			} else if (typeof(msg) == "function") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u274C" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #d10000;">' + msg +'</span><span style="color: #000">"</span></div>';								
			} else if (typeof(msg) == "undefined") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2B9E" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #b5b5b5;"> ' + msg +'</span></div>';
			} else {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u274C" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #d10000;"> ' + msg +'</span></div>';
			}
			if (c.childElementCount > cHeight) {
				c.children[0].remove();
			}
			document.getElementById("devConsole-container-body-console-input").scrollIntoView();
		} else {
			variables.log(msg);
		}
	}
	
    // warn msg
	console.warn = function(msg) {
		var c = document.getElementsByClassName("devConsole-container-body-console-text")[0];
		var cHeight = 10;
		if (variables.hijackFunctions && c) {
			try {
				msg = msg.replace(/(\?\:\\r\\n|\\r|\\n)/g, "<br>");
			} catch(e) {}
			if (variables.hideLogs) {
                // Stop logging
			} else if (typeof(msg) == "number") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u26A0\uFE0F" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #0015ff;"> ' + msg +'</span></div>';	
			} else if (typeof(msg) == "string") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u26A0\uFE0F" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #998201;">' + msg +'</span><span style="color: #000">"</span></div>';				
			} else if (typeof(msg) == "function") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u26A0\uFE0F" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #000"> "</span><span style="color: #998201;">' + msg +'</span><span style="color: #000">"</span></div>';								
			} else if (typeof(msg) == "undefined") {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u2B9E" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #b5b5b5;"> ' + msg +'</span></div>';
			} else {
				c.innerHTML += '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">` + "\u26A0\uFE0F" + `' + new Date().toLocaleTimeString().split(" ")[0] + '</span><span style="color: #998201;"> ' + msg +'</span></div>';
			}
			if (c.childElementCount > cHeight) {
				c.children[0].remove();
			}
			document.getElementById("devConsole-container-body-console-input").scrollIntoView();
		} else {
			variables.log(msg);
		}
	}
`.trim();

    var css = `	
	@keyframes slideUp {
		0% {
			transform: translateY(100%);
		}
		100% {
			transform: translateY(0);
		}
	}
  
	.tooltip {
		display: inline-block;
		position: relative;
	}

	.tooltip .tooltiptext {
		background-color: black;
		transition: opacity 1s;
		visibility: hidden;
		text-align: center;
		border-radius: 6px;
		position: absolute;
		margin-left: -60px;
		padding: 5px 0;
		bottom: 100%;
		width: 120px;
		color: #fff;
		z-index: 1;
		opacity: 0;
		left: 50%;
	}

	.tooltip:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}
	
	.hidden {
		display: none !important;
	}
	
	.showing {
		display: block !imporant;
	}

	.devConsole-container-body-console-messages {
		font-family: Consolas, monaco, monospace, serif;
	}
	
	.devConsole-container {
		box-shaddow: 0 2px 30px 0 rgba(0, 0, 60, 0.045), 0px 1px 3px 0 rgba(0, 0, 80, 0.03);
		animation: 1s ease-out 0s 1 slideUp;
		background-color: #f9f9f9;
		z-index: 9999999999999999;
		vertical-align: baseline;
		flex-direction: column;
		box-sizing: border-box;
		transition: 0.2s;
		position: fixed;
		height: 300px;
		display: flex;
		width: 100%;
		padding: 0;
		outline: 0;
		margin: 0;
		bottom: 0;
		left: 0;
	}
	
	.devConsole-container-nav {
		border-top: 1px solid #848484;
		border-bottom: 1px solid #848484;
		justify-content: space-between;
		-webkit-box-direction: normal;
		background-color: #f2f2f2;
		-webkit-box-pack: justify;
		box-sizing: border-box;
		user-select: none;
		min-height: 25px;
		line-height: 1;
		cursor: ns-resize;
		color: #000;
		width: 100%;
		padding: 0;
		margin: 0;
	}
	
	.devConsole-container-nav a, .devConsole-container-nav span {
		padding: 3px 5px 0 5px;
		min-height: 20px;
	}
	
	.devConsole-container-nav a:hover {
		background-color: rgba(0, 0, 0, 0.05);
		border-bottom: 1px solid #00add8;
		transition: background-color 0.25s;
		cursor: pointer;
	}
	
    .string, .boolean, .number { font-weight: bold; }

	.string { color: rgb(233, 63, 59); }

    .boolean, .number { color: rgb(85, 106, 242); }

    .null { color: grey; }

    .key { font-style: italic; }
`.trim();

    var tooltip = `
	<div id="devConsole-tooltip" style="padding: 5px; background-color: #000; position: absolute; color: #fff; user-select: none; z-index: 99999999999; border-radius: 10px; ">
		<span id="devConsole-tooltip-elementType" style="color:purple;"></span>
		<span id="devConsole-tooltip-classType" style="color:green;"></span>
		<span id="devConsole-tooltip-idType" style="color:orange;"></span>
	</div>
`.trim();

    var injectedHtml = document.createElement("div");
    injectedHtml.classList.add("devConsole-container");
    injectedHtml.classList.add("showing");
    injectedHtml.innerHTML = html;
    document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0].appendChild(injectedHtml) : document.documentElement.appendChild(injectedHtml);
    var consoleContainer = document.getElementsByClassName("devConsole-container showing")[0];

    var injectedTooltip = document.createElement("div");
    injectedTooltip.classList.add("devConsole-tooltip-container");
    injectedTooltip.style.display = "none";
    injectedTooltip.innerHTML = tooltip;
    document.getElementsByTagName("body")[0] ? document.getElementsByTagName("body")[0].appendChild(injectedTooltip) : document.documentElement.appendChild(injectedTooltip);
    var tooltipContainer = document.getElementsByClassName("devConsole-tooltip-container")[0];

    var injectedCss = document.createElement("style");
    injectedCss.textContent = css.trim();
    injectedCss.classList.add("devConsole-injectedCss");
    document.head ? document.head.appendChild(injectedCss) : document.body.appendChild(injectedCss);

    var injectedJS = document.createElement("script");
    injectedJS.textContent = javascript.trim();
    injectedJS.classList.add("devConsole-injectedJS");
    document.head ? document.head.appendChild(injectedJS) : document.body.appendChild(injectedJS);

    function highlightJSON(json) {
        if (typeof json != 'string') {
            json = JSON.stringify(json, undefined, 2);
        }
        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
            var cls = 'number';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return '<span class="' + cls + '">' + match + '</span>';
        });
    }
    document.getElementById('devConsole-localStorage').innerHTML = highlightJSON(localStorage);

    var consoleInput = document.getElementById("devConsole-container-body-console-input");
    consoleInput.addEventListener("keydown", function (e) {
        if (e.keyCode == 76 && e.ctrlKey && !e.altKey && !e.shiftKey && variables.loaded) {
            document.getElementsByClassName("devConsole-container-body-console-text")[0].innerHTML = '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">⮞' + new Date().toLocaleTimeString().split(" ")[0] + ' </span><i style="color: #bababa;">Console was cleared</i></div>';
            this.value = '';
        }

        if (e.keyCode == 13 && !e.ctrlKey && !e.altKey && !e.shiftKey && variables.loaded) {
            e.preventDefault();
            var val = this.value.toLowerCase().replace(/\r?\n|\r/g, "");
            if (val == "clear" || val == "clear()" || val == "clear();" || val == "console.clear()" || val == "console.clear();") {
                document.getElementsByClassName("devConsole-container-body-console-text")[0].innerHTML = '<div class="devConsole-container-body-console-messages"><span style="color: #bababa; user-select: none;">⮞' + new Date().toLocaleTimeString().split(" ")[0] + ' </span><i style="color: #bababa;">Console was cleared</i></div>';
                this.value = '';
            } else if (val == "info" || val == "info;" || val == "getInfo" || val == "get info") {
                downloadSiteInfo('Website Info.txt', `
Website Location: ${document.location.href}
Screen Width: ${window.innerWidth}
Screen Height: ${window.innerHeight}
HTML Length: ${document.body.innerHTML.length}
Text Length: ${document.body.textContent.length}
Loaded Scripts: ${document.getElementsByTagName('script').length}
Loaded Styles: ${document.getElementsByTagName('link').length}
Meta Tags: ${document.getElementsByTagName('meta').length}
Executed Threads (Intervals & Loops): ${setInterval(';')}
Date Opened: ${new Date()}
Timezone: ${(new Date()).getTimezoneOffset() / 60}
Referrer: ${document.referrer}
Cookies: ${document.cookie}
User-Agent: ${navigator.userAgent}
Language: ${navigator.language}
Local Storage: ${JSON.stringify(localStorage)}
                `.trim());
                this.value = '';
            } else if (val == "hidelogs()" || val == "hideLogs();" || val == "hidelogs();" || val == "hideLogs();") {
                variables.hideLogs = !variables.hideLogs;
            } else {
                try {
                    console.log(eval(this.value));
                } catch (e) {
                    console.error(e);
                }
                this.value = '';
            }
        }
    });

    var elementViewer = document.getElementsByClassName("devConsole-container-nav-elementViewer")[0];
    elementViewer.addEventListener("click", function () {

    });

    // Tooltip
    document.addEventListener("mousemove", function (e) {
        tooltip = variables.tooltip;
        if (variables.loaded) {
            if (tooltip.showing) {
                // Show tooltip
                document.getElementsByClassName("devConsole-tooltip-container")[0].style.display = "block";
                document.getElementsByClassName("devConsole-tooltip-container")[0].style.backgroundColor = tooltip.color;

                // Does the target have a tag name?
                if (e.target.tagName.toLowerCase() != "") { // Yes
                    document.getElementById("devConsole-tooltip-elementType").innerHTML = e.target.tagName.toLowerCase();
                } else { // No
                    document.getElementById("devConsole-tooltip-elementType").innerHTML = "";
                }

                // Does the target have a class name?
                if (e.target.className != "") { // Yes
                    document.getElementById("devConsole-tooltip-classType").innerHTML = "." + e.target.className;
                } else { // No
                    document.getElementById("devConsole-tooltip-classType").innerHTML = "";
                }

                // Does the target have an ID?
                if (e.target.id != "" && e.target.id != "devConsole-tooltip-elementType" && e.target.id != "devConsole-tooltip-elementType" && e.target.id != "devConsole-tooltip-classType" && e.target.id != "devConsole-tooltip") { // Yes
                    document.getElementById("devConsole-tooltip-idType").innerHTML = "#" + e.target.id;
                } else { // No
                    document.getElementById("devConsole-tooltip-idType").innerHTML = "";
                }

                // Position tooltip
                moveToolTip(e);
            } else {
                document.getElementsByClassName("devConsole-tooltip-container")[0].style.display = "none";
            }
        }
    });

    document.getElementsByClassName("devConsole-container-nav-elementViewer")[0].addEventListener("click", function () {
        if (variables.loaded) {
            variables.tooltip.showing = !variables.tooltip.showing;
            console.log("Tooltip showing: " + variables.tooltip.showing);
        }
    });

    // Position tooltip function
    function moveToolTip(e) {
        var tooltip = document.getElementById("devConsole-tooltip");
        tooltip.style.left = e.pageX + 8 + 'px';
        tooltip.style.top = e.pageY + 'px';
        tooltip.offsetX = e.pageX + 8 + 'px';
        tooltip.offsetY = e.pageY + 'px';
    }

    var elements = document.getElementsByClassName("devConsole-container-nav")[0].getElementsByTagName("a");
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].name) {
            elements[i].addEventListener("click", function () {
                if (variables.loaded) {
                    var elems = document.getElementsByClassName("devConsole-container-body")[0].children;
                    var curElem = document.getElementsByClassName(this.name)[0];
                    for (let i = 0; i < elems.length; i++) {
                        try {
                            elems[i].classList.remove("hidden");
                            elems[i].classList.remove("showing");
                        } catch (e) {
                            console.log(elems[i]);
                        }
                        elems[i].classList.add("hidden");
                    }
                    curElem.classList.remove("hidden");
                    curElem.classList.add("showing");
                }
            });
        }
    }

    document.getElementsByClassName("devConsole-container-body-exit")[0].addEventListener("click", function () {
        // if (confirm(atob("QXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNsb3NlIFNub3dMb3JkJ3MgRGV2ZWxvcGVyIENvbnNvbGU/"))) {
        document.getElementsByClassName("devConsole-container")[0].remove();
        document.getElementsByClassName("devConsole-tooltip-container")[0].remove();
        document.getElementsByClassName("devConsole-injectedCss")[0].remove();
        document.getElementsByClassName("devConsole-injectedJS")[0].remove();
        variables.hijackFunctions = false;
        variables.loaded = false;
        variables.showing = false;
        // }
    });

    document.getElementsByClassName("devConsole-container-nav-elementEditor")[0].addEventListener("click", function () {
        if (document.body.contentEditable != "true" || document.body.designMode != "on") {
            console.log("Editing elements: true");
            document.body.contentEditable = "true";
            document.body.designMode = "on";
        } else {
            console.log("Editing elements: false");
            document.body.contentEditable = "false";
            document.body.designMode = "off";
        }
    });

    document.getElementsByClassName("devConsole-container-body-sources-scripts-reload")[0].addEventListener("click", function () {
        var main = document.getElementsByClassName("devConsole-container-body-sources-main")[0];
        var styles = document.getElementsByClassName("devConsole-container-body-sources-styles")[0];
        var other = document.getElementsByClassName("devConsole-container-body-sources-other")[0];
        main.innerHTML = other.innerHTML = styles.innerHTML = '';

        for (let i = 0; i < document.getElementsByTagName("script").length; i++) {
            if (document.getElementsByTagName("script")[i].src) other.innerHTML += '<li><a onclick=\'document.getElementsByClassName("devConsole-container-body-sources-scripts-preview-frame")[0].src = this.href;\' href="#">' + document.getElementsByTagName("script")[i].src.split("/").pop() + '</a></li>';
        }

        for (let i = 0; i < document.getElementsByTagName("link").length; i++) {
            styles.innerHTML += '<li><a onclick=\'document.getElementsByClassName("devConsole-container-body-sources-scripts-preview-frame")[0].src = this.src;\' target="_blank">' + document.getElementsByTagName("link")[i].href.split("/").pop() + '</a></li>';
        }
	    
        for (let i = 0; i < document.getElementsByTagName("meta").length; i++) {
            // main.innerHTML += '<li><a onclick="alert(\'' + document.getElementsByTagName("meta")[i].content + '\');">' + (document.getElementsByTagName("meta")[i].name || document.getElementsByTagName("meta").property) + '</a></li>';
            main.innerHTML += '<li><a onlick="alert(' + 'hi' + ')"></a></li>'
	}
    });

    document.getElementsByClassName("devConsole-container-body-sources-scripts-reload")[0].click();
    document.getElementsByClassName('devConsole-container-body-elements-container')[0].textContent = document.body.innerHTML.replace(/<\/\w+>/g, (e) => e + '\r\n');
})();

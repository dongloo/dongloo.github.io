/*!
 * Responsive Switch 0.9.1 | @danielfilzhut | MIT/GPL2 Licensed
 */

var responsiveSwitch = (function() {
	
	// Screen configuration
	var responsiveSwitchBreakpoint	= parseInt(window.responsiveSwitchBreakpoint) || 1024;

	// Internal vars
	var rsLinkCookieName			= "ResponsiveSwitch";
	var attrViewportOriginal		= "content";
	var attrViewportBackup			= "data-rs";
	var attrLinkToDesktop			= "data-link-desktop";
	var attrLinkToResponsive		= "data-link-responsive";
	var attrAlwaysVisible			= "data-always-visible";

	// Class names
	var linkClassName				= "rs-link";
	var linkToDesktopClassName		= "rs-link-to-desktop";
	var linkToResponsiveClassName	= "rs-link-to-responsive";
	var linkInactiveClassName		= "rs-link-inactive";
	var linkActiveClassName			= "rs-link-active";
	
	// Switch viewport
	function rsViewport() {
	    var viewportNode = document.querySelector('meta[name="viewport"]');

	    // Backup original viewport
	    if (viewportNode.getAttribute(attrViewportBackup) == undefined) {
	        viewportNode.setAttribute(attrViewportBackup, viewportNode.getAttribute(attrViewportOriginal));
	    }

	    // Switch to desktop version
	    if (viewportNode.getAttribute(attrViewportOriginal) == viewportNode.getAttribute(attrViewportBackup)) {
	        document.cookie = rsLinkCookieName + "=true;path=/";
			if (document.documentElement.clientWidth != window.innerWidth) {
				document.location.href = getReloadUrl();
			} else {
			    viewportNode.setAttribute(attrViewportOriginal, 'width=' + responsiveSwitchBreakpoint + 'px, initial-scale=' + (document.documentElement.clientWidth / responsiveSwitchBreakpoint));
			}
	    }

		// Switch to responsive version
	    else {
        	document.cookie = rsLinkCookieName + "=false;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
	    	if (document.documentElement.clientWidth != window.innerWidth) {
				document.location.href = getReloadUrl();
	    	} else {
	        	viewportNode.setAttribute(attrViewportOriginal, viewportNode.getAttribute(attrViewportBackup));
	    	}	
	    }

	    return false;
	}

	// Switch to correct link title
	var linksBound = false;
	function rsLink() {
	    var linkNodes = document.querySelectorAll("." + linkClassName);
	    for (var i = 0; i < linkNodes.length; i++) {
		    var linkNode = linkNodes[i];
	        if (linkNode != undefined) {			        

		        // Remove classes from link
	        	removeClass(linkNode, linkToResponsiveClassName);
	        	removeClass(linkNode, linkToDesktopClassName);
	        	removeClass(linkNode, linkInactiveClassName);
	        	removeClass(linkNode, linkActiveClassName);

	        	// Switch link to DESKTOP version
	            if (isCookieSet()) {
	            	addClass(linkNode, linkToResponsiveClassName);
	            	addClass(linkNode, linkActiveClassName);
	            	linkNode.innerHTML = linkNode.getAttribute(attrLinkToResponsive);
	            }

	        	// Switch link to RESPONSIVE version
	            else if(document.documentElement && (document.documentElement.clientWidth < responsiveSwitchBreakpoint || linkNode.getAttribute(attrAlwaysVisible) == "true")) {
	            	addClass(linkNode, linkToDesktopClassName);
	            	addClass(linkNode, linkActiveClassName);
	            	linkNode.innerHTML = linkNode.getAttribute(attrLinkToDesktop);
	            }

	        	// Hide link
	            else {
	            	addClass(linkNode, linkInactiveClassName);
		            linkNode.innerHTML = "";
	            }

		        // Bind event listener
		        if (!linksBound) {
		    		linkNode.addEventListener("click", function(e) {
						e = e || window.event;
						e.preventDefault();
		    			toggle();
		    		}, false);
		        }
	        }
	    }
	    linksBound = true;
	}

	// Toggle viewport and links
	function toggle() {
		rsViewport();
		rsLink();
	}

	// Intializes behaviour
	function init() {

		// Set viewport (cookie based)
		if (isCookieSet()) {
			rsViewport();
		}
		
		// Set link title & bind event listener
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", rsLink, false);
			document.addEventListener("orientationchange", rsLink, false);
			window.addEventListener("resize", rsLink, false);
		}
	}

	// HELPER: Checks whether cookie set
	function isCookieSet() {
		return document.cookie.search(rsLinkCookieName + "=true") > -1;
	}

	// HELPER: Adds class name to node
	function addClass(node, classToAdd) {
		node.className += ' ' + classToAdd;
	}

	// HELPER: Removes class name from node
	function removeClass(node, classToRemove) {
		node.className = ' ' + node.className + ' ';
		node.className = node.className.replace(' ' + classToRemove + ' ', '');
	}

	// HELPER: Returns reload URL
	function getReloadUrl() {
		var date = new Date();
		var tmpVar = date.getTime();
		return document.location.protocol + "//" + document.location.host + document.location.pathname + (window.location.search ? window.location.search + "&" : "?") + "rsTimestamp=" + tmpVar + document.location.hash;
	}

	// Initialize the whole shebang
	init();

	// PUBLIC API methods
	return {
		toggle : toggle
	};
	
})();
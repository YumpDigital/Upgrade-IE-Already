/**
 * See README.md and LICENCE for more details
 *
 * Requires:
 *   - jQuery
 *   - Cookies.js
 *
 * TODO:
 *   - Drop requirement for jQuery
 *   - Make cookie library optional
 */
// Don't output the following HTML if the "dismiss" cookie is set (which is stored for 7 days)
if (window.Cookies && Cookies.get("OldIEWarning") == "dismiss")
	return;

var ieVersion = parseInt(navigator.userAgent.toLowerCase().split('msie')[1]);

function yearsSince(year, monthZeroBased, day) {
	return Math.round((new Date() - new Date(year, monthZeroBased, day)) / 1000 / 60 / 60 / 24 / 365);
}

document.write(
	'	<div class="dark">'
	+'		<div class="OldIEWarning dark">'
	+'			<a class="installButton" href="https://www.google.com/chrome/browser/" target="_blank">Install Google Chrome now</a>'
	+'			<a href="# dismiss" class="dismiss">dismiss</a>'
);

if (ieVersion < 7) {
	document.write("Your browser (Internet Explorer 6) is <strong>severely outdated</strong> (it's now " + yearsSince(2001,07,27) + " years old).");

} else if (ieVersion == 7) {
	document.write("Your browser (Internet Explorer 7) is <strong>severely outdated</strong> (it's now " + yearsSince(2006,9,18) + " years old).");

} else if (ieVersion == 8) {
	document.write("Your browser (Internet Explorer 8) is <strong>very outdated</strong> (it's now " + yearsSince(2009,02,19) + " years old).");

} else if (ieVersion == 9) {
	document.write("Your browser (Internet Explorer 9) is <strong>outdated</strong> (it's now " + yearsSince(2011,02,14) + " years old).");

}

document.write(
	'			'
	+'			<br/> It has known security flaws and may not display all features of this website. <br>'
	+'			<a href="http://www.google.com/chrome" target="_blank">Download Google Chrome</a> to experience the internet better, faster and safer.'
	+'		</div>'
	+'	</div>'
	+''
	+'	<!-- We inline the styles here so that this element works on its own and doesn\'t have to be integrated into themes -->'
	+'	<style type="text/css">'
	+'		.OldIEWarning {'
	+'			font-family: sans-serif;'
	+'			border-bottom: 1px solid #000000;'
	+'			padding-right: 20px;'
	+'			padding-left: 75px;'
	+'			padding-top: 6px;'
	+'			background: #FFF3AA url(http://www.cargotanksafety.org/wp-content/plugins/optinbar/assets/images/warning-icon.png) no-repeat 12px 3px;'
	+'			color: #444;'
	+'			padding-bottom: 8px;'
	+'			line-height: 1.3;'
	+'		}'
	+'		.dark .OldIEWarning {'
	+'			color: #BBB;'
	+'			background-color: #111111;'
	+'		}'
	+'		.OldIEWarning strong {'
	+'			color: inherit;'
	+'		}'
	+'		.OldIEWarning a {'
	+'			color: #0A7295;'
	+'			font-weight: bold;'
	+'			text-decoration: underline;'
	+'		}'
	+'		.dark .OldIEWarning a {'
	+'			color: #ccc;'
	+'		}'
	+'		.OldIEWarning a.dismiss {'
	+'			margin-top: 20px;'
	+'			color: #ccc099;'
	+'			float: right;'
	+'			margin-right: 7px;'
	+'			font-weight: normal;'
	+'		}'
	+'		.dark .OldIEWarning a.dismiss {'
	+'			color: #606060;'
	+'		}'
	+'		.dark .OldIEWarning a:hover {'
	+'			color: #fff;'
	+'		}'
	+'		.OldIEWarning .installButton {'
	+'			background: #7EC012 url(http://www.browserupgrade.info/ie6-upgrade/b.png) repeat-x 0 50%;'
	+'			float: right;'
	+'			font-size: 11pt;'
	+'			padding: 5px 17px;'
	+'			color: #FFFFFF !important;'
	+'			font-weight: bold;'
	+'			text-decoration: none;'
	+'			margin-left: 5px;'
	+'			border: 1px solid #64990C;'
	+'			margin-top: 14px;'
	+'		}'
	+'		.OldIEWarning .installButton:hover {'
	+'			text-decoration: underline;'
	+'		}'
	+'	</style>'
	+''
	+'	'
	+'	<script type="text/javascript">jQuery(document).ready(function($){'
	+'		// Hide warning when clicking dismiss\r\n'
	+'		$(".OldIEWarning .dismiss").on("click", function(e){'
	+'			e.preventDefault();'
	+'			Cookies.set("OldIEWarning", "dismiss", { expires: 7 /*days*/ *24*60*60 });'
	+'			$(".OldIEWarning").remove();'
	+'		});'
	+'	});</sc'+'ript>'
	+'	'
);


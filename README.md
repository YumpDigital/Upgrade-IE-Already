# Upgrade IE Already!

A simple, beautiful, unobtrusive JavaScript include which prompts old IE users to install Chrome.

Script is not downloaded for other browsers, so performance is not impacted.

## Screenshot

(Coming soon.)

## How to use

1. Include jQuery in your `<head>`

2. Put this snippet immediately *after* your `<body>` tag:

		<!-- Display a notice to IE 8 and below, recommending they install Chrome -->
		<!--[if lte IE 8]>
			<script src="//cdn.jsdelivr.net/cookies.js/0.4.0/cookies.min.js"></script>
			<script src="//yumpdigital.github.io/Upgrade-IE-Already/ie-upgrade-prompt.js"></script>
		<![endif]-->

3. You can configure the "IE 8" conditional comment to refer to any other version of IE that you prefer.

## Code

The JS code is in the `gh-pages` branch of this repository.

See https://github.com/YumpDigital/Upgrade-IE-Already/tree/gh-pages 

## Future improvements to come

* Removing requirement for jQuery
* Making cookie library optional
* Asynchronous (non-blocking) loading - although I'm not particularly concerned with optimizing performance for old browsers, argh.
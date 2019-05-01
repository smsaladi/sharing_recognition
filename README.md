README
======

An experiment in sharing recognition.

The sample works by loading the [ECAG page](https://elifesciences.org/about/people/early-career)
via a service that avoids the CORS requirement (cors.io), changes the `base` URL for the loaded
content, runs the randomizer (since the import happens before the content has loaded), and
then adds the HTML to the window. The CORS business is not the best way to do this, but it does
avoid adding the html content to the repo, which is nice.

To avoid having to duplicate code, the code previews are loaded directly from the javascript
files.

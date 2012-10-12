# Dexy Style Guide Demo

These are the files for a demonstration I did at both [Smashing Conference](http://www.smashingconf.com) and [Fronteers 2012](http://fronteers.nl/congres/2012) as a part of my presentation [Style Guides Are The New Photoshop](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012). The demo is ridiculously simple and serves simply as an example of how I use [Dexy](http://dexy.it) and some other tools to create style guides as a part of my *Responsive Design Workflow*.

While my book on the subject will be shipped around March/April 2013 (in which I describe the whole process, including setup, in gory detail), I've been presenting on this workflow at various conferences. The slides don't say much without the talks, but you might get something out of them nevertheless:

- [Responsive Design Workflow (slides)](https://speakerdeck.com/u/stephenhay/p/responsive-design-workflow-mobilism-2012) (presented at [Breaking Development 2012, Orlando](http://bdconf.com/2012/orlando), [Mobilism 2012, Amsterdam](http://mobilism.nl/2012) and [Webshaped 2012, Helsinki](http://webshaped.fi/))
- [Style Guides Are The New Photoshop (slides)](https://speakerdeck.com/u/stephenhay/p/style-guides-are-the-new-photoshop-fronteers-2012) (presented at [Smashing Conference 2012](http://www.smashingconf.com) and [Fronteers 2012](http://fronteers.nl/congres/2012))

The conference organizers usually publish videos of the talks; interested folks can look for those on the conference websites.

Please note that this is not full documentation, and I *will not* write full documentation for this demo. I'm putting these files here for interested parties who have seen the demo and simply want to explore the files and how I've set things up. Please don't ask me for support on this. There's a reason I'm writing a book about this stuff.

## Moving parts

Dexy relies on Python, so you'll need that. You'll also need [Dexy](http://dexy.it). Screenshots are made using [CasperJS](http://casperjs.org/) and [PhantomJS](http://phantomjs.org/), so those will have to be installed as well. You can use Dexy's Markdown filter for Markdown conversion, but I use [Pandoc](http://johnmacfarlane.net/pandoc/) for this demo. It's almost as awesome as Dexy.

In addition, the syntax I use for marking blocks of CSS rely on Ana Nelson's [idiopidae-fork](https://bitbucket.org/ananelson/idiopidae-fork).

## Caveat(s)

Dexy is in dizzyingly active development. **This demo uses version 0.6.0**. If you use *any* other version, it will probably not work. There is a new version in development which changes the way configuration (read: the `.dexy` file in this demo) is done, as well as some other things.

You'll probably want to visit the Dexy website and read and try as much as you can of the material there, in order to better understand what Dexy is, what it does and how it does it.

The changes being made to Dexy will make things easier for designers to do the setup themselves. The installation process will become as easy as possible. Just realize that this is not yet the case. Developers shouldn't have too many problems.

## How to use it

The Dexy website has tutorials which explain pretty well what's going on in this demo. Read up on the `.dexy` file, where the inputs and filters are configured. Also take a look at my slides which quickly walk through the process. 

This is what happens:

1. There is a static web mockup we're working with (`mockup/`). In it, certain blocks of CSS are marked by way of special comments. You can read more about these comments at the Dexy website.
2. There is a `screenshots.js` file which runs when Dexy is run. This takes screenshots of (in this case) specific elements which you want to include in your style guide. These are automatically saved in an `output/` folder when Dexy is run.
3. There is a Markdown file, which is the style guide for this demo. This consists of text formatted using Markdown conventions, but uses Jinja template syntax for indicating where specific screenshots and/or pieces of CSS should be placed.
4. When run, Dexy looks at the `.dexy` file to determine the order it applies its “filters”. In this case, it creates an HTML document by taking `_header.html`, adding the converted content of the markdown file (including the content of the templates in that file) and ending the document with the contents of `_footer.html`. If you're familiar with static site generators like Jekyll, this process will seem similar to you.
5. The files are placed in a folder called `output/`.

That's pretty much it.

## “I can't get it working”

Sorry about that. There are lots of moving parts here. If your purpose is to simply see the demo, please just try and get one of the conference videos (of the Style Guides talk). If you can't get this working but want to create style guides with Dexy, I'm afraid you'll either have to wait for when the book comes out or until I write a post on the Dexy blog (the book has my priority right now, though). Or find a developer who loves tinkering. There are plenty.

Also, Anna Debenham has a [great collection](http://gim.ie/fZyK) of other solutions you might be interested in checking out.

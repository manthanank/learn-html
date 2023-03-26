# HTML

**HTML** - Stands for Hyper Text Markup Language

HTML is the standard markup language for creating Web pages
HTML describes the structure of a Web page
HTML consists of a series of elements
HTML elements tell the browser how to display the content
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

**`<!DOCTYPE>` Declaration** - Represents the document type and helps browsers to display web pages correctly.

## Elements

An HTML element is defined by a start tag, some content, and an end tag.

```html
<tagname>Content goes here...</tagname>
```

## Attributes

**href** - defines a hyper link.

```html
<a href="https://www.w3schools.com">Visit W3Schools</a>
```

**src** - used to embed images in the web pages.

```html
<img src="img.jpg">
```

**1. Absolute URL** - Links to an external image that is hosted on another website.

```html
<img src="https://www.w3schools.com/images/img.jpg">
```

**2. Relative URL** - Links to an image that is hosted within the website.

```html
<img src="/images/img.jpg">
```

**width & height** - specify the width and height of the image (in pixels).

```html
<img src="img.jpg" width="300" height="300">
```

**alt** - specifies an alternate text for an image, if the image for some reason cannot be displayed.

```html
<img src="img.jpg" alt="Image of a jacket">
```

**style** - used to add styles to an element, such as color, font, size, and more.

```html
<p style="color:red;">This is a red paragraph.</p>
```

**lang** - used to declare the language of the Web page. And always included inside the `<html>` tag.

```html
<html lang="en">
```

**title** - defines some extra information about an element.

```html
<p title="I'm a tooltip">This is a paragraph.</p>
```

**Suggestion 1:** Always Use Lowercase Attributes and Always Quote Attribute Values

```html
<a href="https://www.w3schools.com/html/">Visit our HTML tutorial</a>
```

**Suggestion 2:** Single or Double Quotes

```html
<p title='John "ShotGun" Nelson'>
    or
<p title="John 'ShotGun' Nelson">
```

## Heading

HTML headings are titles or subtitles that you want to display on a webpage. There are six headings defined with the `<h1>` to `<h6>` tags.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

## Bigger Headings

You can specify the size for any heading with the style attribute, using the CSS `font-size` property

```html
<h1 style="font-size:60px;">Heading 1</h1>
```

**Suggestion :** Search engines use the headings to index the structure and content of your web pages.

## Paragrapgh

Defines a paragraph with `<p>` element.

```html
<p>This is the first paragraph</p>
```

## Horizontal Rules

Defines a thematic break in an HTML page, and is most often displayed as a horizontal rule with `<hr>` element.

```html
<p>This is the first paragraph</p>
<hr>
<p>This is the second paragraph</p>
```

## HTML Line Breaks

Defines a line break with `<br>` element.

```html
<p>This is<br>a paragraph<br>with line breaks.</p>
```

## Preformatted Text

Defines preformatted text with `<pre>` element.

```html
<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>
```

## Styles

HTML `style` attribute is used to add styles to an element, such as color, font, size, and more.

```html
<tagname style="property:value">Tag Name</tagname>
<!--The property is a CSS property. The value is a CSS value.-->
```

**Background color** -

CSS `background-color` property defines the background color for an HTML element.

```html
<h1 style="background-color:powderblue;">Headning</h1>
```

**Text color** -

CSS `color` property defines the text color for an HTML element

```html
<p style="color:red;">This is a paragraph.</p>
```

**Fonts** -

CSS `font-family` property defines the font to be used for an HTML element

```html
<p style="font-family:verdena;">This is a paragraph.</p>
```

**Text Size** -

CSS `font-size` property defines the text size for an HTML element

```html
<p style="font-size:100%;">This is a paragraph.</p>
```

**Text Alignment** -

CSS `text-align` property defines the horizontal text alignment for an HTML element.

```html
<h1 style="text-align:center;">Heading.</h1>
```

## Formatting

Bold

```html
<br>
```

Important

```html
<strong>
```

Italic

```html
<i>
```

Emphasized

```html
<em>
```

Marked

```html
<mark>
```

Smaller

```html
<small>
```

Deleted

```html
<del>
```

Inserted

```html
<ins>
```

Subscript

```html
<sub>
```

Superscript

```html
<sup>
```

## Comments

```html
<!-- Comment -->
```

## Colors

Background color

```html

```

Text color

```html

```

Border color

```html

```

## Color Values

RGB

```html

```

HEX

```html

```

HSL

```html

```

RGBA

```html

```

HSLA

```html

```

## Quotations

Blockquotations

```html
<blockquote>
```

```html
<q>
```

Abbreviations

```html
<abbr>
```

Address

```html
<address>
```

Work Title

```html
<cite>
```

Bidirectional Overrides

```html
<bdo>
```

## Links

```html
<a>Link</a>
```

Target Attributes

_self

```html
<a _self>Link</a>
```

_blank

```html
<a _blank>Link</a>
```

_parent

```html
<a _parent>Link</a>
```

_top

```html
<a _top>Link</a>
```

## Absolute URL

Links to an external image that is hosted on another website

```html
<img src="https://www.w3schools.com/images/img.jpg">
```

## Relative URL

Links to an image that is hosted within the website

```html
<img src="/images/img.jpg">
```

## Link to Email Address

```html
<a href="mailto:manthan.ank46@gmail.com">E-Mail</a>
```

## Link Titles

```html
<a title="Title">Link Title</a>
```

## Create Bookmarks

```html
<h1 id="id">Link</h1>

<a href="#id">Link</a>
```

## Add Favicon

```html
<a>Link</a>
```

## Images

```html
<img src="" alt="">
```

Src

Alt

Width & height

## Image Map

```html
<map>
```

```html
<area>
```

```html
<picture>
```

## Background Image

```html
background-image=url('')
```

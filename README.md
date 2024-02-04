# HTML

![npm](https://img.shields.io/npm/dw/learn-html)

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

**Bold** - The HTML `<b>` element defines bold text, without any extra importance.

```html
<b>This text is bold</b>
```

**Important** - The HTML `<strong>` element defines text with strong importance. The content inside is typically displayed in bold.

```html
<strong>This text is important!</strong>
```

**Italic** - The HTML `<i>` element defines a part of text in an alternate voice or mood. The content inside is typically displayed in italic.

```html
<i>This text is italic</i>
```

**Emphasized** - The HTML `<em>` element defines emphasized text. The content inside is typically displayed in italic.

```html
<em>This text is emphasized</em>
```

**Marked** - The HTML `<mark>` element defines text that should be marked or highlighted

```html
<p>Do not forget to buy <mark>milk</mark> today.</p>
```

**Smaller** - The HTML `<small>` element defines smaller text

```html
<small>This is some smaller text.</small>
```

**Deleted** - The HTML `<del>` element defines text that has been deleted from a document. Browsers will usually strike a line through deleted text

```html
<p>My favorite color is <del>blue</del> black.</p>
```

**Inserted** - The HTML `<ins>` element defines a text that has been inserted into a document. Browsers will usually underline inserted text

```html
<p>My favorite color is <del>blue</del> <ins>black</ins>.</p>
```

**Subscript** - The HTML `<sub>` element defines subscript text. Subscript text appears half a character below the normal line, and is sometimes rendered in a smaller font. Subscript text can be used for chemical formulas, like H2O.

```html
<p>This is <sub>subscripted</sub> text.</p>
```

**Superscript** - The HTML `<sup>` element defines superscript text. Superscript text appears half a character above the normal line, and is sometimes rendered in a smaller font. Superscript text can be used for footnotes, like WWW[1].

```html
<p>This is <sup>superscripted</sup> text.</p>
```

## Comments

HTML comments are not displayed in the browser, but they can help document your HTML source code.

```html
<!-- Write your comments here -->
```

**Hide Content** - Comments can be used to hide content.

```html
<p>This is a paragraph.</p>

<!-- <p>This is another paragraph </p> -->

<p>This is a paragraph too.</p>
```

**Hide Inline Content** - Comments can be used to hide parts in the middle of the HTML code.

```html
<p>This <!-- great text --> is a paragraph.</p>
```

## Colors

HTML colors are specified with predefined color names, or with RGB, HEX, HSL, RGBA, or HSLA values.

**Background color** - You can set the background color for HTML elements

```html
<h1 style="background-color:DodgerBlue;">Hello World</h1>
<p style="background-color:Tomato;">Lorem ipsum...</p>
```

**Text color** - You can set the color of text

```html
<h1 style="color:Tomato;">Hello World</h1>
<p style="color:DodgerBlue;">Lorem ipsum...</p>
<p style="color:MediumSeaGreen;">Ut wisi enim...</p>
```

**Border color** - You can set the color of borders

```html
<h1 style="border:2px solid Tomato;">Hello World</h1>
<h1 style="border:2px solid DodgerBlue;">Hello World</h1>
<h1 style="border:2px solid Violet;">Hello World</h1>
```

## Color Values

In HTML, colors can also be specified using RGB values, HEX values, HSL values, RGBA values, and HSLA values.

The following three `<div>` elements have their background color set with RGB, HEX, and HSL values

```html
<h1 style="background-color:rgb(255, 99, 71);">...</h1>
<h1 style="background-color:#ff6347;">...</h1>
<h1 style="background-color:hsl(9, 100%, 64%);">...</h1>

<h1 style="background-color:rgba(255, 99, 71, 0.5);">...</h1>
<h1 style="background-color:hsla(9, 100%, 64%, 0.5);">...</h1>
```

**RGB** - An RGB color value represents RED, GREEN, and BLUE light sources.

An RGBA color value is an extension of RGB with an Alpha channel (opacity).

In HTML, a color can be specified as an RGB value, using this formula:

rgb(red, green, blue)

```html
rgb(255, 99, 71)
```

**HEX** - In HTML, a color can be specified using a hexadecimal value in the form:

`#rrggbb`

```html
#ff6347
```

**HSL** - In HTML, a color can be specified using hue, saturation, and lightness (HSL) in the form:

hsl(hue, saturation, lightness)

```html
hsl(0, 100%, 50%)
```

**RGBA** - RGBA color values are an extension of RGB color values with an Alpha channel - which specifies the opacity for a color.

An RGBA color value is specified with:

rgba(red, green, blue, alpha)

```html
rgba(255, 99, 71, 0.5)
```

**HSLA** - HSLA color values are an extension of HSL color values, with an Alpha channel - which specifies the opacity for a color.

An HSLA color value is specified with:

hsla(hue, saturation, lightness, alpha)

```html
hsla(0, 100%, 50%, 0.5)
```

## Quotations

**Blockquotations** - The HTML `<blockquote>` element defines a section that is quoted from another source.

```html
<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.
</blockquote>
```

Short Quotations - The HTML `<q>` tag defines a short quotation.

```html
<p>WWF's goal is to: <q>Build a future where people live in harmony with nature.</q></p>
```

Abbreviations - The HTML `<abbr>` tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM".

```html
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```

Address - The HTML `<address>` tag defines the contact information for the author/owner of a document or an article.

```html
<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>
```

Work Title - The HTML `<cite>` tag defines the title of a creative work (e.g. a book, a poem, a song, a movie, a painting, a sculpture, etc.).

```html
<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
```

Bidirectional Overrides - BDO stands for Bi-Directional Override. The HTML `<bdo>` tag is used to override the current text direction.

```html
<bdo dir="rtl">This text will be written from right to left</bdo>
```

## HTML CSS

`CSS` saves a lot of work. It can control the layout of multiple web pages all at once.

`What is CSS?`

Ans: Cascading Style Sheets (CSS) is used to format the layout of a webpage.

With CSS, you can control the color, font, the size of text, the spacing between elements, how elements are positioned and laid out, what background images or background colors are to be used, different displays for different devices and screen sizes, and much more!

## Using CSS

CSS can be added to HTML documents in 3 ways:

- Inline - by using the style attribute inside HTML elements
- Internal - by using a `<style>` element in the `<head>` section
- External - by using a `<link>` element to link to an external CSS file

### Inline CSS

An inline CSS is used to apply a unique style to a single HTML element.

An inline CSS uses the style attribute of an HTML element.

The following example sets the text color of the `<h1>` element to blue, and the text color of the `<p>` element to red:

```html
<h1 style="color:blue;">A Blue Heading</h1>

<p style="color:red;">A red paragraph.</p>
```

### Internal CSS

An internal CSS is used to define a style for a single HTML page.

An internal CSS is defined in the `<head>` section of an HTML page, within a `<style>` element.

The following example sets the text color of ALL the `<h1>` elements (on that page) to blue, and the text color of ALL the `<p>` elements to red. In addition, the page will be displayed with a "powderblue" background color:

```html
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### External CSS

An external style sheet is used to define the style for many HTML pages.

To use an external style sheet, add a link to it in the `<head>` section of each HTML page:

```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

The external style sheet can be written in any text editor. The file must not contain any HTML code, and must be saved with a .css extension.

Here is what the "styles.css" file looks like:

"styles.css":

```css
body {
  background-color: powderblue;
}
h1 {
  color: blue;
}
p {
  color: red;
}
```

## CSS Colors, Fonts and Sizes

Here, we will demonstrate some commonly used CSS properties. You will learn more about them later.

The CSS `color` property defines the text color to be used.

The CSS `font-family` property defines the font to be used.

The CSS `font-size` property defines the text size to be used.

```htm
<!DOCTYPE html>
<html>
<head>
<style>
h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
}
</style>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## CSS Border

The CSS border property defines a border around an HTML element.

Tip: You can define a border for nearly all HTML elements.

```css
p {
  border: 2px solid powderblue;
}
```

## CSS Padding

The CSS padding property defines a padding (space) between the text and the border.

```css
p {
  border: 2px solid powderblue;
  padding: 30px;
}
```

## CSS Margin

The CSS margin property defines a margin (space) outside the border.

```css
p {
  border: 2px solid powderblue;
  margin: 50px;
}
```

## Link to External CSS

External style sheets can be referenced with a full URL or with a path relative to the current web page.

This example uses a full URL to link to a style sheet:

```html
<link rel="stylesheet" href="https://www.w3schools.com/html/styles.css">
```

This example links to a style sheet located in the html folder on the current web site:

```html
<link rel="stylesheet" href="/html/styles.css">
```

This example links to a style sheet located in the same folder as the current page:

```html
<link rel="stylesheet" href="styles.css">
```

## Links

HTML links are hyperlinks. The HTML `<a>` tag defines a hyperlink.

```html
<a>Link</a>
```

### Target Attributes

**_self** - Default. Opens the document in the same window/tab as it was clicked

```html
<a _self>Link</a>
```

**_blank** - Opens the document in a new window or tab

```html
<a _blank>Link</a>
```

**_parent** - Opens the document in the parent frame

```html
<a _parent>Link</a>
```

**_top** - Opens the document in the full body of the window

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

## Use an Image as a Link

To use an image as a link, just put the `<img>` tag inside the `<a>` tag:

```html
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```

## Link to Email Address

Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):

```html
<a href="mailto:manthan.ank46@gmail.com">E-Mail</a>
```

## Button as a Link

To use an HTML button as a link, you have to add some JavaScript code.

JavaScript allows you to specify what happens at certain events, such as a click of a button

```html
<button onclick="document.location='default.asp'">HTML Tutorial</button>
```

## Link Titles

The title attribute specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.

```html
<a title="Title">Link Title</a>
```

## HTML Link Colors

By default, a link will appear like this (in all browsers):

- An unvisited link is underlined and blue
- A visited link is underlined and purple
- An active link is underlined and red

```html
<style>
a:link {
  color: green;
  background-color: transparent;
  text-decoration: none;
}

a:visited {
  color: pink;
  background-color: transparent;
  text-decoration: none;
}

a:hover {
  color: red;
  background-color: transparent;
  text-decoration: underline;
}

a:active {
  color: yellow;
  background-color: transparent;
  text-decoration: underline;
}
</style>

<a href="html_images.asp" target="_blank">HTML Images</a> 
```

## Create Bookmarks

Bookmarks can be useful if a web page is very long.

To create a bookmark - first create the bookmark, then add a link to it.

When the link is clicked, the page will scroll down or up to the location with the bookmark.

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

**Src** - Specifies the path to the image

The required src attribute specifies the path (URL) to the image.

```html
<img src="img_chania.jpg" alt="Flowers in Chania">
```

**Alt** - Specifies an alternate text for the image

The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it.

```html
<img src="img_chania.jpg" alt="Flowers in Chania">
```

**Image Size - Width and Height** -

You can use the style attribute to specify the width and height of an image.

```html
<img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
```

Alternatively, you can use the width and height attributes:

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

## Image Map

The HTML `<map>` tag defines an image map. An image map is an image with clickable areas. The areas are defined with one or more `<area>` tags.

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map>
```

**The Image** -

The image is inserted using the `<img>` tag. The only difference from other images is that you must add a usemap attribute:

```html
<img src="workplace.jpg" alt="Workplace" usemap="#workmap">
```

**Create Image Map** -

Then, add a `<map>` element.

The `<map>` element is used to create an image map, and is linked to the image by using the required name attribute:

```html
<map name="workmap">
```

**The Areas** -

Then, add the clickable areas.

A clickable area is defined using an `<area>` element.

**Shape** -

You must define the shape of the clickable area, and you can choose one of these values:

- rect - defines a rectangular region
- circle - defines a circular region
- poly - defines a polygonal region
- default - defines the entire region

You must also define some coordinates to be able to place the clickable area onto the image. 

`Shape="rect"`

The coordinates for shape="rect" come in pairs, one for the x-axis and one for the y-axis.

```html
<area shape="circle" coords="337, 300, 44" href="coffee.htm">
```

`Shape="circle"`

To add a circle area, first locate the coordinates of the center of the circle

```html
<area shape="circle" coords="337, 300, 44" href="coffee.htm">
```

`Shape="poly"`

The shape="poly" contains several coordinate points, which creates a shape formed with straight lines (a polygon).

This can be used to create any shape.

```html
<area shape="poly" coords="140,121,181,116,204,160,204,222,191,270,140,329,85,355,58,352,37,322,40,259,103,161,128,147" href="croissant.htm">
```

**Image Map and JavaScript** -

A clickable area can also trigger a JavaScript function.

Add a click event to the `<area>` element to execute a JavaScript function:

```html
<map name="workmap">
  <area shape="circle" coords="337,300,44" href="coffee.htm" onclick="myFunction()">
</map>

<script>
function myFunction() {
  alert("You clicked the coffee cup!");
}
</script>
```

## Picture Element

The HTML `<picture>` element allows you to display different pictures for different devices or screen sizes.

The HTML `<picture>` element gives web developers more flexibility in specifying image resources.

The `<picture>` element contains one or more `<source>` elements, each referring to different images through the srcset attribute. This way the browser can choose the image that best fits the current view and/or device.

Each `<source>` element has a media attribute that defines when the image is the most suitable.

```html
<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>
```

## Background Image

A background image can be specified for almost any HTML element.

**Background Image on a HTML element** -

To add a background image on an HTML element, use the HTML style attribute and the CSS background-image property:

```html
<p style="background-image: url('img_girl.jpg');">
```

You can also specify the background image in the `<style>` element, in the `<head>` section:

```html
<style>
p {
  background-image: url('img_girl.jpg');
}
</style>
```

**Background Image on a Page** -

If you want the entire page to have a background image, you must specify the background image on the `<body>` element:

```html
<style>
body {
  background-image: url('img_girl.jpg');
}
</style>
```

To avoid the background image from repeating itself, set the `background-repeat` property to `no-repeat`.

```html
<style>
body {
  background-image: url('example_img_girl.jpg');
  background-repeat: no-repeat;
}
</style>
```

## Background Cover

f you want the background image to cover the entire element, you can set the `background-size` property to `cover`.

Also, to make sure the entire element is always covered, set the `background-attachment` property to `fixed`.

This way, the background image will cover the entire element, with no stretching

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
</style>
```

## Background Stretch

If you want the background image to stretch to fit the entire element, you can set the `background-size` property to `100% 100%`.

```html
<style>
body {
  background-image: url('img_girl.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}
</style>
```

## Favicon

A favicon is a small image displayed next to the page title in the browser tab.

```html
<!DOCTYPE html>
<html>
<head>
  <title>My Page Title</title>
  <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

## Page Title

Defines the title of the document. Every web page should have a page title to describe the meaning of the page. The `<title>` element adds a title to your page.

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML Tutorial</title>
</head>
<body>

The content of the document......

</body>
</html>
```

The `<title>` element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search engine-results

## Tables

HTML tables allow web developers to arrange data into rows and columns.

A simple HTML table:

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

### Table Cells

Each table cell is defined by a `<td>` and a `</td>` tag.

Each table cell is defined by a `<td>` and a `</td>` tag.

`td` stands for table data.

Everything between `<td>` and `</td>` are the content of the table cell.

```html
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
</table>
```

### Table Rows

Each table row starts with a `<tr>` and ends with a `</tr>` tag.

`tr` stands for table row.

```html
<table>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```

### Table Headers

Sometimes you want your cells to be table header cells. In those cases use the `<th>` tag instead of the `<td>` tag:

`th` stands for table header.

```html
<table>
  <tr>
    <th>Person 1</th>
    <th>Person 2</th>
    <th>Person 3</th>
  </tr>
  <tr>
    <td>Emil</td>
    <td>Tobias</td>
    <td>Linus</td>
  </tr>
  <tr>
    <td>16</td>
    <td>14</td>
    <td>10</td>
  </tr>
</table>
```

| Tag | Description |
|---|---|
| `<table>` | Defines a table |
| `<th>` | Defines a header cell in a table |
| `<tr>` | Defines a row in a table |
| `<td>` | Defines a cell in a table |
| `<caption>` | Defines a table caption |
| `<colgroup>` | Specifies a group of one or more columns in a table for formatting |
| `<col>` | Specifies column properties for each column within a `<colgroup>` element |
| `<thead>` | Groups the header content in a table |
| `<tbody>` | Groups the body content in a table |
| `<tfoot>` | Groups the footer content in a table |

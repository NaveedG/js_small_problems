/* Write a function that will take a short line of text, and write it to the console log within a box.

Examples:

logInBox('To boldly go where no one has gone before.');

will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

You may assume that the output will always fit in your browser window. */

logInBox = str => {
  console.log(`+${'-'.repeat(str.length + 2)}+`)
  console.log(`| ${' '.repeat(str.length)} |`)
  console.log(`| ${str} |`)
  console.log(`| ${' '.repeat(str.length)} |`)
  console.log(`+${'-'.repeat(str.length + 2)}+`)
}
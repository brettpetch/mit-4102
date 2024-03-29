/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
    docs: [
      'intro',
      {
        type: "category",
        label: "Lectures",
        collapsed: true,
        items: [
            "lecture/intro",
            "lecture/week2",
            "lecture/week3",
            "lecture/week4",
            "lecture/week5",
            "lecture/week6"
          ],
        },
    ]
};

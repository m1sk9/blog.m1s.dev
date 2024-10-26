import lume from "lume/mod.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import blog from "blog/mod.ts";

const site = lume({
  src: "./src",
});

site
  .use(blog())
  .use(codeHighlight());

export default site;

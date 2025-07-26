import lume from "lume/mod.ts";
import cacheBusting from "lume/middlewares/cache_busting.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import json_ld from "lume/plugins/json_ld.ts";
import mdx from "lume/plugins/mdx.ts";
import nav from "lume/plugins/nav.ts";
import icons from "lume/plugins/icons.ts";
import esbuild from "lume/plugins/esbuild.ts";
import lightningcss from "lume/plugins/lightningcss.ts";
import check_urls from "lume/plugins/check_urls.ts";
import favicon from "lume/plugins/favicon.ts";
import svgo from "lume/plugins/svgo.ts";
import minify_html from "lume/plugins/minify_html.ts";
import brotli from "lume/plugins/brotli.ts";
import sitemap from "lume/plugins/sitemap.ts";
import feed from "lume/plugins/feed.ts";
import search from "lume/plugins/search.ts";
import date from "lume/plugins/date.ts";
import purgecss from "lume/plugins/purgecss.ts";
import robots from "lume/plugins/robots.ts";
import terser from "lume/plugins/terser.ts";
import metas from "lume/plugins/metas.ts";

const site = lume(
  {
    src: "./",
    location: new URL("https://veirt-is.a.dev"),
    dest: "./_site",
    server: {
      middlewares: [cacheBusting()],
    },
  },
  {
    markdown: {
      options: {
        breaks: false,
        linkify: true,
      },
    },
  },
);

site.use(code_highlight({}));
site.use(svgo());
site.use(json_ld());
site.use(mdx());
site.use(nav());
site.use(icons());
site.use(esbuild());
site.use(terser());
site.use(lightningcss());
site.use(metas());
site.use(check_urls());
site.use(favicon());
site.use(minify_html());
site.use(brotli());
site.use(sitemap());
site.use(date());
site.use(
  feed({
    output: "/feed.xml",
    query: "type=blog",
    info: {
      title: "veirt's blog",
      description: "Software Engineer | Full-stack · DevOps · SysAdmin",
    },
  }),
);

// Add date filter for better formatting
site.filter("date", (date: Date, format: string) => {
  if (format === "HUMAN_DATE") {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }
  if (format === "DATETIME") {
    return date.toISOString();
  }
  return date.toISOString();
});

// Add excerpt filter for blog previews
site.filter("excerpt", (content: string, length = 150) => {
  const text = content.replace(/<[^>]*>/g, ""); // Strip HTML tags
  return text.length > length ? text.slice(0, length) + "..." : text;
});

// Add reading time filter
site.filter("readingTime", (content: string) => {
  const wordsPerMinute = 200;
  const words = content.replace(/<[^>]*>/g, "").split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
});
site.use(search());
site.use(purgecss());
site.use(robots());

site.copy("CNAME");

// Set up site data
site.data("site", {
  title: "veirt's website",
  description:
    "Software Engineer | Full-stack · DevOps · SysAdmin | Building modern web applications, exploring new technologies, and sharing knowledge through code.",
  url: "https://veirt.is-a.dev",
  author: {
    name: "veirt",
    url: "https://github.com/Veirt",
  },
  keywords: [
    "veirt",
    "software engineer",
    "full-stack developer",
    "devops",
    "web development",
    "programming",
    "javascript",
    "typescript",
    "python",
    "rust",
  ],
  lang: "en",
});

site.add("static", ".");
site.add([".jpg", ".gif", ".png"], (file) => file);

export default site;

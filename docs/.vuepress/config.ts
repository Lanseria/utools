import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  base: "/utools/",
  lang: "zh-CN",
  title: "@lanseria/utools",
  description: "Alternative JavaScript Tool Library ",
  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
});

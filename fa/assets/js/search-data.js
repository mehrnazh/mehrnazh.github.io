
const currentUrl = window.location.href;
const siteUrl = "https://mehrnazh.github.io";
let updatedUrl = currentUrl.replace("https://mehrnazh.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("fa".length > 0) {
  updatedUrl = updatedUrl.replace("/fa", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "منوی navigation",
    handler: () => {
      window.location.href = "/fa/";
    },
  },{id: "nav-درباره-من",
          title: "درباره من",
          description: "",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/fa/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "um tema simples para acadêmicos",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/blog/";
          },
        },{id: "nav-انتشارات",
          title: "انتشارات",
          description: "انتشارات به تفکیک دسته‌بندی و به ترتیب زمانی معکوس.",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/fa/publications/";
          },
        },{id: "nav-پروژه-ها",
          title: "پروژه‌ها",
          description: "مجموعه‌ای در حال رشد از پروژه‌های جذاب.",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/fa/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Esta é uma descrição da página. Você pode modificá-la em &#39;_pages/cv.md&#39;. Também pode alterar ou remover o botão no topo de download de pdf.",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/cv/";
          },
        },{id: "nav-ensino",
          title: "ensino",
          description: "Materiais de cursos que você ministrou. Substitua esse texto com sua descrição.",
          section: "منوی navigation",
          handler: () => {
            window.location.href = "/fa/teaching/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "پست‌ها",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "پست‌ها",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/assets/pdf/en-us/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2021/diagrams/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2020/twitter/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2018/distill/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "پست‌ها",
        handler: () => {
          
            window.location.href = "/fa/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "",handler: () => {
              window.location.href = "/fa/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "اخبار",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "اخبار",handler: () => {
              window.location.href = "/fa/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "اخبار",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "پروژه‌ها",handler: () => {
              window.location.href = "/fa/projects/9_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("/assets/pdf/fa//assets/pdf/[LANG]/example_pdf.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'ارسال ایمیل',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'شبکه‌های اجتماعی',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
          id: 'lang-en',
          title: 'en',
          section: 'زبان‌ها',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'تغییر به حالت روشن',
      description: 'تغییر پوسته سایت به حالت روشن',
      section: 'پوسته',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'تغییر به حالت تاریک',
      description: 'تغییر پوسته سایت به حالت تاریک',
      section: 'پوسته',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'استفاده از پوسته پیش‌فرض سیستم',
      description: 'هماهنگی پوسته سایت با تنظیمات سیستم',
      section: 'پوسته',
      handler: () => {
        setThemeSetting("system");
      },
    },];

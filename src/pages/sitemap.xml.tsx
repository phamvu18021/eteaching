import { TMenus, menus } from "@/router";
import { NextApiResponse } from "next";

const URL = process.env.NEXT_PUBLIC_DOMAIN;

const getAllPaths = (menus: TMenus) => {
  const paths: string[] = [];

  menus.forEach((menu) => {
    if (menu.path !== "#") paths.push(menu.path);
    if (menu?.childs) {
      paths.push(...getAllPaths(menu?.childs));
    }
  });
  return paths;
};

const generateSiteMap = (posts: any[], poststts: any[], extra: string) => {
  const staticPaths = getAllPaths(menus);

  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
      <!-- Add the static URLs manually -->
      ${staticPaths?.map(
        (staticPath: string) =>
          `<url>
            <loc>${URL}${staticPath}</loc>
          </url>`
      )}
     ${posts
       ?.map(({ slug }) => {
         if (slug != undefined)
           return `
           <url>
               <loc>${`${URL}/${slug}`}</loc>
           </url>
         `;
       })
       .join("")}
    ${poststts
      ?.map(({ slug }) => {
        if (slug != undefined)
          return `
           <url>
               <loc>${`${URL}/tin-tuyen-sinh/${slug}`}</loc>
           </url>
         `;
      })
      .join("")} 
      ${extra}

   </urlset>
 `;
};

export const getServerSideProps = async ({ res }: { res: NextApiResponse }) => {
  const api_url = process.env.API_URL;
  let urlSchool = ` 
  <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/SFL</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/DTN</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/MHN</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/DTK</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/HTC</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/KHA</loc>
  </url>
    <url>
    <loc>https://eteaching.vn/tin-tuyen-sinh-theo-truong/BVH</loc>
  </url>
    `;
  let posts: any[] = [];
  try {
    const resData = await fetch(
      `${api_url}/posts?categories=4&per_page=100&page=1`
    );
    let add = (await resData?.json()) || [];
    posts = posts.concat(add);
  } catch (error) {
    console.log(error);
  }
  try {
    const resData = await fetch(
      `${api_url}/posts?categories=4&per_page=100&page=2`
    );
    let add2 = (await resData?.json()) || [];
    add2 != undefined ? (posts = posts.concat(add2)) : add2;
    console.log(add2);
  } catch (error) {
    console.log(error);
  }

  let poststts: any[] = [];
  try {
    const resData = await fetch(
      `${api_url}/posts?categories=11&per_page=100&page=1`
    );
    let addtts = (await resData?.json()) || [];
    poststts = poststts.concat(addtts);
  } catch (error) {
    console.log(error);
  }
  try {
    const resData = await fetch(
      `${api_url}/posts?categories=11&per_page=100&page=2`
    );
    let addtts2 = (await resData?.json()) || [];
    addtts2 != undefined ? (poststts = poststts.concat(addtts2)) : poststts;
  } catch (error) {
    console.log(error);
  }
  // Generate the XML sitemap with the blog data
  const sitemap = generateSiteMap(posts, poststts, urlSchool);

  res.setHeader("Content-Type", "text/xml");
  // Send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
};

const SiteMap = () => {
  // getServerSideProps will do the heavy lifting
};

export default SiteMap;

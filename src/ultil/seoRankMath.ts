export const replaceSeoRM = (input: string) => {
  input = input.replace(
    `link rel="canonical" href="https://edit.eteaching.vn/`,
    `link rel="canonical" href="https://eteaching.vn/`
  );
  input = input.replace(
    `meta property="og:url" content="https://edit.eteaching.vn`,
    `meta property="og:url" content="https://eteaching.vn`
  );

  input = input.replace(
    `"@id":"https://edit.eteaching.vn/#organization"`,
    `"@id":"https://eteaching.vn/#organization"`
  );
  input = input.replace(
    `https://edit.eteaching.vn/#logo`,
    `https://eteaching.vn/#logo`
  );
  input = input.replace(
    `https://edit.eteaching.vn/#website`,
    `https://eteaching.vn/#website`
  );
  input = input.replace(
    `https://edit.eteaching.vn/#webpage`,
    `https://eteaching.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://edit.eteaching.vn"`,
    `"url":"https://eteaching.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://edit.eteaching.vn`,
    `"@type":"WebPage","@id":"https://eteaching.vn`
  );

  input = input.replace(
    `#webpage","url":"https://edit.eteaching.vn`,
    `#webpage","url":"https://eteaching.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://edit.eteaching.vn/`,
    `"mainEntityOfPage":{"@id":"https://eteaching.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://edit.eteaching.vn/#organization`,
    `"worksFor":{"@id":"https://eteaching.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://edit.eteaching.vn"]`,
    `"sameAs":["https://eteaching.vn"]`
  );
  input = input.replace("noindex", "index");
  input = input.replace("nofollow", "follow");
  return input;
};

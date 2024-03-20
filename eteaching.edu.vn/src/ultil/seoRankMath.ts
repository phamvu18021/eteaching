export const replaceSeoRM = (input: string) => {
  input = input.replace(
    `link rel="canonical" href="https://eteachingwp.eufm.vn/`,
    `link rel="canonical" href="https://eteaching.eufm.vn/`
  );
  input = input.replace(
    `meta property="og:url" content="https://eteachingwp.eufm.vn`,
    `meta property="og:url" content="https://eteaching.eufm.vn`
  );

  input = input.replace(
    `"@id":"https://eteachingwp.eufm.vn/#organization"`,
    `"@id":"https://eteaching.eufm.vn/#organization"`
  );
  input = input.replace(
    `https://eteachingwp.eufm.vn/#logo`,
    `https://eteaching.eufm.vn/#logo`
  );
  input = input.replace(
    `https://eteachingwp.eufm.vn/#website`,
    `https://eteaching.eufm.vn/#website`
  );
  input = input.replace(
    `https://eteachingwp.eufm.vn/#webpage`,
    `https://eteaching.eufm.vn/#webpage`
  );
  input = input.replace(
    `"url":"https://eteachingwp.eufm.vn"`,
    `"url":"https://eteaching.eufm.vn"`
  );

  input = input.replace(
    `"@type":"WebPage","@id":"https://eteachingwp.eufm.vn`,
    `"@type":"WebPage","@id":"https://eteaching.eufm.vn`
  );

  input = input.replace(
    `#webpage","url":"https://eteachingwp.eufm.vn`,
    `#webpage","url":"https://eteaching.eufm.vn`
  );

  input = input.replace(
    `"mainEntityOfPage":{"@id":"https://eteachingwp.eufm.vn/`,
    `"mainEntityOfPage":{"@id":"https://eteaching.eufm.vn/`
  );
  input = input.replace(
    `"worksFor":{"@id":"https://eteachingwp.eufm.vn/#organization`,
    `"worksFor":{"@id":"https://eteaching.eufm.vn/#organization`
  );

  input = input.replace(
    `"sameAs":["https://eteachingwp.eufm.vn"]`,
    `"sameAs":["https://eteaching.eufm.vn"]`
  );
  return input;
};

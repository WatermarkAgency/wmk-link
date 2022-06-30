export const wmkClass = (
  name: string,
  group: string,
  append = "",
  prefix = "wmk"
) => {
  const classes = [
    prefix + "-" + group,
    prefix + "-" + group + "-" + name,
    append
  ];
  return classes.join(" ").trim();
};

export const convertPhone = (tel: string) => {
  return tel
    .toLocaleLowerCase()
    .replace(/a|b|c/g, "2")
    .replace(/d|e|f/g, "3")
    .replace(/g|h|i/g, "4")
    .replace(/j|k|l/g, "5")
    .replace(/m|n|o/g, "6")
    .replace(/p|q|r|s/g, "7")
    .replace(/t|u|v/g, "8")
    .replace(/w|x|y|z/g, "9")
    .replace(/\D/g, "");
};
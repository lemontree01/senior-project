declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames;
  export = classNames
}

declare module "*.png";
declare module "*.jpg";
declare module "*.css";
declare module "*.module.css";
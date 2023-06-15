export class MenuItem {
  name: string;
  iconClasses: string;
  path: string[];
  subheader?: boolean;
  children?: MenuItem[];
  expanded?: boolean; // Add the expanded property

  constructor(name: string, iconClasses: string, path: string[], subheader?: boolean, children?: MenuItem[]) {
    this.name = name;
    this.iconClasses = iconClasses;
    this.path = path;
    this.subheader = subheader;
    this.children = children;
    this.expanded = false; // Set the initial value of expanded to false
  }
}

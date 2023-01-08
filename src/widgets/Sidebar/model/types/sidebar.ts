export interface SidebarItemType {
    path:string | undefined;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
    authOnly?:boolean 
}
export const SidebarStatus = {
  expanded: 'expanded',
  collapsed: 'collapsed',
} as const;

export type SidebarStatus = (typeof SidebarStatus)[keyof typeof SidebarStatus];

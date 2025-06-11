const ICONS = {
  next: (
    <path d="M2.897 0l19.73 15.862-19.703 16.138-2.708-2.957 14.674-13.347-14.48-12.629 2.487-3.067z"></path>
  ),
  prev: (
    <path d="M19.947 0l-19.73 15.862 19.703 16.138 2.708-2.957-14.674-13.347 14.48-12.629-2.487-3.067z"></path>
  ),
};

export type TIconType = keyof typeof ICONS;

export default ICONS;

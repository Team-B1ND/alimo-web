export interface NavigationProps {
  location: {
    pathname: string;
  };
  navigate: (path: string) => void;
}

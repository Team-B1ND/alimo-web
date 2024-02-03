import { useEffect, useState } from "react";

interface NavigationProps {
  location: {
    pathname: string;
  };
  navigate: (path: string) => void;
}

const useSideBarNavigation = ({ location, navigate }: NavigationProps) => {
  const [isClickCategory, setIsClickCategory] = useState<String | null>(null);
  useEffect(() => {
    const handleNavigation = () => {
      switch (location.pathname) {
        case "/main":
          setIsClickCategory("카테고리 관리");
          break;
        case "/write-read":
          setIsClickCategory("내가 쓴 공지보기");
          break;
        default:
          setIsClickCategory("");
          break;
      }
    };

    handleNavigation();
  }, [location.pathname]);

  const handleCategoryClick = (itemName: string) => {
    setIsClickCategory(itemName);
    switch (itemName) {
      case "카테고리 관리":
        navigate("/main");
        break;
      case "내가 쓴 공지보기":
        navigate("/write-read");
        break;
      default:
        navigate("");
    }
  };

  return { handleCategoryClick, isClickCategory };
};

export default useSideBarNavigation;

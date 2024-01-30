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
          setIsClickCategory("메인");
          break;
        case "/write":
          setIsClickCategory("글작성");
          break;
        case "/category-manage":
          setIsClickCategory("카테고리 관리");
          break;
        case "/write-read":
          setIsClickCategory("작성글 보기");
          break;
        case "/setting":
          setIsClickCategory("설정");
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
      case "메인":
        navigate("/main");
        break;
      case "글작성":
        navigate("/write");
        break;
      case "카테고리 관리":
        navigate("/category-manage");
        break;
      case "작성글 보기":
        navigate("/write-read");
        break;
      case "설정":
        navigate("/setting");
        break;
      default:
        navigate("");
    }
  };

  return { handleCategoryClick, isClickCategory };
};

export default useSideBarNavigation;

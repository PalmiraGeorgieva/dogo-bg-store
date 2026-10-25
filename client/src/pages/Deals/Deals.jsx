import CategoryPage from "../../components/CategoryPage/CategoryPage";
import "./Deals.css";
import { useTranslation } from "react-i18next";

function Deals() {
    const { t } = useTranslation();

    return (
       <CategoryPage
           title={t("deals.title")}
           description={t("deals.description")}
        />
    );
}

export default Deals;

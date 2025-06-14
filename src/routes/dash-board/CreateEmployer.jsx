// import { useEffect, useMemo, useState } from "react";
// import Tabs from "../../ui/Tabs";
// import EmployerDataForm from "../../ui/dash-board/create-employee/EmployerDataForm";
// import PermissionBoard from "../../ui/dash-board/create-employee/PermissionBoard";
// import WorkGroups from "./teams/WorkGroups";
// import { useParams, useSearchParams } from "react-router";
// import PerformanceIndicators from "../../ui/dash-board/create-employee/PerformanceIndicators";
// import DataUpdateRequest from "../../ui/dash-board/create-employee/DataUpdateRequest";

// const CreateEmployee = () => {
//   const { id } = useParams();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const isEditMode = !!id;

//   const tabs = useMemo(() => {
//     const baseTabs = [
//       {
//         id: 1,
//         icon: <i className="fa-regular fa-user"></i>,
//         title: "بيانات الحساب",
//       },
//       {
//         id: 2,
//         icon: <i className="fa-regular fa-shield-halved"></i>,
//         title: "الصلاحيات",
//       },
//       {
//         id: 3,
//         icon: <i className="fa-regular fa-users"></i>,
//         title: "المجموعات التابعه",
//       },
//       {
//         id: 5,
//         icon: <i className="fa-regular fa-calendar-lines-pen"></i>,
//         notificationIndicator: true,
//         title: "طلبات تحديت البيانات",
//       },
//     ];

//     if (isEditMode) {
//       baseTabs.push({
//         id: 4,
//         icon: <i className="fa-solid fa-chart-waterfall"></i>,
//         title: "مؤشرات الاداء",
//       });
//     }

//     return baseTabs;
//   }, [isEditMode]);

//   const [activeTab, setActiveTab] = useState(() => {
//     const tabParam = searchParams.get("tab");
//     return tabParam ? parseInt(tabParam) : tabs[0].id;
//   });

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//     setSearchParams({ tab: tabId.toString() });
//   };

//   useEffect(() => {
//     if (id) {
//       // fetch user data by ID and populate forms if needed
//     }
//   }, [id]);

//   return (
//     <section>
//       <div className="row g-3">
//         <div className="col-12 col-md-3 position-sticky">
//           <Tabs
//             tabs={tabs}
//             activeTab={activeTab}
//             onTabChange={handleTabClick}
//           />
//         </div>
//         <div className="col-12 col-md-9 ">
//           {activeTab === 1 && <EmployerDataForm />}
//           {activeTab === 2 && <PermissionBoard />}
//           {activeTab === 3 && <WorkGroups />}
//           {activeTab === 4 && <PerformanceIndicators />}
//           {activeTab === 5 && <DataUpdateRequest />}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CreateEmployee;
import { useEffect, useMemo, useState } from "react";
import Tabs from "../../ui/Tabs";
import EmployerDataForm from "../../ui/dash-board/create-employee/EmployerDataForm";
import PermissionBoard from "../../ui/dash-board/create-employee/PermissionBoard";
import WorkGroups from "./teams/WorkGroups";
import { useParams, useSearchParams } from "react-router";
import PerformanceIndicators from "../../ui/dash-board/create-employee/PerformanceIndicators";
import DataUpdateRequest from "../../ui/dash-board/create-employee/DataUpdateRequest";

const CreateEmployee = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const isEditMode = !!id;

  const allTabs = [
    {
      id: 1,
      icon: <i className="fa-regular fa-user"></i>,
      title: "بيانات الحساب",
    },
    {
      id: 2,
      icon: <i className="fa-regular fa-shield-halved"></i>,
      title: "الصلاحيات",
    },
    {
      id: 3,
      icon: <i className="fa-regular fa-users"></i>,
      title: "المجموعات التابعه",
    },
    {
      id: 4,
      icon: <i className="fa-solid fa-chart-waterfall"></i>,
      title: "مؤشرات الاداء",
      visibleInEditMode: true,
    },
    {
      id: 5,
      icon: <i className="fa-regular fa-calendar-lines-pen"></i>,
      notificationIndicator: true,
      title: "طلبات تحديت البيانات",
      visibleInEditMode: true,
    },
  ];

  const tabs = useMemo(() => {
    return allTabs.filter((tab) => {
      return !tab.visibleInEditMode || isEditMode;
    });
  }, [isEditMode]);

  const [activeTab, setActiveTab] = useState(() => {
    const tabParam = searchParams.get("tab");
    return tabParam ? parseInt(tabParam) : tabs[0]?.id;
  });

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId.toString() });
  };

  useEffect(() => {
    if (id) {
      // Fetch user data by ID here
    }
  }, [id]);

  const tabComponents = {
    1: <EmployerDataForm />,
    2: <PermissionBoard />,
    3: <WorkGroups />,
    4: <PerformanceIndicators />,
    5: <DataUpdateRequest />,
  };

  return (
    <section>
      <div className="row g-3">
        <div className="col-12 col-md-3 position-sticky">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabClick}
          />
        </div>
        <div className="col-12 col-md-9">
          {tabComponents[activeTab] || (
            <div>المحتوى غير متوفر لهذا التبويب</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CreateEmployee;

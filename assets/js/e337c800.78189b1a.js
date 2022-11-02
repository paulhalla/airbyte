"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[7524],{21264:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=a(83117),n=(a(67294),a(3905));const i={},p="Harvest",l={unversionedId:"integrations/sources/harvest",id:"integrations/sources/harvest",title:"Harvest",description:"This page contains the setup guide and reference information for the Harvest source connector.",source:"@site/../docs/integrations/sources/harvest.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/harvest",permalink:"/integrations/sources/harvest",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/harvest.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Harness",permalink:"/integrations/sources/harness"},next:{title:"Baton",permalink:"/integrations/sources/hellobaton"}},s={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up the Harvest connector in Airbyte",id:"set-up-the-harvest-connector-in-airbyte",level:2},{value:"For Airbyte Cloud",id:"for-airbyte-cloud",level:3},{value:"For Airbyte Open Source",id:"for-airbyte-open-source",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:o};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"harvest"},"Harvest"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Harvest source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To set up the Harvest source connector, you'll need the ",(0,n.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/"},"Harvest Account ID and API key"),"."),(0,n.kt)("h2",{id:"set-up-the-harvest-connector-in-airbyte"},"Set up the Harvest connector in Airbyte"),(0,n.kt)("h3",{id:"for-airbyte-cloud"},"For Airbyte Cloud"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Harvest")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Harvest connector."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/"},"Harvest Account ID"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. "),(0,n.kt)("li",{parentName:"ol"},"For Authentication mechanism, select ",(0,n.kt)("strong",{parentName:"li"},"Authenticate via Harvest (OAuth)")," from the dropdown and click ",(0,n.kt)("strong",{parentName:"li"},"Authenticate your Harvest account"),". Log in and authorize your Harvest account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h3",{id:"for-airbyte-open-source"},"For Airbyte Open Source"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Navigate to the Airbyte Open Source dashboard."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,n.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,n.kt)("strong",{parentName:"li"},"Harvest")," from the Source type dropdown."),(0,n.kt)("li",{parentName:"ol"},"Enter the name for the Harvest connector."),(0,n.kt)("li",{parentName:"ol"},"Enter your ",(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/"},"Harvest Account ID"),"."),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Start Date"),", enter the date in YYYY-MM-DD format. The data added on and after this date will be replicated. "),(0,n.kt)("li",{parentName:"ol"},"For ",(0,n.kt)("strong",{parentName:"li"},"Authentication mechanism"),", select ",(0,n.kt)("strong",{parentName:"li"},"Authenticate with Personal Access Token")," from the dropdown. Enter your ",(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/authentication-api/authentication/authentication/#personal-access-tokens"},"Personal Access Token"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Harvest source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/clients-api/clients/contacts/"},"Client Contacts")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/clients-api/clients/clients/"},"Clients")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/company-api/company/company/"},"Company")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-messages/"},"Invoice Messages")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-payments/"},"Invoice Payments")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoices/"},"Invoices")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/invoices-api/invoices/invoice-item-categories/"},"Invoice Item Categories")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-messages/"},"Estimate Messages")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimates/"},"Estimates")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/estimates-api/estimates/estimate-item-categories/"},"Estimate Item Categories")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expenses/"},"Expenses")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/expenses-api/expenses/expense-categories/"},"Expense Categories")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/tasks-api/tasks/tasks/"},"Tasks")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/timesheets-api/timesheets/time-entries/"},"Time Entries")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/user-assignments/"},"Project User Assignments")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/task-assignments/"},"Project Task Assignments")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/projects-api/projects/projects/"},"Projects")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/roles-api/roles/roles/"},"Roles")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/billable-rates/"},"User Billable Rates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/cost-rates/"},"User Cost Rates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/users-api/users/project-assignments/"},"User Project Assignments")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/expense-reports/"},"Expense Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/uninvoiced-report/"},"Uninvoiced Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/time-reports/"},"Time Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://help.getharvest.com/api-v2/reports-api/reports/project-budget-report/"},"Project Budget Report"))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"The connector is restricted by the ",(0,n.kt)("a",{parentName:"p",href:"https://help.getharvest.com/api-v2/introduction/overview/general/#rate-limiting"},"Harvest rate limits"),"."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17326"},"17326")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrate to per-stream states.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15221"},"15221")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added ",(0,n.kt)("inlineCode",{parentName:"td"},"parent_id")," for all streams which have parent stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15312"},"15312")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"started_time")," and ",(0,n.kt)("inlineCode",{parentName:"td"},"ended_time")," format schema error and updated report slicing")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7952"},"7952")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement OAuth 2.0 support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5747"},"5747")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update schema date-time fields")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5071"},"5701")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvest normalization failure: fixing the schemas")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4274"},"4274")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix wrong data type on ",(0,n.kt)("inlineCode",{parentName:"td"},"statement_key")," in ",(0,n.kt)("inlineCode",{parentName:"td"},"clients")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4222"},"4222")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Correct specification parameter name")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for Kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3709"},"3709")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Release Harvest connector!")))))}c.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=o(a),u=n,d=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return a?r.createElement(d,p(p({ref:t},m),{},{components:a})):r.createElement(d,p({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,p=new Array(i);p[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,p[1]=l;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);
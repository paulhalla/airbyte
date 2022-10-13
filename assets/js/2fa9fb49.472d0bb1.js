"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[4855],{22940:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var a=n(83117),o=(n(67294),n(3905));const r={},l="On AWS (EC2)",i={unversionedId:"deploying-airbyte/on-aws-ec2",id:"deploying-airbyte/on-aws-ec2",title:"On AWS (EC2)",description:"The instructions have been tested on Amazon Linux 2 AMI (HVM)",source:"@site/../docs/deploying-airbyte/on-aws-ec2.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-aws-ec2",permalink:"/deploying-airbyte/on-aws-ec2",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-aws-ec2.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Local Deployment",permalink:"/deploying-airbyte/local-deployment"},next:{title:"On Azure (VM)",permalink:"/deploying-airbyte/on-azure-vm-cloud-shell"}},s={},c=[{value:"Create a new instance",id:"create-a-new-instance",level:2},{value:"Install environment",id:"install-environment",level:2},{value:"Install &amp; start Airbyte",id:"install--start-airbyte",level:2},{value:"Connect to Airbyte",id:"connect-to-airbyte",level:2},{value:"Pushing Airbyte logs to CloudWatch",id:"pushing-airbyte-logs-to-cloudwatch",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"on-aws-ec2"},"On AWS (EC2)"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The instructions have been tested on ",(0,o.kt)("inlineCode",{parentName:"p"},"Amazon Linux 2 AMI (HVM)"))),(0,o.kt)("h2",{id:"create-a-new-instance"},"Create a new instance"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Launch a new instance")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(211).Z,width:"851",height:"207"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select instance AMI")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(96742).Z,width:"1032",height:"195"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select instance type",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For testing out Airbyte, a ",(0,o.kt)("inlineCode",{parentName:"li"},"t2.medium")," instance is likely sufficient. Airbyte uses a lot of disk space with images and logs, so make sure to provision at least 30GBs of disk per node."),(0,o.kt)("li",{parentName:"ul"},"For long-running Airbyte installations, we recommend a ",(0,o.kt)("inlineCode",{parentName:"li"},"t2.large")," instance.")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(20465).Z,width:"1230",height:"93"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Next: Configure Instance Details")," ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Next: Add Storage"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Next: Add Tags"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can tune parameters or keep the defaults"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Next: Configure Security Groups"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"We are going to allow network for ",(0,o.kt)("inlineCode",{parentName:"li"},"ssh")," ")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(36773).Z,width:"1235",height:"382"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Review and Launch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Launch")),(0,o.kt)("li",{parentName:"ul"},"Create a ssh key so you can connect to the instance",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Download the key ","(","and don't lose it or you won't be able to connect to the instance",")")))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(938).Z,width:"694",height:"505"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Launch Instances"))),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(32607).Z,width:"1317",height:"97"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Wait for the instance to become ",(0,o.kt)("inlineCode",{parentName:"li"},"Running"))),(0,o.kt)("h2",{id:"install-environment"},"Install environment"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Note: The following commands will be entered either on your local terminal or in your ssh session on the instance terminal. The comments above each command block will indicate where to enter the commands.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nSSH_KEY=~/Downloads/airbyte-key.pem # or wherever you've downloaded the key\nINSTANCE_IP=REPLACE_WITH_YOUR_INSTANCE_IP\nchmod 400 $SSH_KEY # or ssh will complain that the key has the wrong permissions\nssh -i $SSH_KEY ec2-user@$INSTANCE_IP\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"docker"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo yum update -y\nsudo yum install -y docker\nsudo service docker start\nsudo usermod -a -G docker $USER\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nsudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\ndocker-compose --version\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Close the ssh connection to ensure the group modification is taken into account")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nlogout\n")),(0,o.kt)("h2",{id:"install--start-airbyte"},"Install & start Airbyte"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to your instance")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nssh -i $SSH_KEY ec2-user@$INSTANCE_IP\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install Airbyte")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your ssh session on the instance terminal\nmkdir airbyte && cd airbyte\nwget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\ndocker-compose up -d\n")),(0,o.kt)("h2",{id:"connect-to-airbyte"},"Connect to Airbyte"),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"For security reasons, we strongly recommend to not expose Airbyte on Internet available ports. Future versions will add support for SSL & Authentication.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create ssh tunnel for port 8000")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you want to use different ports you will need to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"API_URL")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file and restart Airbyte.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# In your workstation terminal\nssh -i $SSH_KEY -L 8000:localhost:8000 -N -f ec2-user@$INSTANCE_IP\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Just visit ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8000"},"http://localhost:8000")," in your browser and start moving some data!")),(0,o.kt)("h2",{id:"pushing-airbyte-logs-to-cloudwatch"},"Pushing Airbyte logs to CloudWatch"),(0,o.kt)("p",null,"If you want to get your logs from your Airbyte Docker containers in CloudWatch, simply follow ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/pt/premiumsupport/knowledge-center/cloudwatch-docker-container-logs-proxy/"},"this")," guide to do so."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you encounter any issues, just connect to our ",(0,o.kt)("a",{parentName:"p",href:"https://slack.airbyte.io"},"Slack"),". Our community will help! We also have a ",(0,o.kt)("a",{parentName:"p",href:"/troubleshooting/on-deploying"},"FAQ")," section in our docs for common problems."))}p.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,k=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(k,l(l({ref:t},u),{},{components:n})):a.createElement(k,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_ami-b374eb781f75f807ac3f1c5cb628056a.png"},20465:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_instance_type-f1ee46f9d485c76ccb322786cca87f21.png"},32607:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_instance_view-ced51b997a0ee6be955d2377a8444644.png"},211:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_launch-5afed41454f07aee271b33d7f43c663c.png"},36773:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_security_group-1573ecd2b678ddde6335f0c8a7feee9e.png"},938:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aws_ec2_ssh_key-9f083d91a4424347653cb0acd8ce9794.png"}}]);
import{l as i,$ as d,S as c,K as u,M as g,r as j,T as s,G as n,a1 as C}from"./index-DRAxbQhQ.js";import{S as p}from"./CardSecondaryAction-DhIG1Y_S.js";import{u as h}from"./useDemoData-BONai9jp.js";import{D as x}from"./DataGrid-CjdGGDRX.js";import{G as f}from"./GridToolbar-CwcA_7gj.js";import{C as b}from"./TableExports-C7aPINvc.js";import"./Tooltip-CFImnuRV.js";import"./random-generator-jINFx21d.js";import"./Info-CAMojKk0.js";import"./Select-D4CpAZMw.js";import"./Menu-DCGCr4Gv.js";import"./utils-DoM3o7-Q.js";import"./InputBase-C10xFuq9.js";import"./OutlinedInput-C-PMnjYA.js";import"./MenuItem-I_H4wdck.js";import"./Autocomplete-IOsgmMSK.js";import"./ListSubheader-B3jp8p9v.js";import"./usePreviousProps-GibiJsmS.js";import"./Rating-BM9K3GlR.js";import"./toPropertyKey-H7AvS4qg.js";import"./typeof-QjJsDpFa.js";import"./Badge-DPukPMNZ.js";import"./Checkbox-DF2srxXR.js";import"./TextField-C23CKz-E.js";import"./FormControl-DTGQKB1F.js";import"./InputLabel-BTLx1hne.js";import"./FormLabel-D7QhHnPX.js";import"./FormHelperText-YH3vNJL3.js";import"./Switch-DfZd8zsq.js";import"./InputAdornment-Cj0cTNRg.js";import"./Skeleton-D6V4KNi7.js";import"./CircularProgress-BO7Tj77P.js";import"./TablePagination-1Wm_aae9.js";import"./LastPage-CBUA5E5W.js";import"./TableCell-GjZj8q6n.js";function y(){const{data:e}=h({dataSet:"Commodity",rowLength:10,maxColumns:8});return i.jsx(d,{content:!1,title:"Column Visibility Panel",secondary:i.jsx(c,{direction:"row",spacing:2,alignItems:"center",children:i.jsx(p,{link:"https://mui.com/x/react-data-grid/column-visibility/#column-visibility-panel"})}),children:i.jsx(u,{sx:{width:"100%","& .MuiDataGrid-root":{"& .MuiDataGrid-toolbarContainer":{pl:3,pr:2,pt:2,"& .MuiButton-root":{p:1,color:"common.white",borderRadius:1.5,bgcolor:"primary.main"}}}},children:i.jsx(x,{...e,autoHeight:!0,initialState:{pagination:{paginationModel:{pageSize:5}}},slots:{toolbar:f},hideFooterSelectedRowCount:!0})})})}function S(){const e=g(),{data:t,loading:m}=h({dataSet:"Commodity",rowLength:20,maxColumns:20}),[r,a]=j.useState({id:!1,brokerId:!1,status:!1});let o=[];return t.columns.map(l=>o.push({label:l.headerName,key:l.field})),i.jsx(d,{content:!1,title:"Controlled Visible Columns",secondary:i.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[i.jsx(b,{data:t.rows,filename:"controlled-visibility-data-grid-table.csv",header:o}),i.jsx(p,{link:"https://mui.com/x/react-data-grid/column-visibility/#controlled-visible-columns"})]}),children:i.jsx(u,{sx:{width:"100%","& .MuiDataGrid-root":{"& .MuiDataGrid-cell--withRenderer > .positive":{color:e.palette.mode===s.DARK?"success.dark":"success.main"},"& .MuiDataGrid-cell--withRenderer > .negative":{color:e.palette.mode===s.DARK?"error.dark":"error.main"}}},children:i.jsx(x,{...t,loading:m,initialState:{pagination:{paginationModel:{pageSize:5}}},autoHeight:!0,hideFooterSelectedRowCount:!0,columnVisibilityModel:r,onColumnVisibilityModelChange:l=>a(l)})})})}function M(){var a;const e=g(),{data:t,loading:m}=h({dataSet:"Commodity",rowLength:20,maxColumns:20});let r=[];return t.columns.map(o=>r.push({label:o.headerName,key:o.field})),i.jsx(d,{content:!1,title:"Initialize Column Visibility",secondary:i.jsxs(c,{direction:"row",spacing:2,alignItems:"center",children:[i.jsx(b,{data:t.rows,filename:"column-visibility-data-grid-table.csv",header:r}),i.jsx(p,{link:"https://mui.com/x/react-data-grid/column-visibility/#initialize-the-visible-columns"})]}),children:i.jsx(u,{sx:{width:"100%","& .MuiDataGrid-root":{"& .MuiDataGrid-cell--withRenderer > .positive":{color:e.palette.mode===s.DARK?"success.dark":"success.main"},"& .MuiDataGrid-cell--withRenderer > .negative":{color:e.palette.mode===s.DARK?"error.dark":"error.main"}}},children:i.jsx(x,{...t,loading:m,autoHeight:!0,hideFooterSelectedRowCount:!0,initialState:{...t.initialState,pagination:{paginationModel:{pageSize:5}},columns:{...(a=t.initialState)==null?void 0:a.columns,columnVisibilityModel:{id:!1,brokerId:!1,status:!1}}}})})})}function ai(){return i.jsxs(n,{container:!0,spacing:C,children:[i.jsx(n,{item:!0,xs:12,children:i.jsx(M,{})}),i.jsx(n,{item:!0,xs:12,children:i.jsx(S,{})}),i.jsx(n,{item:!0,xs:12,children:i.jsx(y,{})})]})}export{ai as default};
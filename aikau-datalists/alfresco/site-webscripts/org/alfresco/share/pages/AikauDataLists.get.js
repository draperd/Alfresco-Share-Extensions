<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-footer.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/pages/datalists.lib.js">

var siteId = (page.url.templateArgs.site != null) ? page.url.templateArgs.site : "";

var headerServices = getHeaderServices();
var headerWidgets = getHeaderModel(getPageTitle());

var dataListServices = getDataListServices();
var dataListWidgets = getDataListWidgets({
   siteId: siteId
});
var services = headerServices.concat(dataListServices);

headerWidgets.push(dataListWidgets);

model.jsonModel = getFooterModel(services, headerWidgets);
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];
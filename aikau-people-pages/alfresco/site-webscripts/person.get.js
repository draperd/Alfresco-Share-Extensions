<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-footer.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/pages/people.lib.js">

var headerServices = getHeaderServices();
var headerWidgets = getHeaderModel("User Profile Page");

var peopleServices = getUserProfileServices();
var services = headerServices.concat(peopleServices);

var widgets = {
   name: "alfresco/layout/VerticalWidgets",
   config: {
      style: {
         marginTop: "10px"
      },
      widgets: [
         getUserProfileWidgets({
            userName: page.url.args["userName"]
         })
      ]
   }
};
headerWidgets.push(widgets);

// Push services and widgets into the getFooterModel to return with a sticky footer wrapper
model.jsonModel = getFooterModel(services, headerWidgets);
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];


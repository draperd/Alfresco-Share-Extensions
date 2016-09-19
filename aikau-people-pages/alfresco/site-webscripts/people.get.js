<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-footer.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/doclib/doclib.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/pages/people.lib.js">

var headerServices = getHeaderServices();
var headerWidgets = getHeaderModel("People Finder");

// Required for handling actions...
var docLibServices = getDocumentLibraryServices();

var peopleServices = getUserProfileServices();
var services = headerServices.concat(peopleServices).concat(docLibServices);

var widgets = getUserProfilesWidgets();
headerWidgets.push(widgets);

// Push services and widgets into the getFooterModel to return with a sticky footer wrapper
model.jsonModel = getFooterModel(services, headerWidgets);
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];


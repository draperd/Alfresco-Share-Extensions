<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-header.lib.js">
<import resource="classpath:/alfresco/site-webscripts/org/alfresco/share/imports/share-footer.lib.js">
<import resource="classpath:alfresco/site-webscripts/org/alfresco/aikau/{aikauVersion}/libs/doclib/doclib.lib.js">

// Get the services and widgets for the header...
var services = getHeaderServices();
var widgets = getHeaderModel(msg.get("aikau.doclib.title"));

// Build a list of services for both the header AND the Document Library...
services = services.concat(getDocumentLibraryServices());

// Create the Document Library model...
var docLib = getDocLib({
   siteId: page.url.templateArgs.site, 
   containerId: "documentLibrary"
});

// Add the Document Library model to the header widgets...
widgets.push(docLib);

// The footer wraps everything...
model.jsonModel = getFooterModel(services, widgets);

// Always include user membership data for any group membership based evaluations...
model.jsonModel.groupMemberships = user.properties["alfUserGroups"];
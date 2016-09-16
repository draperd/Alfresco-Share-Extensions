
var services = model.jsonModel.services;
for (var i=0; i<services.length; i++)
{
   if (services[i] === "alfresco/services/SearchService")
   {
      services[i] = "blogs/CustomSearchService";
   }
   else if (services[i].name === "alfresco/services/SearchService")
   {
      services[i].name = "blogs/CustomSearchService";
   }
}
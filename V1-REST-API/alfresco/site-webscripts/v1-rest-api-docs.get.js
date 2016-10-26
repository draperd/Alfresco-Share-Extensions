model.jsonModel = {
   services: ["blog/V1RestApiDocumentService"],
   widgets: [
      {
         name: "alfresco/lists/AlfList",
         config: {
            itemsProperty: "list.entries",
            metadataProperty: "list.pagination",
            startIndexProperty: "list.pagination.skipCount",
            totalResultsProperty: "list.pagination.totalItems",
            widgets: [
               {
                  name: "alfresco/lists/views/AlfListView",
                  config: {
                     widgets: [
                        {
                           name: "alfresco/lists/views/layouts/Row",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/lists/views/layouts/Cell",
                                    config: {
                                       widgets: [
                                          {
                                             name: "alfresco/renderers/Property",
                                             config: {
                                                propertyToRender: "entry.name"
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      }
   ]
};
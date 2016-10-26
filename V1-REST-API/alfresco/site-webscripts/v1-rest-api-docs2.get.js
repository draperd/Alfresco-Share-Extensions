var view = {
   name: "aikau/lists/views/ListView",
   config: {
      widgetsForHeader: [
         {
            name: "aikau/lists/views/layouts/HeaderCell",
            config: {
               label: "Name",
               sortable: true,
               sortValue: "cm:name",
               useHash: "{useHash}"
            }
         },
         {
            name: "aikau/lists/views/layouts/HeaderCell",
            config: {
               label: "Modified on",
               sortable: true,
               sortValue: "cm:modified",
               useHash: "{useHash}"
            }
         },
         {
            name: "aikau/lists/views/layouts/HeaderCell",
            config: {
               label: "by",
               sortable: true,
               sortValue: "cm:modifier",
               useHash: "{useHash}"
            }
         }
      ],
      widgets: [
         {
            name: "alfresco/lists/views/layouts/Row",
            config: {
               widgets: [
                  {
                     name: "aikau/lists/views/layouts/Cell",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/renderers/PropertyLink",
                              config: {
                                 propertyToRender: "entry.name",
                                 publishTopic: "ALF_UPDATE_LIST_STATE"
                              }
                           }
                        ]
                     }
                  },
                  {
                     name: "aikau/lists/views/layouts/Cell",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/renderers/Date",
                              config: {
                                 simple: true,
                                 propertyToRender: "entry.modifiedAt"
                              }
                           }
                        ]
                     }
                  },
                  {
                     name: "aikau/lists/views/layouts/Cell",
                     config: {
                        widgets: [
                           {
                              name: "alfresco/renderers/Property",
                              config: {
                                 propertyToRender: "entry.modifiedByUser.displayName"
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
};

var list = {
   name: "aikau/lists/List",
   config: {
      itemsProperty: "list.entries",
      metadataProperty: "list.pagination",
      startIndexProperty: "list.pagination.skipCount",
      totalResultsProperty: "list.pagination.totalItems",
      widgets: [
         view
      ]
   }
};

model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: false,
               all: true
            }
         }
      }, 
      "alfresco/services/NavigationService",
      "aikau/services/NodeService"
   ],
   widgets: [
      {
         name: "aikau/layout/Alfresco",
         config: {
            widgetsForHeaderLeft: [
               {
                  name: "alfresco/logo/Logo"
               },
               {
                  name: "aikau/layout/Title",
                  config: {
                     title: "Aikau with v1 REST APIs"
                  }
               }
            ],
            widgetsForHeaderRight: [
               {
                  name: "aikau/buttons/Button",
                  config: {
                     buttonClasses: "mdl-button--icon",
                     leadingIcon: "input"
                  }
               }
            ],
            widgetsForDrawer: [
               
            ],
            widgetsForToolbarLeft: [
               
            ],
            widgetsForToolbarRight: [
               {
                  name: "aikau/buttons/Button",
                  config: {
                     buttonClasses: "mdl-button--icon",
                     leadingIcon: "live_help"
                  }
               }
            ],
            widgetsForContent: [
               {
                  name: "alfresco/documentlibrary/AlfBreadcrumbTrail",
                  config: {
                     showRootLabel: true,
                     rootLabel: "Home",
                     pathChangeTopic: "ALF_RETRIEVE_DOCUMENTS_REQUEST",
                     pathChangeTopicPathProperty: "relativePath",
                     currentPath: "/",
                     publishTopic: "ALF_UPDATE_LIST_STATE",
                     publishPayloadType: "PROCESS",
                     publishPayloadModifiers: ["processInstanceTokens"],
                     publishPayload: {
                        entry: {
                           isFolder: true,
                           path: {
                              name: "/Company Home/{path}/" // Need to prepend "/Company Home" to match REST API
                           }
                        }
                     }
                  }
               },
               {
                  name: "alfresco/lists/Paginator",
                  config: {
                     documentsPerPage: 10,
                     pageSizes: [5,10,20]
                  }
               },
               list
            ],
            widgetsForFixedSearch: [
               {
                  name: "aikau/buttons/Button",
                  config: {
                     buttonClasses: "mdl-button--fab mdl-button--colored",
                     leadingIcon: "search"
                  }
               }
            ]
         }
      }
   ]
};
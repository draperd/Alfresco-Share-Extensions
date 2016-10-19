/* global widgetUtils */
function getAdvancedSearchButton() {
   return {
      name: "alfresco/buttons/AlfButton",
      config: {
         label: "Advanced Search",
         additionalCssClasses: "call-to-action",
         publishTopic: "ALF_CREATE_DIALOG_REQUEST",
         publishPayload: {
            dialogId: "ADVANCED_SEARCH_DIALOG",
            dialogTitle: "Advanced Search",
            contentWidth: "1000px",
            hideTopic: "ALF_ADVANCED_SEARCH",
            widgetsContent: [
               {
                  name: "alfresco/forms/Form",
                  config: {
                     autoSavePublishTopic: "ALF_FORM_REQUEST",
                     autoSavePublishGlobal: true,
                     autoSavePublishPayload: {
                        itemKind: "type",
                        mode: "edit",
                        formId: "search",
                        alfSuccessTopic: "ADV_SEARCH_FORM_RETRIEVED",
                        formConfig: {
                           okButtonLabel: "Search",
                           okButtonPublishTopic: "ALF_ADVANCED_SEARCH",
                           formSubmissionPayloadMixin: {
                              alfResponseScope: "ADV_SEARCH_"
                           },
                           widgetsBefore: [
                              {
                                 name: "alfresco/forms/controls/TextBox",
                                 config: {
                                    label: "Keywords",
                                    name: "searchTerm"
                                 }
                              }
                           ]
                        }
                     },
                     widgets: [
                        {
                           name: "alfresco/forms/controls/Select",
                           config: {
                              fieldId: "SELECT_FORM",
                              label: "Look for",
                              description: "This indicates the type of thing that you want to search for",
                              name: "itemId",
                              optionsConfig: {
                                 fixed: [
                                    {
                                       label: "Content", value: "cm:content"
                                    },
                                    {
                                       label: "Folder", value: "cm:folder"
                                    }
                                 ]
                              }
                           }
                        },
                        {
                           name: "alfresco/forms/controls/TextBox",
                           config: {
                              fieldId: "DATA_TYPE",
                              name: "formConfig.formSubmissionPayloadMixin.datatype",
                              autoSetConfig: [
                                 {
                                    copyRule: {
                                       targetId: "SELECT_FORM"
                                    }
                                 }
                              ],
                              visibilityConfig: {
                                 initialValue: false
                              }
                           }
                        }
                     ]
                  }
               },
               {
                  name: "alfresco/layout/DynamicWidgets",
                  config: {
                     subscribeGlobal: true,
                     subscriptionTopic: "ADV_SEARCH_FORM_RETRIEVED"
                  }
               }
            ],
            publishOnShow: [
               {
                  publishTopic: "ALF_FORM_REQUEST",
                  publishPayload: {
                     itemId: "cm:content",
                     itemKind: "type",
                     mode: "edit",
                     formId: "search",
                     alfSuccessTopic: "ADV_SEARCH_FORM_RETRIEVED",
                     formConfig: {
                        okButtonLabel: "Search",
                        okButtonPublishTopic: "ALF_ADVANCED_SEARCH",
                        formSubmissionPayloadMixin: {
                           alfResponseScope: "ADV_SEARCH_",
                           datatype: "cm:content"
                        },
                        widgetsBefore: [
                           {
                              name: "alfresco/forms/controls/TextBox",
                              config: {
                                 label: "Keywords",
                                 name: "searchTerm"
                              }
                           }
                        ]
                     }
                  },
                  publishGlobal: true
               }
            ]
         }
      }
   };
}

var menubar = widgetUtils.findObject(model.jsonModel.widgets, "id", "FCTSRCH_TOP_MENU_BAR");
if (menubar && menubar.config && menubar.config.widgets)
{
   menubar.config.widgets.push(getAdvancedSearchButton());
}

model.jsonModel.services.push("alfresco/services/FormsRuntimeService");
/* global args, instance */
model.jsonModel = {
   rootNodeId: args.htmlid,
   pubSubScope: instance.object.id,
   services: [],
   widgets: [
      {
         name: "alfresco/dashlets/Dashlet",
         config: {
            title: "vue.js example",
            bodyHeight: args.height || null,
            componentId: instance.object.id,
            widgetsForToolbar: [],
            widgetsForBody: [
               {
                  name: "blog/VueExample"
               }
            ]
         }
      }
   ]
};
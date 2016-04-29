var verticalStack = widgetUtils.findObject(model.jsonModel.widgets, "id", "FCTSRCH_MAIN_VERTICAL_STACK");
if (verticalStack && verticalStack.config && verticalStack.config.widgets)
{
   verticalStack.config.widgets.unshift({
      name: "alfresco/experimental/ng2/Bootstrap",
      config: {
         main: "blog/main.ts",
         templateString: "<my-app>Loading...</my-app>"
      }
   });
}
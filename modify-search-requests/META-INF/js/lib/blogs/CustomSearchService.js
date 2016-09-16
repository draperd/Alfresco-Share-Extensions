define(["dojo/_base/declare",
        "alfresco/services/SearchService"],
       function(declare,SearchService) {

  return declare([SearchService], {
    onSearchRequest: function(payload) {
      payload.term = payload.term + ""              // You *could* append additional search terms
      payload.datatype = "cm:content";              // Only search for nodes that are cm:content
      payload.prop_mimetype = "application/msword"; // Only search for Word files
      this.inherited(arguments); // This calls the superclass function
    }
  });
});
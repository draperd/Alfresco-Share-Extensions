define(["dojo/_base/declare",
        "alfresco/services/SearchService"],
       function(declare,SearchService) {

  return declare([SearchService], {
    onSearchRequest: function(payload) {
      payload.term = '(' + payload.term + ') AND -TYPE:"cm:thumbnail" AND -TYPE:"cm:failedThumbnail" AND -TYPE:"cm:rating" AND -TYPE:"fm:post" AND -ASPECT:"sys:hidden" AND -cm:creator:system';
      payload.datatype = "cm:content";
      this.inherited(arguments);
    }
  });
});
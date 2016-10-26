/**
 * Copyright (C) 2005-2016 Alfresco Software Limited.
 *
 * This file is part of Alfresco
 *
 * Alfresco is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Alfresco is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * A service for accessing documents via the V1 REST API
 *
 * @module blog/V1RestApiDocumentService
 * @extends module:alfresco/services/BaseService
 * @mixes module:alfresco/core/CoreXhr
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "alfresco/services/BaseService",
        "alfresco/core/CoreXhr",
        "alfresco/core/topics",
        "service/constants/Default",
        "dojo/_base/lang"], 
        function(declare, BaseService, CoreXhr, topics, AlfConstants, lang) {
   
   return declare([BaseService, CoreXhr], {

      registerSubscriptions: function blog_V1RestApiDocumentService_registerSubscriptions() {
         this.alfSubscribe(topics.GET_DOCUMENT_LIST, lang.hitch(this, this.onRetrieveDocumentsRequest));
      },

      onRetrieveDocumentsRequest: function blog_V1RestApiDocumentService_onRetrieveDocumentsRequest(payload) {
         var url =  AlfConstants.URL_CONTEXT + "proxy/alfresco-api/-default-/public/alfresco/versions/1/nodes/-root-/children";
         var config = {
            alfSuccessTopic: payload.alfSuccessTopic,
            alfFailureTopic: payload.alfFailureTopic,
            url: url,
            method: "GET",
            callbackScope: this
         };
         this.serviceXhr(config);
      }
   });
});
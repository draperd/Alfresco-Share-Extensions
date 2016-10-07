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
 * An example Aikau widget that wraps a vue.js component.
 *
 * @module blog/VueExample
 * @extends dijit/_WidgetBase
 * @mixes dijit/_TemplatedMixin
 * @mixes module:alfresco/core/Core
 * @author Dave Draper
 */
define(["dojo/_base/declare",
        "dijit/_WidgetBase", 
        "dijit/_TemplatedMixin",
        "dojo/text!./templates/VueExample.html",
        "alfresco/core/Core",
        "vue"], 
        function(declare, _WidgetBase, _TemplatedMixin, template, AlfCore, Vue) {
   
   return declare([_WidgetBase, _TemplatedMixin, AlfCore], {

      /**
       * The HTML template to use for the widget.
       * @instance
       * @type {String}
       */
      templateString: template,

      /**
       * Process all the child widgets and then instantiate the accordion.
       *
       * @instance
       */
      postCreate: function vue_VueExample__postCreate() {
         new Vue({
            el: "#" + this.id,
            data: {
               message: "Hello Vue.js!"
            }
         });
      }
   });
});
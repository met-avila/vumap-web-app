var jqCards = {
    controlType: {
        InputText: 1,
        InputCheckbox: 2,
        InputHidden: 3,
        InputRadio: 4,
        DropDownList: 5,
        Text: 6,
        Image: 7,
        InputButton: 8,
        Others: 9,
        DxDropDownList: 10
    }
};

(function($) {

    var processing = true;
    var templateHtmlCard = '';
    var numPag = 0;
    var indexCard = 0;
    var numElements = 0;
    var totalElements = 0;
    var totalCards = 0;
    var settings = null;
    var indiceCard = 0;

    $.fn.jqCards = function(options) {

        var me = this;

        var methods = {
            init: function(params) {
                init(params);
            },
            add: function(params) {
                add(params);
            },
            remove: function(params) {
                remove(params);
            },
            update: function(params) {
                update(params);
            },
            get: function(params) {
                return get(params);
            },
            showDetails: function(params) {
                showDetails(params);
            },
            filter: function() {
                setFilterCard();
            },
            cleanFilter: function() {
                setClearFilter();
            },
            reload: function() {
                setReload();
            },
            clean: function() {
                setClean();
            }

        };

        if (methods != undefined && methods[options]) {
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) {
            return methods.init.apply(this, arguments);
        } else if (methods != undefined && methods[options] == undefined) {
            $.error('La función ' + method + ' no existe en jqCards');
        }

        function init(options) {
            settings = $.extend({
                arrayCards: [],
                url: null,
                datatype: null,
                data: { method: 'GET' },
                token: window.MRM_TOKEN,
                numCards: 10,
                height: 0,
                width: 0,
                filterControl: {
                    numColumns: 0,
                    layoutFilter: [],
                    loadControlComplete: null
                },
                selectorFilterControl: '',
                htmlTemplateCard: null,
                layoutCard: [],
                errorCallback: null,
                preloadCard: null,
                initLoadCards: null,
                loadCardsComplete: null
            }, options);

            if (options.urlTemplateCard != undefined && options.urlTemplateCard != '') {
                $.get(options.urlTemplateCard, function(data) {
                    //var html = $(data);d
                    settings.htmlTemplateCard = data;

                    var params = options.data;
                    params.ps = options.numCards;
                    params.p = numPag;

                    loadCards(params);

                });

            } else if (options.url != undefined && options.url != null) {
                var params = options.data;
                params.ps = options.numCards;
                params.p = numPag;

                loadCards(params);
            }
        }

        function add(params) {

            var cards = [];

            if (Array.isArray(params) == true) {
                numElements = params.length;

                for (var i = 0, length = params.length; i < length; i++) {
                    createCard(params[i]);
                }

            } else {
                numElements = 1;
                createCard(params);
            }
        }

        function remove(idCard) {
            var properties = settings.layoutCard;
            var property = null;

            for (var i = 0, length = properties.length; i < length; i++) {
                if (properties[i].propertyId == true) {
                    property = properties[i];
                    break;
                }
            }

            if (property != null) {
                me.each(function() {
                    var node = $(this);

                    var id = node.find(property.selector + "[value='" + idCard + "']"); //.find("[value='" + idCard + "']");
                    var div = id.closest('.col');
                    div.remove();
                });
            }
        }

        function update(card) {
            var properties = settings.layoutCard;
            var property = null;

            for (var i = 0, length = properties.length; i < length; i++) {
                if (properties[i].propertyId == true) {
                    property = properties[i];
                    break;
                }
            }

            if (property != null) {
                me.each(function() {
                    var node = $(this);

                    var id = node.find(property.selector + "[value='" + card[property.property] + "']"); //.find("[value='" + idCard + "']");
                    var htmlCard = id.closest('.col');

                    for (var i = 0, length = properties.length; i < length; i++) {
                        var element = htmlCard.find(properties[i].selector);
                        var value = card[properties[i].property];

                        if (properties[i].formatter != null) {
                            value = properties[i].formatter(card);
                        }

                        var controlType = getControlType(element); // properties[i].controlType;
                        setElementValue(element, value, controlType);
                    }

                    //div.remove();
                });
            }
        }

        function get(idCard) {
            var properties = settings.layoutCard;
            var property = null;
            var card = null;

            for (var i = 0, length = properties.length; i < length; i++) {
                if (properties[i].propertyId == true) {
                    property = properties[i];
                    break;
                }
            }

            if (property != null) {
                me.each(function() {
                    var node = $(this);

                    var id = node.find(property.selector + "[value='" + idCard + "']"); //.find("[value='" + idCard + "']");
                    var htmlCard = id.closest('.col');
                    card = {};

                    for (var i = 0, length = properties.length; i < length; i++) {
                        var element = htmlCard.find(properties[i].selector);

                        var type = getControlType(element);
                        var value = getElementValue(element, type);
                        value = value == '-1' ? '' : value;
                        card[properties[i].property] = value;
                        //var value = card[properties[i].property];

                        //if (properties[i].formatter != null) {
                        //    value = properties[i].formatter(card);
                        //}

                        //var controlType = getControlType(element);// properties[i].controlType;
                        //setElementValue(element, value, controlType);
                    }
                });
            }

            return card;
        }

        function showDetails(idCard) {

        }

        function createButtonSubmit() {
            return {
                label: "",
                selector: '#' + settings.selectorFilterControl + '_btnSubmit',
                property: '',
                value: 'Buscar',
                controlType: jqCards.controlType.InputButton,
                visible: true,
                align: 'left',
                eventName: 'click',
                eventFunction: function() {

                    setFilterCard();
                }
            };
        }

        function createButtonClear() {
            return {
                label: "",
                selector: '#' + settings.selectorFilterControl + '_btnClear',
                property: '',
                value: 'Limpiar',
                controlType: jqCards.controlType.InputButton,
                visible: true,
                align: 'left',
                eventName: 'click',
                eventFunction: function() {

                    setClearFilter();
                }
            };
        }

        function setReload() {
            numPag = 0;
            totalCards = 0;
            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            var params = settings.data;
            params.ps = settings.numCards;
            params.p = numPag;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    var value = getElementValue(element, column.controlType, column.getValue);
                    value = value == '-1' ? '' : value;
                    params[column.property] = value;
                }
            }

            var count = me.length;
            var index = 0;

            me.each(function() {

                $(this).find(".jqcards").html('');
                index++;

                if (index == count)
                    loadCards(params);
            });
        }

        function setClean() {
            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            var params = settings.data;
            params.ps = settings.numCards;
            numPag = 0;
            params.p = numPag;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    //setElementValue(element, '', column.controlType);
                    params[column.property] = '';
                }
            }

            var count = me.length;
            var index = 0;

            me.each(function() {

                $(this).find(".jqcards").html('');
                index++;

                if (index == count)
                    loadCards(params);
            });
        }

        function setClearFilter() {
            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            //var params = settings.data;
            //params.numCards = settings.numCards;
            //numPag = 1;
            //params.numPag = numPag;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    setElementValue(element, column.defaultValue, column.controlType);
                    //params[column.property] = '';
                }
            }

            //var count = me.length;
            //var index = 0;

            /*me.each(function () {

                $(this).find(".row").html('');
                index++;

                if (index == count)
                    loadCards(params);
            });*/
        }

        function setFilterCard() {
            numPag = 0;
            totalCards = 0;
            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            var params = settings.data;
            params.ps = settings.numCards;
            params.p = numPag;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    var value = getElementValue(element, column.controlType, column.getValue);
                    value = value == '-1' ? '' : value;

                    params[column.property] = value;
                }
            }

            var count = me.length;
            var index = 0;

            me.each(function() {

                $(this).find(".jqcards").html('');
                index++;

                if (index == count) {
                    console.log(params);
                    loadCards(params);

                }

            });
        }

        function nextPage(nP) {

            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            var params = settings.data;
            params.ps = settings.numCards;
            params.p = nP == undefined ? ++numPag : nP;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    var value = getElementValue(element, column.controlType);
                    value = value == '-1' ? '' : value;
                    params[column.property] = value;
                }
            }

            loadCards(params);
        }

        function prevPage(pP) {
            var filterControl = $('#' + settings.selectorFilterControl);
            var columns = settings.filterControl.layoutFilter;

            var params = settings.data;
            params.ps = settings.numCards;
            params.p = pP == undefined ? --numPag : pP;

            for (var i = 0, length = columns.length; i < length; i++) {
                var column = columns[i];

                if (column.property != "") {
                    var element = filterControl.find(column.selector);
                    var value = getElementValue(element, column.controlType);
                    value = value == '-1' ? '' : value;
                    params[column.property] = value;
                }
            }

            loadCards(params);
        }

        function createColumnsFilter(row, column) {

            var html = '<td>';
            html += '       <span>' + column.label + '</span>';
            html += '       <div>';
            html += createControl(column);
            html += '       </div>';

            html += '   </td>';

            var td = $(html);

            if (column.eventName != '' && column.eventFunction != null) {
                var selector = column.selector;
                var event = column.eventName;
                td.find(selector).off(event);
                td.find(selector).on(event, column.eventFunction);
            }

            td.appendTo(row);
        }

        function createControl(column) {

            var attr = getAttrColumn(column.selector);

            if (column.controlType == jqCards.controlType.InputText)
                return '<input type="text" ' + attr + ' value="' + column.value + '" />';

            else if (column.controlType == jqCards.controlType.InputButton)
                return '<input type="button" ' + attr + ' value="' + column.value + '" />';

            else if (column.controlType == jqCards.controlType.InputHidden)
                return '<input type="hidden" ' + attr + ' value="' + column.value + '" />';

            else if (column.controlType == jqCards.controlType.InputCheckbox) {
                var html = '<input type="checkbox" ' + attr + ' ';
                html += (column.value == true ? 'checked' : '')
                html += '/>';
                return html;
            } else if (column.controlType == jqCards.controlType.InputRadio) {
                var html = '<input type="radio" ' + attr + ' ';
                html += (column.value == true ? 'checked' : '')
                html += '/>';
                return html;
            } else if (column.controlType == jqCards.controlType.DropDownList) {
                var html = '<select ' + attr + ' >';

                for (var i = 0, length = column.value.length; i < length; i++) {
                    var obj = column.value[i];
                    html += '<option value="' + obj.value + '">';
                    html += obj.text;
                    html += '</option>';
                }

                html += '</select>';
                return html;
            }

            return '';
        }

        function getAttrColumn(selector) {

            if (selector.indexOf('#') > -1)
                return 'id="' + selector.replace('#', '') + '"';

            if (selector.indexOf('#') > -1)
                return 'class="' + selector.replace('.', '') + '"';

            return '';
        }

        function loadCards(params) {
            if (settings.initLoadCards != null) {
                settings.initLoadCards();
            }
            $.ajax({
                type: "GET",
                url: settings.url,
                data: params,
                beforeSend: function(xhr, sts) {
                    if (settings.token)
                        xhr.setRequestHeader("Authorization", "Bearer " + settings.token);
                },
                success: function(res) {



                    numElements = res.numberOfElements;
                    totalElements = res.totalElements;
                    totalCards += numElements;

                    if (numElements == 0) {
                        if (settings.loadCardsComplete != null)
                            settings.loadCardsComplete();

                        return;
                    }

                    me.each(function() {

                        var m = $(this).find(".jqcards");

                        if (m.length == 0) {
                            var node = $(this);
                            var html = $('<div class="row jqcards"><div>');

                            if (settings.height > 0)
                                node.css("height", (settings.height.toString() + "px")).css("overflow", "auto");

                            html.appendTo(node);
                        }

                    });
                    var cards = [];
                    if (res.content)
                        cards = res.content;
                    else
                        cards = res;
                    for (var i = 0, length = cards.length; i < length; i++) {
                        createCard(cards[i]);
                    }

                },
                error: function(e) {
                    if (e.status == 403)
                        window.location = '/'
                    else {
                        if (settings.errorCallback != null)
                            settings.errorCallback(data);
                        toast('warning', 'No se puede conectar al sistema, intente más tarde.', '');
                    }
                }
            });
        }

        function createCard(card) {

            //var numNodes = me.length;
            var index = 0;

            me.each(function() {
                var node = this;
                var htmlCard = $(settings.htmlTemplateCard);
                var properties = settings.layoutCard;

                var id = createIdCard(node.id, indiceCard);
                var ele = htmlCard.find(".card").first();

                if (ele.length == 1)
                    ele[0].id = id;
                else
                    htmlCard[0].id = id;

                card.jqCardId = id;

                for (var i = 0, length = properties.length; i < length; i++) {

                    var element = htmlCard.find(properties[i].selector);

                    if (properties[i].property != undefined && properties[i].property != "") {

                        var value = card[properties[i].property];

                        if (properties[i].formatter != null) {
                            value = properties[i].formatter(card);
                        }

                        var controlType = getControlType(element); // properties[i].controlType;
                        setElementValue(element, value, controlType);
                    } else if (properties[i].event != '' && properties[i].eventFunction != null) {
                        element.off(properties[i].event);
                        if (element[0])
                            element[0].eventFunction = properties[i].eventFunction;
                        element.on(properties[i].event, function() {
                            this.eventFunction(card);
                        });
                    }
                }

                var node = $(this).find(".jqcards");

                if (settings.preloadCard != null) {
                    htmlCard = settings.preloadCard(card, htmlCard);
                }

                htmlCard.appendTo(node);
                indexCard++;
                index++;
                indiceCard++;

                if (index == me.length && indexCard == numElements) {

                    if (settings.loadCardsComplete != null)
                        settings.loadCardsComplete();
                }

                if (indexCard == numElements) {
                    indexCard = 0;

                    if (totalCards < totalElements) {
                        $(window).off("scroll");
                        $(window).on("scroll", function(event) {


                            //if (htmlCard.is(':in-viewport')) 
                            if (IsInViewport(htmlCard)) {
                                $(window).off("scroll");
                                nextPage();
                            }

                        });

                        //if (htmlCard.is(':in-viewport'))
                        if (IsInViewport(htmlCard)) {
                            $(window).off("scroll");
                            nextPage();
                        }
                    }
                }

            });
        }

        //----  Funciones para el control de filtrado   -----------------------------------------------------------------------------------------

        function getElementValue(element, controlType, getFunction) {

            if (element.length == 0)
                return '';

            if (controlType == jqCards.controlType.DropDownList)
                return element.val();

            else if (controlType == jqCards.controlType.InputCheckbox)
                return element[0].checked == true ? 1 : 0;

            else if (controlType == jqCards.controlType.InputHidden)
                return element.val();

            else if (controlType == jqCards.controlType.InputRadio)
                return element[0].checked == true ? 1 : 0;

            else if (controlType == jqCards.controlType.InputText)
                return element.val();

            else if (controlType == jqCards.controlType.Image)
                return '';

            else if (controlType == "" || controlType == jqCards.controlType.Text)
                element.text();

            else if (controlType == jqCards.controlType.Others && getFunction != undefined) {
                return getFunction(element);
            } else if (controlType == "" || controlType == jqCards.controlType.DxDropDownList)
                return element.dxSelectBox('option', 'value');
        }

        function setElementValue(element, value, controlType) {

            if (controlType == jqCards.controlType.DropDownList)
                setDropDownListValue(element, value);

            else if (controlType == jqCards.controlType.InputCheckbox)
                setInputCheckboxValue(element, value);

            else if (controlType == jqCards.controlType.InputHidden)
                setInputHiddenValue(element, value);

            else if (controlType == jqCards.controlType.InputRadio)
                setInputRadioValue(element, value);

            else if (controlType == jqCards.controlType.InputText)
                setInputTextValue(element, value);

            else if (controlType == jqCards.controlType.Image)
                setImagenValue(element, value);

            else if (controlType == "" || controlType == jqCards.controlType.Text)
                setElementText(element, value);

            else if (controlType == jqCards.controlType.DxDropDownList)
                setDxDropDownListValue(element, value);
        }

        function setImagenValue(element, value) {

            if (element.length > 0)
                element.attr("src", value);
        }

        function setElementText(element, value) {

            if (element.length > 0)
                element.text(value);
        }

        function setDropDownListValue(element, value) {

            if (element.length > 0)
                element.val(value);
        }

        function setInputTextValue(element, value) {

            if (element.length > 0)
                element.val(value);
        }

        function setInputCheckboxValue(element, value) {

            if (element.length > 0)
                element.attr("checked", value);
        }

        function setInputDateValue(element, value) {

            if (element.length > 0)
                element.val(value);
        }

        function setInputHiddenValue(element, value) {

            if (element.length > 0)
                element.val(value);
        }

        function setInputRadioValue(element, value) {

            if (element.length > 0)
                element.attr("checked", value);
        }

        function setDxDropDownListValue(element, value) {

            if (element.length > 0)
                element.dxSelectBox('option', 'value', value);
        }

        function createIdCard(idParent, index) {

            if (idParent != null && idParent != undefined && idParent != "")
                return idParent + '_card' + '_' + index;
            else
                return 'card' + '_' + index;
        }

        function getControlType(element) {

            var tagName = element.prop("nodeName");

            switch (tagName) {
                case "INPUT":
                    var typeInput = element.attr('type');
                    return getInputType(typeInput);
                    break;
                case "SELECT":
                    return jqCards.controlType.DropDownList;
                    break;
                case "IMG":
                    return jqCards.controlType.Image;
                    break;
                case "DIV":
                case "P":
                case "SPAN":
                    return jqCards.controlType.Text;
                    break;
                default:
                    return jqCards.controlType.Text;
                    break;
            }
        }

        function IsInViewport(el) {
            if (typeof jQuery === "function" && el instanceof jQuery) el = el[0];
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        function getInputType(typeInput) {
            switch (typeInput) {
                case "text":
                    return jqCards.controlType.InputText;
                    break;
                case "checkbox":
                    return jqCards.controlType.InputCheckbox;
                    break;
                case "hidden":
                    return jqCards.controlType.InputHidden;
                    break;
                case "radio":
                    return jqCards.controlType.InputRadio;
                    break;
                default:
                    return jqCards.controlType.InputText;
                    break;
            }
        }

        //---------------------------------------------------------------------------------------------------------------------------------------

    };

})(jQuery);
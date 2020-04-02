$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "家庭");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-living" id="default-temp-living"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-bed" id="default-temp-bed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-brightness-bed" id="default-brightness-bed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light" id="default-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light-bed" id="default-light-bed"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light-stairs" id="default-light-stairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-temp-living"] = new basedisplay("default-temp-living", "", "blue", {'widget_type': 'basedisplay', 'entity': 'sensor.temperature_and_humidity_sensor_31b0_temperature', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '客厅温度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'container_style': ''}, 'css': {'value_style': '', 'text_style': 'color: #fff;', 'unit_style': ''}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-temp-bed"] = new basedisplay("default-temp-bed", "", "blue", {'widget_type': 'basedisplay', 'entity': 'sensor.temperature_and_humidity_sensor_ead2_temperature', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '卧室温度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'container_style': ''}, 'css': {'value_style': '', 'text_style': 'color: #fff;', 'unit_style': ''}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-brightness-bed"] = new basedisplay("default-brightness-bed", "", "blue", {'widget_type': 'basedisplay', 'entity': 'sensor.light_detection_sensor_59a0_light_level', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '客厅亮度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color: rgba(0,0,0,0.4);', 'container_style': ''}, 'css': {'value_style': '', 'text_style': 'color: #fff;', 'unit_style': ''}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light"] = new baseswitch("default-light", "", "blue", {'widget_type': 'baseswitch', 'entity': 'switch.outlet_382c', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.outlet_382c'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.outlet_382c'}, 'fields': {'title': '客厅灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffaa00;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-bed"] = new baseswitch("default-light-bed", "", "blue", {'widget_type': 'baseswitch', 'entity': 'switch.outlet_4004', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.outlet_4004'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.outlet_4004'}, 'fields': {'title': '卧室灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffaa00;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-stairs"] = new baseswitch("default-light-stairs", "", "blue", {'widget_type': 'baseswitch', 'entity': 'light.zou_lang_deng_3', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.zou_lang_deng_3'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.zou_lang_deng_3'}, 'fields': {'title': '走廊灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffaa00;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "blue", {'widget_type': 'basejavascript', 'fields': {'title': '总控开关', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-home'}, 'static_css': {'title_style': 'color: #fff;font-weight: 400;', 'title2_style': 'color: #fff;font-weight: 400;', 'widget_style': 'background-color: rgba(0,0,0,0.4);'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': [], 'icon_inactive': 'fa-home', 'dashboard': 'Main', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events

    
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    

    ha_status(stream_url, "家庭", widgets, "ws");

});
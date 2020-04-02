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
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-myweather" id="default-myweather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}" style="height: 98px;"></h1><div data-bind="attr: {style: main_style}"><p class="primary-climacon" data-bind="css: icon"></p><p class="primary-info" data-bind="text: temperature"></p><p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br></div><div data-bind="attr: {style: sub_style}"><p class="secondary-detail" data-bind="visible: apparent_temperature"><span class="secondary-icon mdi mdi-thermometer-lines" title="Apparent Temp" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Apparent Temp:&nbsp;</span><span class="secondary-info" data-bind="html: apparent_temperature"></span><span class="secondary-info" data-bind="html: unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: humidity"><span class="secondary-icon mdi mdi-water-percent" title="Humidity" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Humidity:&nbsp;</span><span class="secondary-info" data-bind="text: humidity"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></p><p class="secondary-detail"><span class="secondary-info" data-bind="text: summary">sensor.dark_sky_summary</span></p><br><p class="secondary-detail"  data-bind="visible: precip_probability() || precip_intensity()"><span data-bind="visible: precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: precip_probability"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">%</span></span><span data-bind="visible: precip_intensity"><span class="secondary-info" data-bind="visible: precip_intensity() && precip_probability()">&nbsp;/&nbsp;</span><span class="secondary-info" data-bind="text: precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p><p class="secondary-detail" data-bind="visible: wind_speed"><span class="secondary-icon mdi mdi-weather-windy" data-bind="visible: prefer_icons, css: bearing_icon, attr: {title: wind_bearing() + \'&deg;\'}"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Wind:&nbsp;</span><span class="secondary-info" data-bind="text: wind_speed"></span><span class="secondary-unit" data-bind="text: wind_unit, attr: {style: sub_unit_style}"></span></p><p class="secondary-detail" data-bind="visible: wind_bearing() && !prefer_icons()"><span class="secondary-info" data-bind="html: wind_bearing"></span><span class="secondary-unit" data-bind="attr: {style: sub_unit_style}">&deg;</span></p><p class="secondary-detail" data-bind="visible: pressure() != \'\'"><span class="secondary-icon mdi mdi-gauge" data-bind="visible: prefer_icons"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Pressure:&nbsp;</span><span class="secondary-info" data-bind="text: pressure"></span><span class="secondary-info" data-bind="text: pressure_unit, attr: {style: sub_unit_style}"></span></p><div data-bind="visible: show_forecast"> <hr style="margin: 0;"><h1 data-bind="text: forecast_title, attr:{ style: title_style}, visible: show_forecast"></h1><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-climacon" data-bind="css: forecast_icon"></span></p><p class="secondary-detail" data-bind="visible: forecast_temperature_min"><span class="secondary-info" data-bind="text: forecast_temperature_min"></span><span class="secondary-info"></span><span class="secondary-info" data-bind="visible: forecast_temperature_max"><span>/</span><span class="secondary-info" data-bind="text: forecast_temperature_max"></span></span></p><p class="secondary-detail" data-bind="visible: forecast_precip_probability"><span class="secondary-icon mdi" title="Rain" data-bind="visible: prefer_icons, css: forecast_precip_type_icon"></span><span class="secondary-info" data-bind="visible: !prefer_icons()">Rain:&nbsp;</span><span class="secondary-info" data-bind="text: forecast_precip_probability"></span> <span class="secondary-icon" data-bind="attr: {style: sub_unit_style}">%</span><span ></span> / </span><span class="secondary-info" data-bind="text: forecast_precip_intensity"></span><span class="secondary-unit" data-bind="text: rain_unit, attr: {style: sub_unit_style}"></span></span></p></div></div></div></li>', 3, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-living" id="default-temp-living"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-temp-bed" id="default-temp-bed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-brightness-bed" id="default-brightness-bed"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit" data-bind="attr:{ style: container_style}"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light" id="default-light"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light-bed" id="default-light-bed"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-light-stairs" id="default-light-stairs"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 3, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basejavascript-default-load-main-panel" id="default-load-main-panel"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 1, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-myweather"] = new baseweather("default-myweather", "", "test", {'widget_type': 'baseweather', 'fields': {'title': '', 'show_forecast': 1, 'prefer_icons': 1, 'unit': '', 'wind_unit': '', 'pressure_unit': '', 'rain_unit': '', 'temperature': '', 'humidity': '', 'summary': '', 'precip_probability': '', 'precip_intensity': '', 'precip_type': '', 'wind_speed': '', 'pressure': '', 'wind_bearing': '', 'apparent_temperature': '', 'icon': '', 'bearing_icon': 'mdi-rotate-0', 'precip_type_icon': 'mdi-umbrella', 'forecast_title': '', 'forecast_temperature_min': '', 'forecast_temperature_max': '', 'forecast_icon': '', 'forecast_precip_intensity': '', 'forecast_precip_probability': '', 'forecast_precip_type': '', 'forecast_precip_type_icon': 'mdi-umbrella'}, 'entities': {'icon': 'sensor.dark_sky_icon', 'forecast_icon': 'sensor.dark_sky_icon_1d', 'temperature': 'sensor.dark_sky_temperature', 'apparent_temperature': 'sensor.dark_sky_apparent_temperature', 'humidity': 'sensor.dark_sky_humidity', 'summary': 'sensor.dark_sky_summary', 'precip_probability': 'sensor.dark_sky_precip_probability', 'precip_intensity': 'sensor.dark_sky_precip_intensity', 'precip_type': 'sensor.dark_sky_precip', 'pressure': 'sensor.dark_sky_pressure', 'wind_speed': 'sensor.dark_sky_wind_speed', 'wind_bearing': 'sensor.dark_sky_wind_bearing', 'forecast_precip_type': 'sensor.dark_sky_precip_1d', 'forecast_temperature_min': 'sensor.dark_sky_daily_low_temperature_1d', 'forecast_temperature_max': 'sensor.dark_sky_daily_high_temperature_1d', 'forecast_precip_probability': 'sensor.dark_sky_precip_probability_1d', 'forecast_precip_intensity': 'sensor.dark_sky_precip_intensity_1d'}, 'css': {}, 'static_css': {'title_style': 'color: var(--color);', 'unit_style': 'color: #ffffff;', 'main_style': 'color: white;hight:98px;', 'sub_style': 'color: var(--color);', 'sub_unit_style': 'color: var(--color);', 'widget_style': 'background-color:var(--background-color);color: #00aaff;'}, 'icons': {'snow': 'mdi-snowflake', 'rain': 'mdi-umbrella', 'sleet': 'mdi-weather-snowy-rainy', 'unknown': 'mdi-umbrella'}, 'static_icons': [], 'title': '', 'show_forecast': 1, 'prefer_icons': 1, 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-temp-living"] = new basedisplay("default-temp-living", "", "test", {'widget_type': 'basedisplay', 'entity': 'sensor.temperature_and_humidity_sensor_31b0_temperature', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '客厅温度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color:var(--background-color);color: #00aaff;', 'container_style': ''}, 'css': {'value_style': 'font-size: 250%;color:white;', 'text_style': 'font-size: 100%;', 'unit_style': 'font-size: 90%;color:white;margin-left:0;margin-top:0;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-temp-bed"] = new basedisplay("default-temp-bed", "", "test", {'widget_type': 'basedisplay', 'entity': 'sensor.temperature_and_humidity_sensor_ead2_temperature', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '卧室温度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color:var(--background-color);color: #00aaff;', 'container_style': ''}, 'css': {'value_style': 'font-size: 250%;color:white;', 'text_style': 'font-size: 100%;', 'unit_style': 'font-size: 90%;color:white;margin-left:0;margin-top:0;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-brightness-bed"] = new basedisplay("default-brightness-bed", "", "test", {'widget_type': 'basedisplay', 'entity': 'sensor.light_detection_sensor_59a0_light_level', 'entity_to_sub_entity_attribute': '', 'sub_entity': '', 'sub_entity_to_entity_attribute': '', 'fields': {'title': '客厅亮度', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': '', 'widget_style': 'background-color:var(--background-color);color: #00aaff;', 'container_style': ''}, 'css': {'value_style': 'font-size: 250%;color:white;', 'text_style': 'font-size: 100%;', 'unit_style': 'font-size: 90%;color:white;margin-left:0;margin-top:0;'}, 'icons': [], 'static_icons': [], 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light"] = new baseswitch("default-light", "", "test", {'widget_type': 'baseswitch', 'entity': 'switch.outlet_382c', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.outlet_382c'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.outlet_382c'}, 'fields': {'title': '客厅灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffcc09;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': 'color: #ffffff;', 'widget_style': 'background-color:var(--background-color);color: #00aaff;'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-bed"] = new baseswitch("default-light-bed", "", "test", {'widget_type': 'baseswitch', 'entity': 'switch.outlet_4004', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.outlet_4004'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.outlet_4004'}, 'fields': {'title': '卧室灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffcc09;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': 'color: #ffffff;', 'widget_style': 'background-color:var(--background-color);color: #00aaff;'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-light-stairs"] = new baseswitch("default-light-stairs", "", "test", {'widget_type': 'baseswitch', 'entity': 'light.zou_lang_deng_3', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.zou_lang_deng_3'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.zou_lang_deng_3'}, 'fields': {'title': '走廊灯', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #ffcc09;', 'icon_style_inactive': 'color: antiquewhite;'}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'state_text_style': 'color: #ffffff;', 'widget_style': 'background-color:var(--background-color);color: #00aaff;'}, 'icon_on': 'mdi-white-balance-incandescent', 'icon_off': 'mdi-white-balance-incandescent', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    
        widgets["default-load-main-panel"] = new basejavascript("default-load-main-panel", "", "test", {'widget_type': 'basejavascript', 'fields': {'title': '', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'mdi-server'}, 'static_css': {'title_style': 'color: #ffffff;font-weight: 800;margin-top:6px;', 'title2_style': 'color: #ffffff;font-weight: 400;', 'widget_style': 'background-color:var(--background-color);color: #00aaff;'}, 'css': {'icon_active_style': 'color: #ffffff； top：0;', 'icon_inactive_style': 'color: #ffffff;'}, 'static_icons': [], 'icon_inactive': 'mdi-server', 'dashboard': 'System', 'icon_style_inactive': 'color: black;', 'use_comma': 0, 'precision': 1, 'use_hass_icon': 1, 'namespace': 'default'})
    

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
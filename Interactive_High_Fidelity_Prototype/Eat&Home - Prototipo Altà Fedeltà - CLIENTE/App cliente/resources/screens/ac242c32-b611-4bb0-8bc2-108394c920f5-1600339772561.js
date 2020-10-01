jQuery("#simulation")
  .on("click", ".s-ac242c32-b611-4bb0-8bc2-108394c920f5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-search")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac242c32-b611-4bb0-8bc2-108394c920f5 #s-search > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  },{
                    "#s-ac242c32-b611-4bb0-8bc2-108394c920f5 #s-search": {
                      "attributes-ie": {
                        "-pie-background": "#999999",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ac242c32-b611-4bb0-8bc2-108394c920f5 #s-search > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  },{
                    "#s-ac242c32-b611-4bb0-8bc2-108394c920f5 #s-search": {
                      "attributes-ie": {
                        "-pie-background": "#282828",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_81")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7d7b080a-a163-4c13-9d0a-11f04c395989"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_80")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/759e0238-74d5-4586-948b-9f46fc7320ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });
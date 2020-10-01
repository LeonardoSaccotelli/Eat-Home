jQuery("#simulation")
  .on("click", ".s-3133cbe6-4010-4427-b1df-207cba63ea32 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/53832c10-2dc9-436c-920d-71ada2ce3122",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
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
    } else if(jFirer.is("#s-Option_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_primary" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Option_1",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F4F5F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8",
                        "-pie-background": "#F4F5F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Option_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_primary" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Option_2",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F4F5F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8",
                        "-pie-background": "#F4F5F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Option_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_primary" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Option_3",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F4F5F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8",
                        "-pie-background": "#F4F5F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Option_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_primary" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Option_4",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F4F5F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8",
                        "-pie-background": "#F4F5F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Option_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Button_primary" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Option_5",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#F4F5F7",
                        "background-attachment": "scroll",
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#F5F6F8",
                        "border-right-color": "#F5F6F8",
                        "border-bottom-color": "#F5F6F8",
                        "border-left-color": "#F5F6F8",
                        "-pie-background": "#F4F5F7",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Button_primary")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FFFFFF",
                        "background-attachment": "scroll",
                        "border-top-color": "#0165FF",
                        "border-right-color": "#0165FF",
                        "border-bottom-color": "#0165FF",
                        "border-left-color": "#0165FF"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary span": {
                      "attributes": {
                        "color": "#8993A4"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#0165FF",
                        "border-right-color": "#0165FF",
                        "border-bottom-color": "#0165FF",
                        "border-left-color": "#0165FF",
                        "-pie-background": "#FFFFFF",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Chevron")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Dropmenu" ],
                    "effect": {
                      "type": "slide",
                      "easing": "swing",
                      "duration": 500,
                      "direction": "up"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0165FF",
                        "border-right-color": "#0165FF",
                        "border-bottom-color": "#0165FF",
                        "border-left-color": "#0165FF"
                      }
                    }
                  },{
                    "#s-3133cbe6-4010-4427-b1df-207cba63ea32 #s-Button_primary": {
                      "attributes-ie": {
                        "border-top-color": "#0165FF",
                        "border-right-color": "#0165FF",
                        "border-bottom-color": "#0165FF",
                        "border-left-color": "#0165FF"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Chevron" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 500
                    }
                  },
                  "exectype": "parallel",
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/91242e48-ccc4-4872-b1fa-9ca816e3af85",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
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
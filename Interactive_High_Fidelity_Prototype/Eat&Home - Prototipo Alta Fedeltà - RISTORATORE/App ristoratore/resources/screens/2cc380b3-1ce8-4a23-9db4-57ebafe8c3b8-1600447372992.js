jQuery("#simulation")
  .on("click", ".s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 .click", function(event, data) {
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
                    "target": "screens/06c95ddc-2e58-49af-9ee2-504129e5d199",
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
    } else if(jFirer.is("#s-Option_6")) {
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
                      "target": "#s-Option_6",
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#505F79"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary span": {
                      "attributes": {
                        "color": "#8993A4"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0165FF",
                        "border-right-color": "#0165FF",
                        "border-bottom-color": "#0165FF",
                        "border-left-color": "#0165FF"
                      }
                    }
                  },{
                    "#s-2cc380b3-1ce8-4a23-9db4-57ebafe8c3b8 #s-Button_primary": {
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
                    "target": "screens/120a2592-2b8b-4619-a407-7389801bad8c"
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
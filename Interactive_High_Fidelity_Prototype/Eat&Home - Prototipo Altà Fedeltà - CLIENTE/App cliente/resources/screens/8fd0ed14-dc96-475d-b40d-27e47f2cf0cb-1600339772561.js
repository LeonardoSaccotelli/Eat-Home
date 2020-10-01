jQuery("#simulation")
  .on("click", ".s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/3d04ee57-ba45-4d73-af78-41e135873ccc"
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
    } else if(jFirer.is("#s-Image_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/f4e3b905-39cf-4674-bd45-6dae6a197b9d",
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
    } else if(jFirer.is("#s-Label_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/df6616c1-0312-4dd5-b789-602b7ecb21ee"
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
    } else if(jFirer.is("#s-Label_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-Label_41 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-Label_42 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-Label_40 span": {
                      "attributes": {
                        "color": "#B2B2B2"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-Label_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7310ee6f-c85c-4d3e-8706-d73fb3a130f3"
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
    } else if(jFirer.is("#s-star-1_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_10 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-star-1_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_10 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-star-1_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_10 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-star-1_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_10 > svg": {
                      "attributes": {
                        "overlay": "#CCCCCC"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-star-1_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_10 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
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
    } else if(jFirer.is("#s-star-1_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_8 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_7 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_11 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_9 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  },{
                    "#s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb #s-star-1_6 > svg": {
                      "attributes": {
                        "overlay": "#FACA51"
                      }
                    }
                  } ],
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
  })
  .on("focusin", ".s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Line_8" ],
                    "effect": {
                      "type": "slide",
                      "easing": "linear",
                      "duration": 200,
                      "direction": "left"
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
  })
  .on("focusout", ".s-8fd0ed14-dc96-475d-b40d-27e47f2cf0cb .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Line_8" ]
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
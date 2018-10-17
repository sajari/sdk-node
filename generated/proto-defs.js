/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/light"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/light"));

})(this, function($protobuf) {
    "use strict";

    var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
    .addJSON({
      sajari: {
        nested: {
          api: {
            nested: {
              pipeline: {
                nested: {
                  v1: {
                    nested: {
                      QueryControl: {
                        methods: {
                          Create: {
                            requestType: "CreateQueryRequest",
                            responseType: "CreateQueryResponse"
                          },
                          Delete: {
                            requestType: "DeleteQueryRequest",
                            responseType: "DeleteQueryResponse"
                          },
                          List: {
                            requestType: "ListQueryRequest",
                            responseType: "ListQueryResponse"
                          },
                          ListSteps: {
                            requestType: "ListStepsRequest",
                            responseType: "ListStepsResponse"
                          },
                          GetStep: {
                            requestType: "GetStepRequest",
                            responseType: "GetStepResponse"
                          }
                        }
                      },
                      ListQueryRequest: {
                        fields: {}
                      },
                      ListQueryResponse: {
                        fields: {
                          pipelines: {
                            rule: "repeated",
                            type: "Pipeline",
                            id: 1
                          }
                        }
                      },
                      CreateQueryRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          steps: {
                            rule: "repeated",
                            type: "CreateStep",
                            id: 2
                          }
                        }
                      },
                      CreateQueryResponse: {
                        fields: {}
                      },
                      DeleteQueryRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          }
                        }
                      },
                      DeleteQueryResponse: {
                        fields: {}
                      },
                      RecordControl: {
                        methods: {
                          Create: {
                            requestType: "CreateRecordRequest",
                            responseType: "CreateRecordResponse"
                          },
                          Delete: {
                            requestType: "DeleteRecordRequest",
                            responseType: "DeleteRecordResponse"
                          },
                          ListSteps: {
                            requestType: "ListStepsRequest",
                            responseType: "ListStepsResponse"
                          },
                          GetStep: {
                            requestType: "GetStepRequest",
                            responseType: "GetStepResponse"
                          }
                        }
                      },
                      ListRecordRequest: {
                        fields: {}
                      },
                      ListRecordResponse: {
                        fields: {
                          pipelines: {
                            rule: "repeated",
                            type: "Pipeline",
                            id: 1
                          }
                        }
                      },
                      CreateRecordRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          preSteps: {
                            rule: "repeated",
                            type: "CreateStep",
                            id: 2
                          },
                          postSteps: {
                            rule: "repeated",
                            type: "CreateStep",
                            id: 3
                          }
                        }
                      },
                      CreateRecordResponse: {
                        fields: {}
                      },
                      DeleteRecordRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          }
                        }
                      },
                      DeleteRecordResponse: {
                        fields: {}
                      },
                      CreateStep: {
                        fields: {
                          identifier: {
                            type: "string",
                            id: 1
                          },
                          name: {
                            type: "string",
                            id: 2
                          },
                          description: {
                            type: "string",
                            id: 3
                          },
                          paramOpts: {
                            keyType: "string",
                            type: "ParamOpts",
                            id: 4
                          },
                          constOpts: {
                            keyType: "string",
                            type: "ConstOpts",
                            id: 5
                          }
                        },
                        nested: {
                          ParamOpts: {
                            fields: {
                              opts: {
                                rule: "repeated",
                                type: "ParamOpt",
                                id: 1
                              }
                            },
                            nested: {
                              ParamOpt: {
                                oneofs: {
                                  opt: {
                                    oneof: [
                                      "setName",
                                      "setDescription",
                                      "setDefaultValue"
                                    ]
                                  }
                                },
                                fields: {
                                  setName: {
                                    type: "string",
                                    id: 1
                                  },
                                  setDescription: {
                                    type: "string",
                                    id: 2
                                  },
                                  setDefaultValue: {
                                    type: "string",
                                    id: 3
                                  }
                                }
                              }
                            }
                          },
                          ConstOpts: {
                            fields: {
                              opts: {
                                rule: "repeated",
                                type: "ConstOpt",
                                id: 1
                              }
                            },
                            nested: {
                              ConstOpt: {
                                oneofs: {
                                  opt: {
                                    oneof: [
                                      "setValue"
                                    ]
                                  }
                                },
                                fields: {
                                  setValue: {
                                    type: "string",
                                    id: 3
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ListStepsRequest: {
                        fields: {}
                      },
                      ListStepsResponse: {
                        fields: {
                          steps: {
                            rule: "repeated",
                            type: "Step",
                            id: 1
                          }
                        },
                        nested: {
                          Step: {
                            fields: {
                              identifier: {
                                type: "string",
                                id: 1
                              },
                              name: {
                                type: "string",
                                id: 2
                              },
                              description: {
                                type: "string",
                                id: 3
                              }
                            }
                          }
                        }
                      },
                      GetStepRequest: {
                        fields: {
                          identifier: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      GetStepResponse: {
                        fields: {
                          identifier: {
                            type: "string",
                            id: 1
                          },
                          name: {
                            type: "string",
                            id: 2
                          },
                          description: {
                            type: "string",
                            id: 3
                          },
                          inputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 4
                          },
                          outputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 5
                          },
                          constants: {
                            rule: "repeated",
                            type: "Constant",
                            id: 6
                          }
                        },
                        nested: {
                          Constant: {
                            fields: {
                              id: {
                                type: "string",
                                id: 1
                              },
                              type: {
                                type: "string",
                                id: 2
                              },
                              description: {
                                type: "string",
                                id: 3
                              },
                              defaultValue: {
                                type: "string",
                                id: 4
                              }
                            }
                          },
                          Parameter: {
                            fields: {
                              id: {
                                type: "string",
                                id: 1
                              },
                              name: {
                                type: "string",
                                id: 2
                              },
                              type: {
                                type: "string",
                                id: 3
                              },
                              description: {
                                type: "string",
                                id: 4
                              },
                              defaultValue: {
                                type: "string",
                                id: 5
                              }
                            }
                          }
                        }
                      },
                      Pipeline: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          description: {
                            type: "string",
                            id: 2
                          },
                          version: {
                            type: "string",
                            id: 3
                          }
                        }
                      },
                      Query: {
                        methods: {
                          Search: {
                            requestType: "SearchRequest",
                            responseType: "SearchResponse"
                          },
                          Usage: {
                            requestType: "UsageRequest",
                            responseType: "QueryUsageResponse"
                          }
                        }
                      },
                      SearchRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          values: {
                            keyType: "string",
                            type: "string",
                            id: 2
                          },
                          tracking: {
                            type: "sajari.api.query.v1.SearchRequest.Tracking",
                            id: 3
                          }
                        }
                      },
                      SearchResponse: {
                        fields: {
                          values: {
                            keyType: "string",
                            type: "string",
                            id: 1
                          },
                          searchResponse: {
                            type: "engine.query.v1.SearchResponse",
                            id: 2
                          },
                          tokens: {
                            rule: "repeated",
                            type: "sajari.api.query.v1.Token",
                            id: 3
                          }
                        }
                      },
                      UsageRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          }
                        }
                      },
                      QueryUsageResponse: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          steps: {
                            rule: "repeated",
                            type: "Step",
                            id: 2
                          },
                          inputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 3
                          },
                          outputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 4
                          }
                        }
                      },
                      RecordUsageResponse: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          preSteps: {
                            rule: "repeated",
                            type: "Step",
                            id: 2
                          },
                          postSteps: {
                            rule: "repeated",
                            type: "Step",
                            id: 3
                          },
                          inputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 4
                          },
                          outputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 5
                          }
                        }
                      },
                      Parameter: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          type: {
                            type: "string",
                            id: 2
                          },
                          description: {
                            type: "string",
                            id: 3
                          },
                          defaultValue: {
                            type: "string",
                            id: 4
                          }
                        }
                      },
                      Constant: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          type: {
                            type: "string",
                            id: 2
                          },
                          description: {
                            type: "string",
                            id: 3
                          },
                          value: {
                            type: "string",
                            id: 4
                          }
                        }
                      },
                      Step: {
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          description: {
                            type: "string",
                            id: 2
                          },
                          inputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 3
                          },
                          outputs: {
                            rule: "repeated",
                            type: "Parameter",
                            id: 4
                          },
                          constants: {
                            rule: "repeated",
                            type: "Constant",
                            id: 5
                          }
                        }
                      },
                      Store: {
                        methods: {
                          Add: {
                            requestType: "AddRequest",
                            responseType: "AddResponse"
                          },
                          Usage: {
                            requestType: "UsageRequest",
                            responseType: "RecordUsageResponse"
                          }
                        }
                      },
                      AddRequest: {
                        fields: {
                          pipeline: {
                            type: "Pipeline",
                            id: 1
                          },
                          values: {
                            keyType: "string",
                            type: "string",
                            id: 2
                          },
                          records: {
                            rule: "repeated",
                            type: "sajari.engine.store.record.Record",
                            id: 3
                          }
                        }
                      },
                      AddResponse: {
                        fields: {
                          response: {
                            type: "sajari.engine.store.record.AddResponse",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              },
              query: {
                nested: {
                  v1: {
                    nested: {
                      Query: {
                        methods: {
                          Search: {
                            requestType: "SearchRequest",
                            responseType: "SearchResponse"
                          },
                          Analyse: {
                            requestType: "AnalyseRequest",
                            responseType: "AnalyseResponse"
                          }
                        }
                      },
                      SearchRequest: {
                        fields: {
                          searchRequest: {
                            type: "engine.query.v1.SearchRequest",
                            id: 1
                          },
                          tracking: {
                            type: "Tracking",
                            id: 4
                          },
                          transforms: {
                            rule: "repeated",
                            type: "Transform",
                            id: 5
                          }
                        },
                        nested: {
                          Tracking: {
                            fields: {
                              type: {
                                type: "Type",
                                id: 1
                              },
                              queryId: {
                                type: "string",
                                id: 2
                              },
                              sequence: {
                                type: "int32",
                                id: 3
                              },
                              field: {
                                type: "string",
                                id: 4
                              },
                              data: {
                                keyType: "string",
                                type: "string",
                                id: 5
                              }
                            },
                            nested: {
                              Type: {
                                values: {
                                  NONE: 0,
                                  CLICK: 1,
                                  POS_NEG: 2
                                }
                              }
                            }
                          }
                        }
                      },
                      SearchResponse: {
                        fields: {
                          searchResponse: {
                            type: "engine.query.v1.SearchResponse",
                            id: 1
                          },
                          searchRequest: {
                            type: "engine.query.v1.SearchRequest",
                            id: 2
                          },
                          tokens: {
                            rule: "repeated",
                            type: "Token",
                            id: 3
                          }
                        }
                      },
                      Token: {
                        oneofs: {
                          token: {
                            oneof: [
                              "click",
                              "posNeg"
                            ]
                          }
                        },
                        fields: {
                          click: {
                            type: "Click",
                            id: 1
                          },
                          posNeg: {
                            type: "PosNeg",
                            id: 2
                          }
                        },
                        nested: {
                          Click: {
                            fields: {
                              token: {
                                type: "string",
                                id: 1
                              }
                            }
                          },
                          PosNeg: {
                            fields: {
                              pos: {
                                type: "string",
                                id: 1
                              },
                              neg: {
                                type: "string",
                                id: 2
                              }
                            }
                          }
                        }
                      },
                      Transform: {
                        fields: {
                          runType: {
                            type: "RunType",
                            id: 1
                          },
                          identifier: {
                            type: "string",
                            id: 2
                          }
                        },
                        nested: {
                          RunType: {
                            values: {
                              PRE_QUERY: 0,
                              POST_NON_EMPTY: 1,
                              POST_EMPTY_PRE_RETRY: 2
                            }
                          }
                        }
                      },
                      AnalyseRequest: {
                        fields: {
                          analyseRequest: {
                            type: "engine.query.v1.AnalyseRequest",
                            id: 1
                          }
                        }
                      },
                      AnalyseResponse: {
                        fields: {
                          analyseResponse: {
                            type: "engine.query.v1.AnalyseResponse",
                            id: 1
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          engine: {
            nested: {
              query: {
                nested: {
                  v1: {
                    nested: {
                      Query: {
                        methods: {
                          Search: {
                            requestType: "SearchRequest",
                            responseType: "SearchResponse"
                          },
                          Evaluate: {
                            requestType: "EvaluateRequest",
                            responseType: "SearchResponse"
                          },
                          Substitute: {
                            requestType: "SubstituteRequest",
                            responseType: "SearchRequest"
                          },
                          Analyse: {
                            requestType: "AnalyseRequest",
                            responseType: "AnalyseResponse"
                          }
                        }
                      },
                      SearchRequest: {
                        fields: {
                          filter: {
                            type: "Filter",
                            id: 1
                          },
                          indexQuery: {
                            type: "IndexQuery",
                            id: 2
                          },
                          featureQuery: {
                            type: "FeatureQuery",
                            id: 3
                          },
                          minScoreThreshold: {
                            type: "double",
                            id: 10
                          },
                          offset: {
                            type: "int32",
                            id: 4
                          },
                          limit: {
                            type: "int32",
                            id: 5
                          },
                          fields: {
                            rule: "repeated",
                            type: "string",
                            id: 6
                          },
                          sort: {
                            rule: "repeated",
                            type: "Sort",
                            id: 7
                          },
                          aggregates: {
                            keyType: "string",
                            type: "Aggregate",
                            id: 8
                          },
                          transforms: {
                            rule: "repeated",
                            type: "Transform",
                            id: 9
                          }
                        },
                        nested: {
                          IndexQuery: {
                            fields: {
                              body: {
                                rule: "repeated",
                                type: "Body",
                                id: 1
                              },
                              terms: {
                                rule: "repeated",
                                type: "Term",
                                id: 2
                              },
                              instanceBoosts: {
                                rule: "repeated",
                                type: "InstanceBoost",
                                id: 3
                              },
                              instanceScoreMode: {
                                type: "InstanceScoreMode",
                                id: 5
                              },
                              fieldBoosts: {
                                rule: "repeated",
                                type: "FieldBoost",
                                id: 4
                              }
                            },
                            nested: {
                              InstanceScoreMode: {
                                values: {
                                  ABS: 0,
                                  MAX: 1
                                }
                              }
                            }
                          },
                          FeatureQuery: {
                            fields: {
                              fieldBoosts: {
                                rule: "repeated",
                                type: "FieldBoost",
                                id: 1
                              }
                            },
                            nested: {
                              FieldBoost: {
                                fields: {
                                  fieldBoost: {
                                    type: "sajari.engine.query.v1.FieldBoost",
                                    id: 1
                                  },
                                  value: {
                                    type: "double",
                                    id: 2
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      Transform: {
                        fields: {
                          identifier: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      Term: {
                        fields: {
                          value: {
                            type: "string",
                            id: 1
                          },
                          field: {
                            type: "string",
                            id: 2
                          },
                          pos: {
                            type: "uint32",
                            id: 3
                          },
                          neg: {
                            type: "uint32",
                            id: 4
                          },
                          weight: {
                            type: "double",
                            id: 5
                          },
                          wordOffset: {
                            type: "uint32",
                            id: 6
                          },
                          paraOffset: {
                            type: "uint32",
                            id: 7
                          }
                        }
                      },
                      EvaluateRequest: {
                        fields: {
                          searchRequest: {
                            type: "SearchRequest",
                            id: 1
                          },
                          record: {
                            keyType: "string",
                            type: "Value",
                            id: 2
                          }
                        }
                      },
                      SubstituteRequest: {
                        fields: {
                          searchRequest: {
                            type: "SearchRequest",
                            id: 1
                          },
                          record: {
                            keyType: "string",
                            type: "Value",
                            id: 2
                          }
                        }
                      },
                      Body: {
                        fields: {
                          text: {
                            type: "string",
                            id: 1
                          },
                          weight: {
                            type: "double",
                            id: 2
                          },
                          indexes: {
                            rule: "repeated",
                            type: "Index",
                            id: 3
                          }
                        },
                        nested: {
                          Index: {
                            fields: {
                              spec: {
                                type: "string",
                                id: 1
                              },
                              terms: {
                                rule: "repeated",
                                type: "Terms",
                                id: 2
                              }
                            }
                          },
                          Terms: {
                            fields: {
                              terms: {
                                rule: "repeated",
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      },
                      Aggregate: {
                        oneofs: {
                          aggregate: {
                            oneof: [
                              "metric",
                              "count",
                              "bucket",
                              "date"
                            ]
                          }
                        },
                        fields: {
                          metric: {
                            type: "Metric",
                            id: 1
                          },
                          count: {
                            type: "Count",
                            id: 2
                          },
                          bucket: {
                            type: "Bucket",
                            id: 3
                          },
                          date: {
                            type: "Date",
                            id: 4
                          }
                        },
                        nested: {
                          Metric: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              type: {
                                type: "Type",
                                id: 2
                              }
                            },
                            nested: {
                              Type: {
                                values: {
                                  AVG: 0,
                                  MIN: 1,
                                  MAX: 2,
                                  SUM: 3
                                }
                              }
                            }
                          },
                          Count: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              min: {
                                type: "int32",
                                id: 2
                              },
                              limit: {
                                type: "int32",
                                id: 3
                              }
                            }
                          },
                          Bucket: {
                            fields: {
                              buckets: {
                                rule: "repeated",
                                type: "Bucket",
                                id: 1
                              }
                            },
                            nested: {
                              Bucket: {
                                fields: {
                                  name: {
                                    type: "string",
                                    id: 1
                                  },
                                  filter: {
                                    type: "Filter",
                                    id: 2
                                  }
                                }
                              }
                            }
                          },
                          Date: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              interval: {
                                type: "Interval",
                                id: 2
                              },
                              intervalMultiple: {
                                type: "float",
                                id: 3
                              }
                            },
                            nested: {
                              Interval: {
                                values: {
                                  YEAR: 0,
                                  QUARTER: 1,
                                  MONTH: 2,
                                  WEEK: 3,
                                  DAY: 4,
                                  HOUR: 5,
                                  MINUTE: 6,
                                  SECOND: 7
                                }
                              }
                            }
                          }
                        }
                      },
                      Sort: {
                        oneofs: {
                          type: {
                            oneof: [
                              "score",
                              "queryScore",
                              "featureScore",
                              "field"
                            ]
                          }
                        },
                        fields: {
                          score: {
                            type: "bool",
                            id: 1
                          },
                          queryScore: {
                            type: "bool",
                            id: 2
                          },
                          featureScore: {
                            type: "bool",
                            id: 3
                          },
                          field: {
                            type: "string",
                            id: 4
                          },
                          order: {
                            type: "Order",
                            id: 5
                          }
                        },
                        nested: {
                          Order: {
                            values: {
                              ASC: 0,
                              DESC: 1
                            }
                          }
                        }
                      },
                      Filter: {
                        oneofs: {
                          filter: {
                            oneof: [
                              "combinator",
                              "field",
                              "geo",
                              "isNull"
                            ]
                          }
                        },
                        fields: {
                          combinator: {
                            type: "Combinator",
                            id: 1
                          },
                          field: {
                            type: "Field",
                            id: 2
                          },
                          geo: {
                            type: "Geo",
                            id: 3
                          },
                          isNull: {
                            type: "IsNull",
                            id: 4
                          }
                        },
                        nested: {
                          Field: {
                            fields: {
                              operator: {
                                type: "Operator",
                                id: 1
                              },
                              field: {
                                type: "string",
                                id: 2
                              },
                              value: {
                                type: "Value",
                                id: 3
                              }
                            },
                            nested: {
                              Operator: {
                                values: {
                                  EQUAL_TO: 0,
                                  NOT_EQUAL_TO: 1,
                                  GREATER_THAN: 2,
                                  GREATER_THAN_OR_EQUAL_TO: 3,
                                  LESS_THAN: 4,
                                  LESS_THAN_OR_EQUAL_TO: 5,
                                  CONTAINS: 6,
                                  DOES_NOT_CONTAIN: 7,
                                  HAS_SUFFIX: 8,
                                  HAS_PREFIX: 9
                                }
                              }
                            }
                          },
                          Geo: {
                            fields: {
                              fieldLat: {
                                type: "string",
                                id: 1
                              },
                              fieldLng: {
                                type: "string",
                                id: 2
                              },
                              lat: {
                                type: "double",
                                id: 3
                              },
                              lng: {
                                type: "double",
                                id: 4
                              },
                              radius: {
                                type: "double",
                                id: 5
                              },
                              region: {
                                type: "Region",
                                id: 6
                              }
                            },
                            nested: {
                              Region: {
                                values: {
                                  INSIDE: 0,
                                  OUTSIDE: 1
                                }
                              }
                            }
                          },
                          Combinator: {
                            fields: {
                              operator: {
                                type: "Operator",
                                id: 1
                              },
                              filters: {
                                rule: "repeated",
                                type: "Filter",
                                id: 2
                              }
                            },
                            nested: {
                              Operator: {
                                values: {
                                  ALL: 0,
                                  ANY: 1,
                                  ONE: 2,
                                  NONE: 3
                                }
                              }
                            }
                          },
                          IsNull: {
                            fields: {
                              Field: {
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      },
                      FieldBoost: {
                        oneofs: {
                          fieldBoost: {
                            oneof: [
                              "filter",
                              "interval",
                              "element",
                              "text",
                              "cosine"
                            ]
                          }
                        },
                        fields: {
                          filter: {
                            type: "Filter",
                            id: 1
                          },
                          interval: {
                            type: "Interval",
                            id: 2
                          },
                          element: {
                            type: "Element",
                            id: 3
                          },
                          text: {
                            type: "Text",
                            id: 4
                          },
                          cosine: {
                            type: "Cosine",
                            id: 5
                          }
                        },
                        nested: {
                          Filter: {
                            fields: {
                              filter: {
                                type: "sajari.engine.query.v1.Filter",
                                id: 1
                              },
                              value: {
                                type: "double",
                                id: 2
                              }
                            }
                          },
                          Interval: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              points: {
                                rule: "repeated",
                                type: "Point",
                                id: 2
                              },
                              extend: {
                                type: "Extension",
                                id: 3
                              },
                              NullValue: {
                                type: "double",
                                id: 4
                              }
                            },
                            nested: {
                              Point: {
                                fields: {
                                  point: {
                                    type: "double",
                                    id: 1
                                  },
                                  value: {
                                    type: "double",
                                    id: 2
                                  }
                                }
                              },
                              Extension: {
                                values: {
                                  NONE: 0,
                                  BEFORE: 1,
                                  AFTER: 2,
                                  BEFORE_AFTER: 3
                                }
                              }
                            }
                          },
                          Element: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              elts: {
                                rule: "repeated",
                                type: "string",
                                id: 3
                              }
                            }
                          },
                          Text: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              text: {
                                type: "string",
                                id: 3
                              }
                            }
                          },
                          Cosine: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              vector: {
                                rule: "repeated",
                                type: "float",
                                id: 2
                              }
                            }
                          }
                        }
                      },
                      InstanceBoost: {
                        oneofs: {
                          instanceBoost: {
                            oneof: [
                              "field",
                              "score"
                            ]
                          }
                        },
                        fields: {
                          field: {
                            type: "Field",
                            id: 1
                          },
                          score: {
                            type: "Score",
                            id: 2
                          }
                        },
                        nested: {
                          Field: {
                            fields: {
                              field: {
                                type: "string",
                                id: 1
                              },
                              spec: {
                                type: "string",
                                id: 3
                              },
                              value: {
                                type: "double",
                                id: 2
                              }
                            }
                          },
                          Score: {
                            fields: {
                              threshold: {
                                type: "double",
                                id: 1
                              },
                              minCount: {
                                type: "uint32",
                                id: 2
                              }
                            }
                          }
                        }
                      },
                      AggregateResponse: {
                        oneofs: {
                          aggregateResponse: {
                            oneof: [
                              "metric",
                              "count",
                              "buckets",
                              "date"
                            ]
                          }
                        },
                        fields: {
                          metric: {
                            type: "Metric",
                            id: 1
                          },
                          count: {
                            type: "Count",
                            id: 2
                          },
                          buckets: {
                            type: "Buckets",
                            id: 3
                          },
                          date: {
                            type: "Date",
                            id: 4
                          }
                        },
                        nested: {
                          Metric: {
                            fields: {
                              value: {
                                type: "double",
                                id: 1
                              }
                            }
                          },
                          Count: {
                            fields: {
                              counts: {
                                keyType: "string",
                                type: "int32",
                                id: 1
                              }
                            }
                          },
                          Buckets: {
                            fields: {
                              buckets: {
                                keyType: "string",
                                type: "Bucket",
                                id: 1
                              }
                            },
                            nested: {
                              Bucket: {
                                fields: {
                                  name: {
                                    type: "string",
                                    id: 1
                                  },
                                  count: {
                                    type: "int32",
                                    id: 2
                                  }
                                }
                              }
                            }
                          },
                          Date: {
                            fields: {
                              dates: {
                                keyType: "string",
                                type: "int32",
                                id: 1
                              }
                            }
                          }
                        }
                      },
                      SearchResponse: {
                        fields: {
                          reads: {
                            type: "int64",
                            id: 1
                          },
                          totalResults: {
                            type: "int64",
                            id: 2
                          },
                          time: {
                            type: "string",
                            id: 3
                          },
                          aggregates: {
                            keyType: "string",
                            type: "AggregateResponse",
                            id: 4
                          },
                          results: {
                            rule: "repeated",
                            type: "Result",
                            id: 5
                          }
                        }
                      },
                      Result: {
                        fields: {
                          values: {
                            keyType: "string",
                            type: "Value",
                            id: 1
                          },
                          score: {
                            type: "double",
                            id: 2
                          },
                          indexScore: {
                            type: "double",
                            id: 3
                          }
                        }
                      },
                      AnalyseRequest: {
                        fields: {
                          searchRequest: {
                            type: "SearchRequest",
                            id: 1
                          },
                          keys: {
                            rule: "repeated",
                            type: "sajari.engine.Key",
                            id: 2
                          }
                        }
                      },
                      AnalyseResponse: {
                        fields: {
                          terms: {
                            rule: "repeated",
                            type: "Terms",
                            id: 1
                          },
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 2
                          }
                        },
                        nested: {
                          Terms: {
                            fields: {
                              terms: {
                                rule: "repeated",
                                type: "string",
                                id: 1
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              Value: {
                oneofs: {
                  value: {
                    oneof: [
                      "null",
                      "single",
                      "repeated"
                    ]
                  }
                },
                fields: {
                  "null": {
                    type: "bool",
                    id: 1
                  },
                  single: {
                    type: "string",
                    id: 2
                  },
                  repeated: {
                    type: "Repeated",
                    id: 3
                  }
                },
                nested: {
                  Repeated: {
                    fields: {
                      values: {
                        rule: "repeated",
                        type: "string",
                        id: 1
                      }
                    }
                  }
                }
              },
              Key: {
                fields: {
                  field: {
                    type: "string",
                    id: 1
                  },
                  value: {
                    type: "sajari.engine.Value",
                    id: 2
                  }
                }
              },
              store: {
                nested: {
                  record: {
                    nested: {
                      Store: {
                        methods: {
                          Add: {
                            requestType: "Records",
                            responseType: "AddResponse"
                          },
                          Get: {
                            requestType: "Keys",
                            responseType: "GetResponse"
                          },
                          Delete: {
                            requestType: "Keys",
                            responseType: "DeleteResponse"
                          },
                          Mutate: {
                            requestType: "MutateRequest",
                            responseType: "MutateResponse"
                          },
                          Exists: {
                            requestType: "Keys",
                            responseType: "ExistsResponse"
                          }
                        }
                      },
                      ExistsResponse: {
                        fields: {
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 1
                          }
                        }
                      },
                      Score: {
                        methods: {
                          Set: {
                            requestType: "SetRequest",
                            responseType: "SetResponse"
                          },
                          Increment: {
                            requestType: "IncrementRequest",
                            responseType: "IncrementResponse"
                          }
                        }
                      },
                      Transform: {
                        fields: {
                          identifier: {
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      Record: {
                        fields: {
                          values: {
                            keyType: "string",
                            type: "sajari.engine.Value",
                            id: 1
                          },
                          valueIndexes: {
                            keyType: "string",
                            type: "ValueIndexes",
                            id: 2
                          }
                        }
                      },
                      ValueIndexes: {
                        fields: {
                          valueIndexes: {
                            rule: "repeated",
                            type: "ValueIndex",
                            id: 1
                          }
                        }
                      },
                      ValueIndex: {
                        fields: {
                          spec: {
                            type: "string",
                            id: 1
                          },
                          terms: {
                            rule: "repeated",
                            type: "Terms",
                            id: 2
                          }
                        }
                      },
                      Terms: {
                        fields: {
                          terms: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      Records: {
                        fields: {
                          records: {
                            rule: "repeated",
                            type: "Record",
                            id: 1
                          },
                          transforms: {
                            rule: "repeated",
                            type: "Transform",
                            id: 2
                          }
                        }
                      },
                      AddResponse: {
                        fields: {
                          keys: {
                            rule: "repeated",
                            type: "Key",
                            id: 1
                          },
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 2
                          }
                        }
                      },
                      GetResponse: {
                        fields: {
                          records: {
                            rule: "repeated",
                            type: "Record",
                            id: 1
                          },
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 2
                          }
                        }
                      },
                      DeleteResponse: {
                        fields: {
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 1
                          }
                        }
                      },
                      Keys: {
                        fields: {
                          keys: {
                            rule: "repeated",
                            type: "Key",
                            id: 1
                          }
                        }
                      },
                      MutateRequest: {
                        fields: {
                          recordMutations: {
                            rule: "repeated",
                            type: "RecordMutation",
                            id: 1
                          }
                        },
                        nested: {
                          RecordMutation: {
                            fields: {
                              key: {
                                type: "Key",
                                id: 1
                              },
                              fieldMutations: {
                                rule: "repeated",
                                type: "FieldMutation",
                                id: 2
                              }
                            },
                            nested: {
                              FieldMutation: {
                                oneofs: {
                                  mutation: {
                                    oneof: [
                                      "set",
                                      "increment",
                                      "append"
                                    ]
                                  }
                                },
                                fields: {
                                  field: {
                                    type: "string",
                                    id: 1
                                  },
                                  set: {
                                    type: "sajari.engine.Value",
                                    id: 2
                                  },
                                  increment: {
                                    type: "sajari.engine.Value",
                                    id: 3
                                  },
                                  append: {
                                    type: "sajari.engine.Value",
                                    id: 4
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      MutateResponse: {
                        fields: {
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 1
                          }
                        }
                      },
                      SetRequest: {
                        fields: {
                          keysScores: {
                            rule: "repeated",
                            type: "KeyScores",
                            id: 1
                          }
                        }
                      },
                      SetResponse: {
                        fields: {
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 1
                          }
                        }
                      },
                      IncrementRequest: {
                        fields: {
                          keysScores: {
                            rule: "repeated",
                            type: "KeyScores",
                            id: 1
                          }
                        }
                      },
                      IncrementResponse: {
                        fields: {
                          status: {
                            rule: "repeated",
                            type: "sajari.rpc.Status",
                            id: 1
                          }
                        }
                      },
                      KeyScores: {
                        fields: {
                          key: {
                            type: "Key",
                            id: 1
                          },
                          scores: {
                            rule: "repeated",
                            type: "Score",
                            id: 2
                          }
                        },
                        nested: {
                          Score: {
                            fields: {
                              terms: {
                                rule: "repeated",
                                type: "string",
                                id: 1
                              },
                              count: {
                                type: "int32",
                                id: 2
                              },
                              score: {
                                type: "float",
                                id: 3
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  term: {
                    nested: {
                      Term: {
                        methods: {
                          Get: {
                            requestType: "Values",
                            responseType: "Infos"
                          }
                        }
                      },
                      Values: {
                        fields: {
                          values: {
                            rule: "repeated",
                            type: "string",
                            id: 1
                          }
                        }
                      },
                      Infos: {
                        fields: {
                          infos: {
                            rule: "repeated",
                            type: "Info",
                            id: 1
                          }
                        },
                        nested: {
                          Info: {
                            fields: {
                              id: {
                                type: "uint32",
                                id: 1
                              },
                              value: {
                                type: "string",
                                id: 2
                              },
                              numDocs: {
                                type: "uint32",
                                id: 3
                              },
                              numWords: {
                                type: "uint32",
                                id: 4
                              },
                              hardcoded: {
                                type: "uint32",
                                id: 5
                              },
                              infogain: {
                                type: "uint32",
                                id: 6
                              },
                              pos: {
                                type: "uint32",
                                id: 7
                              },
                              neg: {
                                type: "uint32",
                                id: 8
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              schema: {
                nested: {
                  Schema: {
                    methods: {
                      GetFields: {
                        requestType: "sajari.rpc.Empty",
                        responseType: "Fields"
                      },
                      AddFields: {
                        requestType: "Fields",
                        responseType: "Response"
                      },
                      MutateField: {
                        requestType: "MutateFieldRequest",
                        responseType: "Response"
                      }
                    }
                  },
                  Fields: {
                    fields: {
                      fields: {
                        rule: "repeated",
                        type: "Field",
                        id: 1
                      }
                    }
                  },
                  Field: {
                    fields: {
                      id: {
                        type: "uint32",
                        id: 1
                      },
                      name: {
                        type: "string",
                        id: 2
                      },
                      description: {
                        type: "string",
                        id: 3
                      },
                      type: {
                        type: "Type",
                        id: 4
                      },
                      repeated: {
                        type: "bool",
                        id: 5
                      },
                      repeatedLen: {
                        type: "int32",
                        id: 11
                      },
                      required: {
                        type: "bool",
                        id: 6
                      },
                      store: {
                        type: "bool",
                        id: 7
                      },
                      indexed: {
                        type: "bool",
                        id: 8
                      },
                      unique: {
                        type: "bool",
                        id: 9
                      },
                      indexes: {
                        rule: "repeated",
                        type: "FieldIndex",
                        id: 10
                      }
                    },
                    nested: {
                      Type: {
                        values: {
                          STRING: 0,
                          INTEGER: 1,
                          FLOAT: 2,
                          DOUBLE: 5,
                          BOOLEAN: 3,
                          TIMESTAMP: 4
                        }
                      }
                    }
                  },
                  FieldIndex: {
                    fields: {
                      id: {
                        type: "uint32",
                        id: 1
                      },
                      spec: {
                        type: "string",
                        id: 2
                      },
                      description: {
                        type: "string",
                        id: 3
                      }
                    }
                  },
                  Response: {
                    fields: {
                      status: {
                        rule: "repeated",
                        type: "sajari.rpc.Status",
                        id: 1
                      }
                    }
                  },
                  MutateFieldRequest: {
                    fields: {
                      name: {
                        type: "string",
                        id: 1
                      },
                      mutations: {
                        rule: "repeated",
                        type: "Mutation",
                        id: 2
                      }
                    },
                    nested: {
                      Mutation: {
                        oneofs: {
                          mutation: {
                            oneof: [
                              "name",
                              "description",
                              "type",
                              "repeated",
                              "required",
                              "unique",
                              "indexed",
                              "addIndex"
                            ]
                          }
                        },
                        fields: {
                          name: {
                            type: "string",
                            id: 1
                          },
                          description: {
                            type: "string",
                            id: 2
                          },
                          type: {
                            type: "Field.Type",
                            id: 3
                          },
                          repeated: {
                            type: "bool",
                            id: 4
                          },
                          required: {
                            type: "bool",
                            id: 5
                          },
                          unique: {
                            type: "bool",
                            id: 6
                          },
                          indexed: {
                            type: "bool",
                            id: 7
                          },
                          addIndex: {
                            type: "FieldIndex",
                            id: 8
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          rpc: {
            nested: {
              Status: {
                fields: {
                  code: {
                    type: "int32",
                    id: 1
                  },
                  message: {
                    type: "string",
                    id: 2
                  }
                }
              },
              Empty: {
                fields: {}
              }
            }
          }
        }
      }
    });

    return $root;
});

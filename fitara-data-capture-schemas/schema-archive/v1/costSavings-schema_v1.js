export const costSavingsSchema_v1 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "version": 1,
    "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance",
    "name": "/",
    "title": "Realized Cost Savings and Avoidance Schema",
    "description": "Schema definition for describing the Realized Cost Savings and Avoidance data collection",
    "type": "object",
    "required": [
        "strategies"
    ],
    "properties": {
        "strategies": {
            "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies",
            "name": "strategies",
            "title": "Strategies schema",
            "description": "A list of realized cost savings and avoidance strategies for this agency",
            "type": "array",
            "minItems": 1,
            "additionalItems": false,
            "required": [
                "0"
            ],
            "items": {
                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0",
                "name": "0",
                "title": "initiative 0 schema",
                "description": "Information about a particular initiative",
                "type": "object",
                "required": [
                    "strategyId",
                    "strategyTitle",
                    "decisionDate",
                    "ombInitiative",
                    "amountType",
                    "fy2012",
                    "fy2013",
                    "fy2014",
                    "fy2015",
                    "fy2016",
                    "fy2017",
                    "fy2018",
                    "fy2019"
                ],
                "properties": {
                    "strategyId": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/strategyId",
                        "name": "stratgeyId",
                        "description": "Strategy identifier",
                        "title": "strategyId schema",
                        "type": "number",
                        "minimum": 1,
                        "maximum": 999,
                        "multipleOf": 1
                    },
                    "strategyTitle": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/strategyTitle",
                        "name": "stratgeyTitle",
                        "title": "strategyTitle schema",
                        "description": "Strategy title",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 100
                    },
                    "useOfSavingsAvoidance": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/useOfSavingsAvoidance",
                        "name": "useOfSavingsAvoidance",
                        "title": "useOfSavingsAvoidance schema",
                        "description": "Use of Savings Avoidance",
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 500
                    },
                    "decisionDate": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/decisionDate",
                        "name": "regex",
                        "title": "decisionDate schema",
                        "description": "Decision date (MM/DD/YYYY format)",
                        "type": "string",
                        "pattern": "^[0-9]{2}/[0-9]{2}/[0-9]{4}$"
                    },
                    "ombInitiative": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/ombInitiative",
                        "name": "ombInitiative",
                        "title": "ombInitiative schema",
                        "description": "OMB Initiative (Data Center, Digital Services, Commodity IT, PortfolioStat or Other)",
                        "type": "string",
                        "enum": [
                            "Data Center",
                            "Digital Services",
                            "Commodity IT",
                            "PortfolioStat",
                            "Software License Management",
                            "Other"
                        ]
                    },
                    "amountType": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/properties/amountType",
                        "name": "amountType",
                        "title": "amountType schema",
                        "description": "Amount Type (Cost-Savings, Cost-Avoidance or Both)",
                        "type": "string",
                        "enum": [
                            "Cost-Savings",
                            "Cost-Avoidance",
                            "Both"
                        ]
                    },
                    "relatedUIIs": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/relatedUIIs",
                        "name": "relatedUIIs",
                        "title": "relatedUIIs schema",
                        "description": "Related UIIs",
                        "type": "array",
                        "minItems": 1,
                        "additionalItems": false,
                        "required": [
                            "0"
                        ],
                        "items": {
                            "0": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/relatedUIIs/0",
                                "name": "0",
                                "title": "relatedUIIs 0 schema",
                                "description": "Related UII",
                                "type": "string",
                                "pattern": "^[0-9]{3}-[0-9]{9}$"
                            }
                        }
                    },
                    "fy2012": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2012",
                        "name": "fy2012",
                        "title": "fy2012 schema",
                        "description": "Fiscal Year 2012",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2012/properties/amount",
                                "name": "amount",
                                "title": "fy2012 amount schema",
                                "description": "Fiscal Year 2012 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2012/netOrGross",
                                "name": "amount",
                                "title": "fy2012 netOrGross schema",
                                "description": "Fiscal Year 2012 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2013": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2013",
                        "name": "fy2013",
                        "title": "fy2013 schema",
                        "description": "Fiscal Year 2013",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2013/properties/amount",
                                "name": "amount",
                                "title": "fy2013 amount schema",
                                "description": "Fiscal Year 2013 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2013/netOrGross",
                                "name": "amount",
                                "title": "fy2013 netOrGross schema",
                                "description": "Fiscal Year 2013 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2014": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2014",
                        "name": "fy2014",
                        "title": "fy2014 schema",
                        "description": "Fiscal Year 2014",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2014/properties/amount",
                                "name": "amount",
                                "title": "fy2014 amount schema",
                                "description": "Fiscal Year 2014 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2014/netOrGross",
                                "name": "amount",
                                "title": "fy2014 netOrGross schema",
                                "description": "Fiscal Year 2014 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2015": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2015",
                        "name": "fy2015",
                        "title": "fy2015 schema",
                        "description": "Fiscal Year 2015",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2015/properties/amount",
                                "name": "amount",
                                "title": "fy2015 amount schema",
                                "description": "Fiscal Year 2015 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2015/netOrGross",
                                "name": "amount",
                                "title": "fy2015 netOrGross schema",
                                "description": "Fiscal Year 2015 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2016": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2016",
                        "name": "fy2016",
                        "title": "fy2016 schema",
                        "description": "Fiscal Year 2016",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2016/properties/amount",
                                "name": "amount",
                                "title": "fy2016 amount schema",
                                "description": "Fiscal Year 2016 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2016/netOrGross",
                                "name": "amount",
                                "title": "fy2016 netOrGross schema",
                                "description": "Fiscal Year 2016 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2017": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2017",
                        "name": "fy2017",
                        "title": "fy2017 schema",
                        "description": "Fiscal Year 2017",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2017/properties/amount",
                                "name": "amount",
                                "title": "fy2017amount schema",
                                "description": "Fiscal Year 2017 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2017/netOrGross",
                                "name": "amount",
                                "title": "fy2017 netOrGross schema",
                                "description": "Fiscal Year 2017 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2018": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2018",
                        "name": "fy2018",
                        "title": "fy2018 schema",
                        "description": "Fiscal Year 2018",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2018/properties/amount",
                                "name": "amount",
                                "title": "fy2018amount schema",
                                "description": "Fiscal Year 2018 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2018/netOrGross",
                                "name": "amount",
                                "title": "fy2018 netOrGross schema",
                                "description": "Fiscal Year 2018 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    },
                    "fy2019": {
                        "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2019",
                        "name": "fy2019",
                        "title": "fy2019 schema",
                        "description": "Fiscal Year 2019",
                        "type": "object",
                        "required": [
                            "amount",
                            "netOrGross"
                        ],
                        "properties": {
                            "amount": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2019/properties/amount",
                                "name": "amount",
                                "title": "fy2019amount schema",
                                "description": "Fiscal Year 2019 Amount",
                                "type": "number",
                                "minimum": 0,
                                "maximum": 1000
                            },
                            "netOrGross": {
                                "id": "https://omb.max.gov/schemas/CostSavingsAndAvoidance/strategies/0/fy2019/netOrGross",
                                "name": "amount",
                                "title": "fy2019 netOrGross schema",
                                "description": "Fiscal Year 2019 Amount Type (Net or Gross)",
                                "type": "string",
                                "enum": [
                                    "Net",
                                    "Gross"
                                ]
                            }
                        }
                    }
                }
            }
        }
    }
}
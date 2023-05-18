export const fitaraMilestonesSchema_v1 = {
    "$schema":"http://json-schema.org/draft-04/schema#",
    "version":"August 2016 (v2)",
    "id":"https://management.cio.gov/schema",
    "name":"/",
    "title":"FITARA Milestones",
    "description":"Schema definition for the reporting the status of milestones implementing FITARA Common Baseline",
    "type":"object",
    "required":[
        "updatedDate"
    ],
    "properties":{
        "updatedDate":{
            "name":"regex",
            "title":"decisionDateYMD schema",
            "description":"Decision date (YYYY/MM/DD format)",
            "type":"string",
            "pattern":"^[0-9]{4}/[0-9]{2}/[0-9]{2}$"
        },
        "milestones":{
            "type":"array",
            "title":"List of milestones",
            "name":"milestones",
            "items":{
                "type":"object",
                "description":"Information about a particular milestone.",
                "required":[
                    "milestoneID",
                    "milestoneDesc",
                    "milestoneTargetCompletionDate",
                    "milestoneStatus",
                    "milestoneStatusDesc",
                    "commonBaselineArea",
                    "dcoiArea"
                ],
                "properties":{
                    "milestoneID":{
                        "type":"integer"
                    },
                    "milestoneDesc":{
                        "type":"string",
                        "maxlength":500
                    },
                    "milestoneTargetCompletionDate":{
                        "name":"regex",
                        "title":"decisionDateYMD schema",
                        "description":"Decision date (YYYY/MM/DD format)",
                        "type":"string",
                        "pattern":"^[0-9]{4}/[0-9]{2}/[0-9]{2}$"
                    },
                    "milestoneStatus":{
                        "type":"string",
                        "enum":[
                            "NotStarted",
                            "InProgress",
                            "Complete",
                            "Deferred"
                        ]
                    },
                    "milestoneStatusDesc":{
                        "type":"string",
                        "maxlength":500
                    },
                    "commonBaselineArea":{
                        "type":"string",
                        "enum":[
                            "budgetFormulation",
                            "budgetExecution",
                            "acquisition",
                            "organizationAndWorkforce",
                            "nonCommonBaseline"
                        ]
                    },
                    "dcoiArea":{
                        "type":"string",
                        "enum":[
                            "optimization",
                            "closures",
                            "costSavings",
                            "sharedServices",
                            "cloudMigration",
                            "CIOLeadership",
                            "other",
                            "nonDataCenter"
                        ]
                    }
                }
            }
        }
    }
}
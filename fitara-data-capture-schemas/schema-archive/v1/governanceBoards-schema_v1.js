export const governanceBoardsSchema_v1 = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "boards": {
            "type": "array",
            "items": [
                {
                    "type": "object",
                    "properties": {
                        "governanceBoardName": {
                            "type": "string"
                        },
                        "programCodeFPI": {
                            "type": "string"
                        },
                        "bureauCode": {
                            "type": "string"
                        },
                        "cioInvolvementDescription": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "governanceBoardName",
                        "programCodeFPI",
                        "bureauCode",
                        "cioInvolvementDescription"
                    ]
                },
                {
                    "type": "object",
                    "properties": {
                        "governanceBoardName": {
                            "type": "string"
                        },
                        "bureauCode": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "governanceBoardName",
                        "bureauCode"
                    ]
                }
            ]
        }
    },
    "required": [
        "boards"
    ]
}
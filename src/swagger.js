//SWAGGER
const path = require('path');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec =

{
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API",
            version: "1.0",
            description: "API for DAW",
            contact: {
                name: "Rafael Herrera Chavez",
                email: "r4f4ch8@gmail.com",
                url: "https://api.com"
            },
            license: {
                name: "GPLv3",
                url: "https://www.gnu.org/licenses/gpl-3.0.en.html"
            },
        },
        paths: {
            "/api/vBlanco": {
                get: {
                    summary: "Returns all vBlanco from the system that the user has access to",
                    tags: [
                        "vBlanco"
                    ],
                    responses: {
                        200: {
                            description: "A list of vBlanco.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Matarromera"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new wine",
                    tags: [
                        "vBlanco"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "Leon"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The wine was successfully created.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "Marques"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/vBlanco/{id}": {
                get: {
                    summary: "Returns a wine from the system that the user has access to",
                    tags: [
                        "vBlanco"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of wine to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A wine.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"

                                            }
                                        }, example: {
                                            "name": "Marques"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a wine from the system",
                    tags: [
                      "vBlanco"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of wine to update",
                        required: true,
                        type: "integer",
                        format: "int64"
                      }
                    ],
                    requestBody: {
                      required: true,
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              }
                            },
                            example: {
                              "name": "Marques"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated wine.",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                message: {
                                  type: "string"
                                }
                              },
                              example: {
                                "message": "wine updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a wine from the system",
                    tags: [
                        "vBlanco"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of wine to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A wine.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "wine borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },            
            "/api/vTinto": {
                get: {
                    summary: "Returns all vTinto from the system that the user has access to",
                    tags: [
                        "vTinto"
                    ],
                    responses: {
                        200: {
                            description: "A list of vTinto.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                id: {
                                                    type: "integer",
                                                    format: "int64"
                                                },
                                                name: {
                                                    type: "string"
                                                }
                                            }, example: {

                                                "id": 1,
                                                "name": "Pinna Fidelis"
                                            }
                                        }
                                    }
                                }

                            }
                        }
                    }
                },
                post: {
                    summary: "Create a new wine",
                    tags: [
                        "vTinto"
                    ],
                    requestBody: {
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        name: {
                                            type: "string"
                                        }
                                    },
                                    required: [
                                        "name"
                                    ]
                                },
                                example: {
                                    "name": "wine Pinna Fidelis"
                                }
                            }
                        },
                        required: true
                    },
                    responses: {
                        201: {
                            description: "The wine was successfully created.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            id: {
                                                type: "integer",
                                                format: "int64"
                                            },
                                            name: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "id": 11,
                                            "name": "wine Pinna Fidelis"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
            },
            "/api/vTinto/{id}": {
                get: {
                    summary: "Returns a wine from the system that the user has access to",
                    tags: [
                        "vTinto"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of wine to fetch",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A wine.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            name: {
                                                type: "string"
                                            }
                                        }, example: {
                                            "name": "Pinna Fidelis"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                put: {
                    summary: "Updates a wine from the system",
                    tags: [
                      "vTinto"
                    ],
                    parameters: [
                      {
                        name: "id",
                        in: "path",
                        description: "ID of wine to update",
                        required: true,
                        type: "integer",
                        format: "int64"
                      }
                    ],
                    requestBody: {
                      required: true,
                      content: {
                        "application/json": {
                          schema: {
                            type: "object",
                            properties: {
                              name: {
                                type: "string"
                              }
                            },
                            example: {
                              "name": "wine Pinna Fidelis"
                            }
                          }
                        }
                      }
                    },
                    responses: {
                      200: {
                        description: "A updated wine.",
                        content: {
                          "application/json": {
                            schema: {
                              type: "object",
                              properties: {
                                message: {
                                  type: "string"
                                }
                              },
                              example: {
                                "message": "wine updated"
                              }
                            }
                          }
                        }
                      }
                    }
                },
                delete: {
                    summary: "Deletes a wine from the system",
                    tags: [
                        "vTinto"
                    ],
                    parameters: [
                        {
                            name: "id",
                            in: "path",
                            description: "ID of wine to delete",
                            required: true,
                            type: "integer",
                            format: "int64"
                        }
                    ],
                    responses: {
                        200: {
                            description: "A wine.",
                            content: {
                                "application/json": {
                                    schema: {
                                        type: "object",
                                        properties: {
                                            message: {
                                                type: "string"
                                            }
                                        },
                                        example: {
                                            "message": "wine borrado"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
        },
    },
    apis: [path.join(__dirname, 'routes/*.js')]
};
const swaggerDocs = (app, port) => {

    app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
    console.log(`Swagger docs disponible en http://localhost:/api/docs`);
}

module.exports = { swaggerDocs };

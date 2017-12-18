const fs = require('fs');

const tagName = 'tag-name';
const definitionCreate = 'TagName';
const definitionResponse = `${definitionCreate}Response`;

const template = `
/**
 * @swagger
 *   tags:
 *    - name: ${tagName}
 *      description: ${tagName.toUpperCase()} crud
 */

/**
 * @swagger
 *  paths:
 *    /v1/${tagName}:
 *      post:
 *        tags:
 *          - ${tagName}
 *        summary: create ${definitionCreate.toLowerCase()}
 *        security:
 *         - Bearer: []
 *        consumes:
 *          - application/json
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: body
 *            in: body
 *            schema:
 *              $ref: '#/definitions/${definitionCreate}'
 *        responses:
 *          201:
 *            summary: resource created
 *            schema:
 *              $ref: '#/definitions/${definitionResponse}'
 *      get:
 *        summary: find ${tagName}
 *        tags:
 *          - ${tagName}
 *        security:
 *          - Bearer: []
 *        produces:
 *          - application/json
 *        consumes:
 *          - application/json
 *        parameters:
 *          - name: $limit
 *            in: query
 *          - name: $skip
 *            in: query
 *        responses:
 *          200:
 *            success: true
 *            type: object
 *            properties:
 *              total:
 *                type: integer
 *              limit:
 *                type: integer
 *              skip:
 *                type: integer
 *              data:
 *                type: array
 *                items:
 *                  $ref: '#/definitions/${definitionResponse}'
 */
/**
 * @swagger
 *  paths:
 *    /v1/${tagName}/{id}:
 *      get:
 *        summary: get ${definitionCreate.toLowerCase()}
 *        tags:
 *          - ${tagName}
 *        security:
 *          - Bearer: []
 *        parameters:
 *          - name: id
 *            in: path
 *            required: true
 *        responses:
 *          200:
 *            summary: success
 *            schema:
 *              $ref: '#/definitions/${definitionCreate}'
 *      put:
 *        summary: update ${definitionCreate.toLowerCase()}
 *        tags:
 *          - ${tagName}
 *        security:
 *          - Bearer: []
 *        consumes:
 *          - application/json
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: id
 *            in: path
 *            required: true
 *          - name: body
 *            in: body
 *            schema:
 *              $ref: '#/definitions/${definitionCreate}'
 *        responses:
 *          200:
 *            summary: success
 *            schema:
 *              $ref: '#/definitions/${definitionResponse}'
 *      patch:
 *        summary: patch ${definitionCreate.toLowerCase()}
 *        tags:
 *          - ${tagName}
 *        security:
 *          - Bearer: []
 *        consumes:
 *          - application/json
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: id
 *            in: path
 *            required: true
 *          - name: body
 *            in: body
 *            schema:
 *              $ref: '#/definitions/${definitionCreate}'
 *        responses:
 *          200:
 *            summary: success
 *            schema:
 *              $ref: '#/definitions/${definitionResponse}'
 *      delete:
 *        summary: delete ${definitionCreate.toLowerCase()}
 *        tags:
 *          - ${tagName}
 *        security:
 *          - Bearer: []
 *        consumes:
 *          - application/json
 *        produces:
 *          - application/json
 *        parameters:
 *          - name: id
 *            in: path
 *            required: true
 *        responses:
 *          200:
 *            summary: success
 *            schema:
 *              $ref: '#/definitions/${definitionResponse}'
 */
`;

fs.writeFileSync('./crud-api', template);
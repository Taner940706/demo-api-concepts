 import statelessImage from '../../src/assets/images/stateless.wepp'
 import communicatesImage from '../../src/assets/images/http.png'
 import statuscodeImage from '../../src/assets/images/statuscode.webp'
 import manipulateImage from '../../src/assets/images/manipulate-resources.png'
 import providesImage from '../../src/assets/images/hypermedia-api.webp'
 
 
 const concepts = [
    {
        title: 'Uses stateless interactions',
        image: statelessImage,
        description: 'The Relativity REST service doesnt use login sessions or store other state information on the server. Instead, the client maintains this information about each resource, which makes the REST service easier to use across load-balanced servers. For general introduction, see Representational state transfer at https://en.wikipedia.org/wiki/Representational_state_transfer.'
    },
    {
        title: 'Communicates over HTTP',
        image: communicatesImage,
        description: 'The REST service uses common HTTP methods following standard RESTful principles: GET - reads data and doesn’t change application state. POST - creates resources and queries for data using conditions. PUT - updates resources. DELETE - removes resources from the database'
    },
    {
        title: 'Uses standard HTTP status codes',
        image: statuscodeImage,
        description: 'These status codes represent the results of operations that you perform against the REST service. They are divided into these major categories: 200 - Success; 300 - Redirection; 400 - User error; 500 - Server error. See HTTP status codes. For a general introduction, see Status Code Definitions at http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html.'
    },
    {
        title: 'Manipulates resources',
        image: manipulateImage,
        description: 'The REST service represents the objects exposed in Relativity as resources. A unique URL identifies each resource so that you can manipulate it with standard HTTP methods. Other entities not generally identified as objects are also represented as resources. For example, search results are a resource that you can read or browse using paging. '
    },
    {
        title: 'Provides a hypermedia-driven API',
        image: providesImage,
        description: 'he REST API returns responses that include links to resources available in Relativity. For example, the response for a workspace query returns a list of each matching workspaces. It represents each workspace in a simplified format that contains a link to further details about the resource. '
    },

];
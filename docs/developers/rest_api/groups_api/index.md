---
sidebar_label: Groups API
sidebar_position: 6
---
# Groups API
This documentation provides a comprehensive guide on using the Groups API of the Plaspy satellite tracking system. This API is designed to facilitate the management and administration of tracked device groups, offering users the ability to interact with their group data through HTTP requests. The documentation is structured into various endpoints, each aimed at a specific functionality, enabling a clear and detailed understanding of the system's capabilities.

### Importance of the Groups API

In the realm of satellite tracking, efficiently organizing devices into groups is essential for ensuring precise and orderly monitoring. The Plaspy Groups API allows users to access detailed information about their groups, create new groups, update the details of existing groups, and delete groups that are no longer needed. These capabilities are fundamental for applications in sectors such as logistics, security, fleet management, and others where grouping and organizing devices are crucial for efficient operations.

### Overview of the Endpoints

The Plaspy Groups API includes several endpoints that cover a wide range of functionalities:

1. **[GET /api/groups](get__api_groups)**: Allows retrieving a list of all available groups in the tracking application. This endpoint is useful for obtaining detailed information about each group, including its name, description, associated devices, and other relevant details.
2. **[POST /api/groups](post__api_groups)**: Allows creating a new group within the system. This endpoint is essential for organizing devices and managing them efficiently by grouping them into logical units with a name and description.
3. **[PUT /api/groups/\{groupId\}](put__api_groups_groupid)**: Allows updating the details of an existing group. This endpoint is crucial for keeping group information up-to-date, including its name, description, and associated devices.
4. **[DELETE /api/groups/\{groupId\}](delete__api_groups_groupid)**: Allows deleting an existing group from the system. This endpoint is essential for managing and organizing groups, allowing the removal of those that are no longer necessary.
5. **[GET /api/groups/\{groupId\}](get__api_groups_groupid)**: Allows retrieving the details of a specific group using its unique identifier \(groupId\). This endpoint is useful for obtaining detailed information about a group, including its name, description, associated devices, and other relevant details.
6. **[PATCH /api/groups/\{groupId\}](patch__api_groups_groupid)**: Allows partially updating the details of an existing group using its unique identifier \(groupId\). This endpoint is useful for modifying one or several attributes of a group without the need to send all the group's data.

### Structure of Requests and Responses

Each endpoint is designed to receive and process HTTP requests, following a clear and specific structure:

- **HTTP Method**: Each endpoint uses an appropriate HTTP method \(GET, POST, PUT, DELETE, or PATCH\) according to the operation to be performed.
- **Request Parameters**: The required and optional parameters that need to be included in the URL or in the body of the request.
- **Request Body**: For endpoints that receive data \(such as POST, PUT, or PATCH\), a JSON object with the required information must be sent.
- **Response Parameters**: The details of the response, including the operation status, error messages \(if any\), and the requested information in case of success.

#### Examples of Requests and Responses

To facilitate the implementation and use of the API, the documentation includes examples of both successful and error responses. These examples are crucial for developers to understand how to structure their requests and how to interpret the system's responses.

### Conclusion

The Plaspy Groups API is a powerful tool for managing and administering tracked devices by organizing them into logical groups. This documentation is designed to provide users with all the necessary information to integrate and efficiently use the API in their systems. With a clear structure and detailed examples, this guide facilitates access to the various functionalities offered by the API, ensuring successful implementation and precise management of device groups.

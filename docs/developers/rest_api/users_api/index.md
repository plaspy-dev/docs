---
sidebar_position: 7
---
# Users API
This documentation provides a comprehensive guide on using the Users API of the Plaspy satellite tracking system. This API is designed to facilitate the management and administration of registered users in the system, offering administrators the ability to interact with user data through HTTP requests. The documentation is structured into various endpoints, each aimed at a specific functionality, enabling a clear and detailed understanding of the system's capabilities.

### Importance of the Users API

In the realm of system administration, efficient user management is essential to ensure proper control and maintain security. The Plaspy Users API allows administrators to access detailed information about users, create new users, update the details of existing users, and delete those who are no longer needed. These capabilities are fundamental for applications in sectors such as logistics, security, fleet management, and others where managing user data is crucial for efficient operations.

### Overview of the Endpoints

The Plaspy Users API includes several endpoints that cover a wide range of functionalities:

1. **[GET /api/users](../../../users_api/rest_api/developers/get__api_users)**: Allows retrieving a list of all registered users in the system. This endpoint is useful for viewing and managing user information, including details such as name, email, country, and other important attributes.
2. **[POST /api/users](../../../users_api/rest_api/developers/post__api_users)**: Allows creating a new user in the system. This endpoint is essential for adding new users, specifying various attributes such as name, email, country, and time zone.
3. **[GET /api/users/countries](../../../users_api/rest_api/developers/get__api_users_countries)**: Allows retrieving a list of all registered countries in the system with their two-digit ISO codes. This endpoint is useful for populating dropdown lists or forms where a country needs to be selected.
4. **[GET /api/users/timeZones](../../../users_api/rest_api/developers/get__api_users_timezones)**: Allows retrieving a list of all registered time zones in the system. This endpoint is useful for populating dropdown lists or forms where a time zone needs to be selected.
5. **[GET /api/users/\{userId\}](../../../users_api/rest_api/developers/get__api_users_userid)**: Allows retrieving the details of a specific user registered in the system using their unique identifier \(userId\). This endpoint is useful for user management, allowing administrators to review and manage the data of a particular user.
6. **[PUT /api/users/\{userId\}](../../../users_api/rest_api/developers/put__api_users_userid)**: Allows updating the information of a specific user. This endpoint is useful for modifying user details such as name, email, country, and time zone.
7. **[PATCH /api/users/\{userId\}](../../../users_api/rest_api/developers/patch__api_users_userid)**: Allows partially updating the information of a specific user. This endpoint is useful when only a few user fields need to be modified without sending all the data.
8. **[DELETE /api/users/\{userId\}](../../../users_api/rest_api/developers/delete__api_users_userid)**: Allows deleting a specific user from the system. This endpoint is essential for managing the removal of users who should no longer have access to the system.

### Structure of Requests and Responses

Each endpoint is designed to receive and process HTTP requests, following a clear and specific structure:

- **HTTP Method**: Each endpoint uses an appropriate HTTP method \(GET, POST, PUT, PATCH, DELETE\) according to the operation to be performed.
- **Request Parameters**: The required and optional parameters that need to be included in the URL or in the body of the request.
- **Request Body**: For endpoints that receive data \(such as POST, PUT, PATCH\), a JSON object with the required information must be sent.
- **Response Parameters**: The details of the response, including the operation status, error messages \(if any\), and the requested information in case of success.

#### Examples of Requests and Responses

To facilitate the implementation and use of the API, the documentation includes examples of both successful and error responses. These examples are crucial for developers to understand how to structure their requests and how to interpret the system's responses.

### Conclusion

The Plaspy Users API is a powerful tool for managing and administering registered users in the system. This documentation is designed to provide administrators with all the necessary information to integrate and efficiently use the API in their systems. With a clear structure and detailed examples, this guide facilitates access to the various functionalities offered by the API, ensuring successful implementation and precise management of users.

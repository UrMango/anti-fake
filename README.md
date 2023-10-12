# Fake Filter

Fake Filter is a web application, featuring a feed of posts related to the israeli situation from social media platforms that require support and promotion, as well as posts that require reporting and removal.

## Installation

To install the project, first clone the repository:

```
git clone https://github.com/UrMango/fake-filter.git
```

Then, navigate to the project directory and install the dependencies:

```
cd fake-filter
npm install
```

## Usage

To start the development server, run:

```
npm start
```

This will start the server and open the application in your default web browser.

## API Documentation

### `GET /api/posts`

Returns a list of posts.

#### Query Parameters

| Name  | Type   | Description                                     |
| ----- | ------ | ----------------------------------------------- |
| limit | number | The maximum number of posts to return (default 20) |
| skip  | number | The number of posts to skip (default 0)           |
| type  | number | The type of posts to return (default 0)           |

#### Response

```json
{
  "posts": [
    {
      "id": 1,
      "link": "https://example.com/video1",
      "isSupport": true,
      "platform": "YouTube"
    },
    {
      "id": 2,
      "link": "https://example.com/video2",
      "isSupport": false,
      "platform": "Facebook"
    }
  ],
  "count": 2
}
```

## License

This project is licensed under the [MIT License](LICENSE).
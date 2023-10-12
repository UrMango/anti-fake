# Fake Filter

Fake Filter is a web application, featuring a feed of posts related to the israeli situation from social media platforms that require support and promotion, as well as posts that require reporting and removal.

## Installation

To install the project, first clone the repository. 

Then, navigate to the project directory and install the dependencies:

```
cd fake-filter
npm install
```

## Usage

To start the development server, run:

```
npm run dev
```

This will start the server and open the application in your default web browser.

## API Documentation

### `GET /api/posts/get-posts`

Returns a list of posts.

#### Query Parameters

| Name  | Type   | Description                                     |
| ----- | ------ | ----------------------------------------------- |
| limit | number | The maximum number of posts to return (default 20) |
| skip  | number | The number of posts to skip (default 0)           |
| type  | number | The type of posts to return (default 0) 0 - all, 1 - repost, 2 - report          |

#### Response

```json
{
  "posts": [
    {
      "id": 1,
      "link": "https://example.com/video1",
      "action": "repost",
      "platform": "instagram"
    },
    {
      "id": 2,
      "link": "https://example.com/video2",
      "action": "report",
      "platform": "tiktok"
    }
  ],
  "count": 10 // The total number of posts (without considering limit, but with considering type)
}
```

## License

This project is licensed under the [MIT License](LICENSE).
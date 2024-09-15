export const MY_HEADERS = new Headers();
// MY_HEADERS.append("mode", "no-cors");
// MY_HEADERS.append("Access-Control-Allow-Origin", "*");
// Access-Control-Allow-Headers: API_KEY, api_key, Content-Type, Accept

MY_HEADERS.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
MY_HEADERS.append("Access-Control-Allow-Headers", "*")
// MY_HEADERS.append("Content-Type", "application/json")
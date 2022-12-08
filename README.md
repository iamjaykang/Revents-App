# Reactivity API

This API is a part of Reactivity app created with React TypeScript and .NET

## How to use

- run `git clone ...`
- run `cd API`
- run `dotnet run`

## API Resources

### Account API Resources

All the Account API router follows `/api/account/`

| #   | Routers                   | Verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/account/`                | GET    | DONE     | YES        | Get Account Info |
| 2   | `/api/account/register`                | POST   | DONE     | NO         | Create An Account and Validate Fields and Return JWT |
| 3   | `/api/account/login`          | POST   | DONE     | YES         | Verify User Authentication and return JWT |

### Activity API Resources

All the Activity API router follows `/api/activities/`

| #   | Routers                   | Verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/activities/`                | GET    | DONE     | YES        | Get Activities Info |
| 2   | `/api/activities/{id}`                | GET   | DONE     | YES         | Get an Activity |
| 3   | `/api/activities/`          | POST   | DONE     | YES         | Create a new Activity |
| 4   | `/api/activities/{id}` | PUT   | DONE     | YES         | Edit Activity |
| 5   | `/api/activities/{id}` | DELETE  | DONE     | YES         | Delete Activity |

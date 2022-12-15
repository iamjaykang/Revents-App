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
| 6   | `/api/activities/{id}/attend` | POST  | DONE     | YES         | Attend Activity if not Host, Remove attendance if attending as attendee, Cancel Activity as host |
### Photos API Resources

All the Photos API router follows `/api/photos/`

| #   | Routers                   | Verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/photos`| POST    | DONE     | YES        | Upload photos to Cloudinary |
| 2   | `/api/photos/{id}`| DELETE   | DONE     | YES         | Delete photos from Cloudinary |
| 3   | `/api/photos/{id}/set-main`| POST   | DONE     | YES         | Set photo as main photo |
### Profiles API Resources

All the Profiles API router follows `/api/Profiles/`

| #   | Routers                   | Verbs  | Progress | Is Private | Description                                      |
| --- | ------------------------- | ------ | -------- | ---------- | ------------------------------------------------ |
| 1   | `/api/profiles/{username}`| GET    | DONE     | YES        | Get profile details |
| 2   | `/api/profiles/`| PUT    | DONE     | YES        | Edit profile details |

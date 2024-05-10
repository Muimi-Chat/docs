---
title: Setting Up User Service
description: Guide to Setting Up the User Service Django API
---

**Prerequisites:**
- Docker with Docker Compose
- Clone or download the repository from: [Muimi Chat User Service Repository](https://github.com/Muimi-Chat/user-service)

## Environment Variables

1. In the repository, locate the `.env.example` file.
2. Review the comments and make the necessary modifications.
3. Save the file as `.env` once you have finished editing.

**Key Points:**
- Generate a `DJANGO_SECRET_KEY` using the following command:
  ```bash
  python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'
  ```
- On slower PCs, the startup time for Redis/PostgreSQL database might be longer. Adjust the `STARTUP_DELAY` variable accordingly based on your hardware specifications.
- For development purposes, it's generally safe to keep all variables, except `DJANGO_SECRET_KEY`, as their default values. However, for production, it's essential to change the default username and password.

## Running the Project

To run the project, simply execute the following command:
```bash
docker-compose up
```
Your server will be running at the port number you specified.

By following these steps, you'll be able to set up the User Service Django API for Muimi Chat.
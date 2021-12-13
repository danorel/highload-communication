# Sandbox

## Roadmap

Required plan:
- [x] Design the architecture.
- [x] Configure docker-compose infrastructure: add services, message queues, database and cache.
- [x] Design minimal database entities and relations between them.
- [x] Implement read/write basic API.
- [x] Implement read API with cache. (Using Cache Aside pattern)
- [ ] Implement write API with message queue. (Using RPC pattern)
- [x] Add CI: Github Actions.
- [x] Test, lint application.

Optional plan:
- [ ] Implement request imitator.
- [ ] Add versioning to application.
- [ ] Add development/production configuration for apps.
- [ ] Deploy application.
- [ ] Migrate from docker-compose to kubernetes.
- [ ] Configure CD with AWS.

## Installation

```
git clone git@github.com:danorel/highload-communication.git
```

### Prerequisites
- [node.js](https://heynode.com/tutorial/install-nodejs-locally-nvm/) =16.13.0
- [@microsoft/rush](https://rushjs.io/pages/intro/get_started/)

### Development

#### Environment

Create `.env` file in the **root** of the application:

```
NODE_ENV=development

PORTAL_READ_PORT=5001
PORTAL_WRITE_PORT=5002
PORTAL_DATABASE_PORT=5003

MONGO_PORT=27017
MONGO_HOST=mongo
MONGO_DATABASE=communication

MONGO_EXPRESS_PORT=8081
MONGO_EXPRESS_USERNAME=danorel
MONGO_EXPRESS_PASSWORD=1234567890

REDIS_PORT=6379
REDIS_COMMANDER_PORT=8082

RABBIT_MQ_API_PORT=5672
RABBIT_MQ_UI_PORT=15672
```

#### Run

Split run in **two separate terminal windows**:

```
docker-compose -f docker-compose.development.yaml up
```

And only after that:

```
rush update --full
rush start
```

Last command will prompt which subprojects to launch and will run selected scripts. Choose next ones:
- For **api** projects: `start:watch`
- For **libs** projects: `build:watch`

### Production

Not ready yet...

#### Environment

Create `.env` file in the **root** of the application:

```
NODE_ENV=production

PORTAL_READ_PORT=5001
PORTAL_WRITE_PORT=5002
PORTAL_DATABASE_PORT=5003

MONGO_PORT=27017
MONGO_HOST=mongo
MONGO_USERNAME=danorel
MONGO_PASSWORD=1234567890
MONGO_DATABASE=communication

MONGO_EXPRESS_PORT=8081
MONGO_EXPRESS_USERNAME=danorel
MONGO_EXPRESS_PASSWORD=1234567890

REDIS_PORT=6379
REDIS_USERNAME=danorel
REDIS_PASSWORD=1234567890

REDIS_COMMANDER_PORT=8082

RABBIT_MQ_API_PORT=5672
RABBIT_MQ_UI_PORT=15672
```
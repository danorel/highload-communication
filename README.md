# Sandbox

Currently, it is not completed due to the complexity of the task.

Required plan:
- [x] Design the architecture.
- [x] Configure docker-compose infrastructure: add services, message queues, database and cache.
- [x] Design minimal database entities and relations between them.
- [x] Implement read/write basic API.
- [x] Implement read API with cache. (Using Cache Aside pattern)
- [ ] Implement write API with message queue. (Using RPC pattern)
- [ ] Implement request imitator.
- [ ] Test/deploy application.

Optional plan:
- [ ] Migrate from docker-compose to kubernetes.

## Development

### Environment

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

## Production

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

Not ready yet...
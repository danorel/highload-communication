# Sandbox

Currently, it is not completed due to the complexity of the task.

Required plan:
- [x] Design the architecture.
- [x] Configure docker-compose infrastructure: add services, message queues, database and cache.
- [ ] Design minimal database entities and relations between them.
- [ ] Implement read API with cache. (Using Cache Aside pattern)
- [ ] Implement write API with message queue. (Using RPC pattern)
- [ ] Implement request imitator.
- [ ] Test/deploy application.

Optional plan:
- [ ] Migrate from docker-compose to kubernetes.

## Development

### Environment

```
PORTAL_READ_PORT=5001
PORTAL_WRITE_PORT=5002

MONGO_PORT=27017
MONGO_DATABASE=communication
MONGO_ROOT_USERNAME=danorel
MONGO_ROOT_PASSWORD=1234567890

REDIS_PORT=6379
REDIS_USERNAME=danorel
REDIS_PASSWORD=1234567890

RABBIT_MQ_API_PORT=5672
RABBIT_MQ_UI_PORT=15672
```

## Production

Not ready yet...
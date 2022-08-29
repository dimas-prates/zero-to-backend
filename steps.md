# setup
- eslint
- typescript
- containerized
- update .ignore files
- create repository (git)
# Start
- Add dev deps (types, ts-node-dev, autocannon)
- Add prod deps (express, pg)
- Add scripts for dev/test/build/start
- env
 - knowledge env vars
 - app env vars
 - db env vars
 - docker env vars
# base (code)
- server
   - graceful shutdown
   - let it crash
- app
   - external middleware use
   - segregation route files
- health Check
  - add exclusive route for it
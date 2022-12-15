podman run -it \
            --init \
            --cap-add=SYS_ADMIN \
            -v ./index.js:/home/pptruser/index.js \
            -v ./screen.js:/home/pptruser/screen.js \
            -v ./output:/home/pptruser/output \
            --rm ghcr.io/puppeteer/puppeteer:latest node ./screen.js
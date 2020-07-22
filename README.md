# app-scanner

An example app that can be used to log keyboard events sent via Honeywell scanner to an OakOS unit

## Running locally

Make sure that you are running the right version of Node locally. You will find the required version in the `.nvmrc` file
If you are not running the same version (`node -v`) then you will need to run

``` bash
nvm install $(cat .nvmrc)
npm run rebuild
```

### Now you can run locally

``` bash
npm run dev
```

### Running in a docker container

``` bash
xhost +
docker-compose up --build
```

### Shutting down the  docker container

``` bash
docker-compose down
```

## Example Installation

``` json
{
  "services": [
    {
      "image": "index.docker.io/oaklabs/app-scanner:latest",
      "environment": {
        "TZ": "America/Los_Angeles"
      }
    }
  ]
}

```

This snippet results can be seen in the application logs on the OakOS Dashboard

## Scanner Used in this POC

In this POC I used a Honeywell 3320g Hand scanner. The documentation for this scanner can be found [here](https://www.honeywellaidc.com/en/-/media/en/files-public/technical-publications/barcode-scanners/vuquest-3320g/3320-ug.pdf)

While developing this POC I first configured the scanner by scanning the USB Keyboard (PC) barcode from page 9 of the above PDF document.

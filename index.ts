// import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// let config = new pulumi.Config();
// let name = config.require("name");
const static_site = new gcp.storage.Bucket("34234lnglnadjfgrk", {
    cors: [{
        maxAgeSeconds: 3600,
        methods: [
            "GET",
            "HEAD",
            "PUT",
            "POST",
            "DELETE",
        ],
        origins: ["http://image-store.com"],
        responseHeaders: ["*"],
    }],
    forceDestroy: true,
    location: "EU",
    uniformBucketLevelAccess: true,
    website: {
        mainPageSuffix: "index.html",
        notFoundPage: "404.html",
    },
});

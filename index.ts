import * as gcp from "@pulumi/gcp";
import { decryptSops } from 'sops-wrapper';

const data = decryptSops('./secrets/develop/main.enc.json')

const static_site = new gcp.storage.Bucket(data.bucketName, {
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

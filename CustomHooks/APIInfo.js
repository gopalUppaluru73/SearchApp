import axios from 'axios';

export default axios.create({
    baseURL: "https://api.yelp.com/v3",
    headers: {
        authorization: "Bearer S3vFO6ppTGC2_sVNw-qiECHdC0swX4hUeX8Lh1jtk9eULIG556jbKt6f_k2PXXn3HwGV6DAfUgxIPKPsi7AzWvO68UhifFMqyuB6doiZwD_caAN5ofSCUExFZCYbZnYx"
    }
});


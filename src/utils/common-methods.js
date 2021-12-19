const commonMethods = {
    methods: {
        imgUrl(url) {
            return process.env.VUE_APP_API_URL + url;
        },
        handleNewLine(str) {
            //return str ? str.toString().replaceAll("\\n", "<br>") : "";
            return str ? str.toString().replace(/(\n|\r\n)/g, "<br>") : "";
        }
    }
};

export {commonMethods};
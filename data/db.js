const faker = require("faker/locale/zh_CN");
function customData() {
    let _customData = [];
    for(let i = 0; i < 100; i++) {
        _customData.push({
            "name": faker.name.firstName()+ faker.name.lastName(),
            "address": faker.address.streetAddress() + faker.address.city(),
            "phone": faker.phone.phoneNumberFormat()
        })
    }

    return {data: _customData};
}

module.exports = customData;

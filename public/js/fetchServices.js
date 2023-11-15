// var requestURL = 'api/membership/tiers';
var requestURL = 'http://localhost:3001/api/membership/tiers';

const init = async () => {
    const response = await fetch(requestURL)
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });
    console.log(response);
};

init();
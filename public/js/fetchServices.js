const init = async () => {
    const response = await fetch('/api/membership/tiers');
    return response;
};

init();
const removeSalesTransactionById = ({ removeSalesTransactionUseCase }) => {
  return async function get(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referer"];
      }
      const toView = {
        ...info,
        source,
        id: httpRequest.params.id, // when id is passed
      };

      const removeSalesTransactions = await removeSalesTransactionUseCase(
        toView
      );
      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { removeSalesTransactions },
      };
    } catch (e) {
      // TODO: Error logging
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = removeSalesTransactionById;

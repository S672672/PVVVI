
const paginate = (page = 1, limit = 10, totalItems) => {
    const totalPages = Math.ceil(totalItems / limit);
    const offset = (page - 1) * limit;
  
    return {
      page,
      limit,
      totalItems,
      totalPages,
      offset,
    };
  };
  
  module.exports = {
    paginate,
  };
  
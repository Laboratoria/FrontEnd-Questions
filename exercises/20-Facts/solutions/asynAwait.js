const { getFact } = require("./getFact");

async function factStats(n) {
  const factPromises = [];
  for (let i = 0; i < n; i++) {
    factPromises.push(getFact())
  }

    const result = {
      newestFact: {
        createdAt: null,
        fact: ''
      },
      largestFact: {
        createdAt: null,
        fact: ''
      },
      summary: {
        total: 0,
        facts: []
      }
    }

    try {
      const facts = await Promise.all(factPromises);
      result.summary.total = facts.length;
      result.summary.facts = facts;

      facts.forEach(fact => {
        const factDate = new Date(fact.createdAt)
        if (fact.text.length > result.largestFact.fact.length) {
          result.largestFact.fact = fact.text
          result.largestFact.createdAt = factDate
        }
        if (!result.newestFact.createdAt || result.newestFact.createdAt.getTime() < factDate.getTime()) {
          result.newestFact.fact = fact.text
          result.newestFact.createdAt = factDate
        }
      })

      return result

    } catch (error) {
      throw new Error('Algo salio y no pude trater los facts')
    }
}

module.exports = {
  factStats
};

class ControversialResult:
    def __init__(self, is_controversial, controversial_query, summary):
        self.is_controversial = is_controversial
        self.controversial_query = controversial_query
        self.summary = summary

    def to_dict(self):
        return {
            "isControversial": self.is_controversial,
            "controversialQuery": self.controversial_query,
            "summary": self.summary
        }
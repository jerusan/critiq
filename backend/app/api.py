from flask import Blueprint, jsonify, request
from .server import process_chat

api_bp = Blueprint("api", __name__)

@api_bp.route("/process-chat", methods=["GET"])
def api_process_chat():
    query = request.args.get('query')

    if not query:
        return jsonify({"error": "Query parameter missing"}), 400

    result = """The concept of gender has evolved beyond the traditional binary of male and female, and there are now numerous gender identities recognized. While it is difficult to provide an exact number of genders, there are at least 72 gender identities listed in one source. Some of these gender identities include:

1. Agender: A person who does not identify with or experience any gender.
2. Abimegender: Associated with being profound, deep, and infinite.
3. Genderfluid: A person whose gender varies over time.
4. Demigender: An individual with partial traits of one gender and the rest of the other gender.
5. Domgender: An individual with multiple genders, with one dominating over the rest.
6. Demiflux: A combination of multiple genders with some genders static, while others fluctuate in intensity.

It is essential to acknowledge that this list is not exhaustive, and the understanding of gender identity is continually evolving. Gender identity is a personal sense of oneself, and individuals may identify with different genders or have their gender identities change over time."""

    # result = process_chat(query)
    # print(result)
    return jsonify({"summary": result})

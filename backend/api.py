from flask import Blueprint, jsonify, request
from .server import get_opposing_view_query, get_opposing_view_summary

api_bp = Blueprint("api", __name__)

@api_bp.route("/process-chat", methods=["GET"])
def api_process_chat():
    query = request.args.get('query')

    if not query:
        return jsonify({"error": "Query parameter missing"}), 400

    # controversialQuery = get_opposing_view_query(query)
    # if controversialQuery == "Not a controversial topic":
    #     return jsonify({"summary": ""})
    # else:
    #     result = get_opposing_view_summary(controversialQuery)

    result = """To improve the UI/UX design of the Critiq dialog box in the image provided, here are a few suggestions:\n\n1. Hierarchical structure: Organize the content in a manner that clearly reflects the hierarchy of information. For example, the title "Controversial Query" should be the most prominent, so consider increasing its size and boldness.\n\n2. Color Contrast and Legibility: Increase the contrast between the text and background to make the information easier to read. The grey text on a dark background could be hard to read for some users, so changing the text color to white or a lighter shade could improve readability.\n\n3. Whitespace: Introduce more whitespace (padding and margins) around text blocks to reduce clutter and improve legibility. This can make the dialog box feel less crowded and more organized.\n\n4. Font consistency: Ensure font sizes and styles are consistent for similar types of content. Reserve bold fonts for headings and standard weights for body text.\n\n5. Clear sections: Differentiate sections more clearly by using spacing, dividers, or subtle changes in background color for list items.\n\n6. Interactive elements: If the "Delve into Counterpoints" is a button, make it stand out as a call-to-action (CTA) with a more pronounced button design, perhaps with a more contrasting color that fits the overall color scheme.\n\n7. Responsive design: Make sure the dialog box dimensions and text sizes are responsive to different screen sizes for optimal viewing on various devices.\n\n8"""
    return jsonify({
        "controversialQuery": "Controversial Query",
        "summary": result
        })
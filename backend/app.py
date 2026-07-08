from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)

# ================= Home =================
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "AI Internship Backend is running successfully 🚀"
    })

# ================= MongoDB Atlas Connection =================
client = MongoClient(
    "mongodb+srv://anbudharsiniisv_db_user:anbu1921@cluster0.agqf2my.mongodb.net/internship_portal?retryWrites=true&w=majority&appName=Cluster0"
)

db = client["internship_portal"]

students = db["students"]
internships = db["internships"]
applications = db["applications"]


# ================= Register Student =================
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    students.insert_one(data)

    return jsonify({
        "message": "Student Registered Successfully!"
    })


# ================= View Students =================
@app.route("/students", methods=["GET"])
def get_students():
    data = []

    for student in students.find():
        student["_id"] = str(student["_id"])
        data.append(student)

    return jsonify(data)


# ================= View Internships =================
@app.route("/internships", methods=["GET"])
def get_internships():
    data = []

    for internship in internships.find():
        internship["_id"] = str(internship["_id"])
        data.append(internship)

    return jsonify(data)


# ================= Apply Internship =================
@app.route("/apply", methods=["POST"])
def apply():
    data = request.get_json()

    existing = applications.find_one({
        "studentEmail": data["studentEmail"],
        "title": data["title"]
    })

    if existing:
        return jsonify({
            "message": "You have already applied for this internship!"
        }), 400

    data["status"] = "Applied"

    applications.insert_one(data)

    return jsonify({
        "message": "🎉 Application Submitted Successfully!"
    })


# ================= View Applications =================
@app.route("/applications", methods=["GET"])
def get_applications():
    data = []

    for application in applications.find():
        application["_id"] = str(application["_id"])
        data.append(application)

    return jsonify(data)


# ================= Dashboard Statistics =================
@app.route("/stats", methods=["GET"])
def get_stats():

    student_count = students.count_documents({})
    internship_count = internships.count_documents({})
    application_count = applications.count_documents({})

    return jsonify({
        "students": student_count,
        "internships": internship_count,
        "applications": application_count
    })


# ================= Run Flask =================
if __name__ == "__main__":
    app.run(debug=True)
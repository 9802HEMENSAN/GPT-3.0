from flask import Flask,request,jsonify,redirect,render_template
import json
from datetime import datetime
app = Flask(__name__)
#lists of posts
posts=[]

@app.route("/create", methods = ["GET","POST"])
def PostData():
    if request.method=="POST" : 
        data = request.get_json()
        post= {
         "title" : data.get("title"),
         "description" : data.get("description"),
          "date" : datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S")
        }
        print(post)
        posts.append(post)
        savePosts()
        return jsonify(post)

    return render_template("new_post.html")
 
@app.route("/posts", methods=["GET"])
def getPosts(): 
    return jsonify(posts)

@app.route("/delete/<int:index>", methods=["DELETE"])
def deletePost(index):
   if request.method=="DELETE" :
     if index < 0 or index >= len(posts): 
       return jsonify({"error" : "invalid index"})
   
   posts.pop(index)
   savePosts()
   return jsonify({"message" : "post deleted successfully"})
 
def savePosts(): 
    with open("posts.json", "w") as file: 
        json.dump(posts, file)

def loadPosts(): 
    try : 
        with open("posts.json", "r") as file: 
            posts_data = json.load(file)
            posts.extend(posts_data)
    except FileNotFoundError : 
        pass 

if __name__ == "__main__":
    loadPosts()
    app.run(debug=True)
//2) ¿Cuantos registros arrojó el comando count?
db.grades.count()
// 800

//3) Encuentra todas las calificaciones del estudiante con el id 4
db.grades.find({"student_id" : 4})
//28.656451042441, 5.244452510818443, 87.89071881934647, 27.29006335059361

//4) ¿Cuántos registros hay de tipo exam?
db.grades.find({"type" : "exam"}).count()
//200

//5) ¿Cuántos registros hay de tipo homework?
db.grades.find({"type" : "homework"}).count()
//400

//6) ¿Cuántos registros hay de tipo quiz?
db.grades.find({"type" : "quiz"}).count()
//200

//7) Elimina todas las calificaciones del estudiante con el id numero 3
db.grades.remove({"student_id" : 3})
//WriteResult({ "nRemoved" : 4 })

//8) ¿Qué estudiantes obtuvieron 75.29561445722392 en una tarea ?
db.grades.find({$and:[{"type" : "homework"},{"score" : 75.29561445722392}]})
//El estudiante con el ID número 9.
//{ "_id" : ObjectId("50906d7fa3c412bb040eb59e"), "student_id" : 9, "type" : "homework", "score" : 75.29561445722392 }

//9) Actualiza las calificaciones del registro con el uuid 50906d7fa3c412bb040eb591 por 100
db.grades.update({"_id" : ObjectId("50906d7fa3c412bb040eb591")},{$set:{"score":100}})
//WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })

//10) A qué estudiante pertenece esta calificación.
db.grades.find({"_id":ObjectId("50906d7fa3c412bb040eb591")})
//Al estudiante con el id número 6
//{ "_id" : ObjectId("50906d7fa3c412bb040eb591"), "student_id" : 6, "type" : "homework", "score" : 100 }

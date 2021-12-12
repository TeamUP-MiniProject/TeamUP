exports.AddHobby = (req, res, next) => {
    res.send('<form action="/admin/group-it/add-hobby" method="POST"><input type="text"  name="hobby_name"> <button type="submit"></button></input> </form>');
}
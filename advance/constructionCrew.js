function constructionCrew(obj) {
    if(obj.dizziness) {
        obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
        obj.dizziness = false;
    }
    return obj
}
constructionCrew({
    weight: Number,
    experience: Number,
    levelOfHydrated: Number,
    dizziness: Boolean 
  })
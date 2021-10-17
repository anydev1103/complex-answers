function Employee(title) {
    this.title = title;
}

Employee.prototype.setTitle = function(title) {
    this.title = title;
}
Employee.prototype.getTitle = function() {
    return this.title;
}

function Engineer(title, isManager) {
    this.isManager = isManager;
    this.title = title;
}

//Set inheritance, Engineer is sub of Employee
Engineer.prototype = Object.create(Employee.prototype)
Engineer.prototype.constructor = Engineer


Engineer.prototype.setIsManager = function(isManager) {
    this.isManager = isManager;
}
Engineer.prototype.getIsManager = function() {
    return this.isManager;
}




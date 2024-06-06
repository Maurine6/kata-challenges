# understanding classes and attributes.
class Car:
    def __init__(self,model,mileage):
        self.model = model
        self.mileage = mileage

car1 = Car("Mercedes", 15000)
car2 = Car('Honda', 3000)

car1.mileage += 2300
print('model:',car1.model,'mileage:',car1.mileage)
print('model:',car2.model,'mileage:',car2.mileage)


#class instance methods
# example create a class user and an instance method chnge password

class User:
    def __init__(self,name,email, password):
        self.name = name
        self.email = email
        self. password = password

    def change_password(self,password):
        self.password = password
        print('Your password was changed to:', self.password)

user1 = User('Maurine', 'mo@gmail.com', 12345) 
print(user1.name,'Email:',user1.email, 'password:',user1.password)
user2 = User('Mark','m@gmail.com',123456)   
print(user2.name,'Email:',user2.email, 'password:',user2.password)        
user2.change_password("markooo")
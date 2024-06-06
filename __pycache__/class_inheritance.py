class User:
    def __init__(self,name,email, password):
        self.name = name
        self.email = email
        self. password = password

    def change_password(self,password):
        self.password = password
        print('Your password was changed to:', self.password)

class BankUser(User):
    def __init__(self,name,email,password,balance):
        super().__init__(name,email,password)
        self.balance = balance

user1 = BankUser('Arnold','a@gmail.com','yututu',90000)  
print(user1.name, 'Email:',user1.email,'password:',user1.password,'your balance:',user1.balance) 
user1.change_password("123456")     

                


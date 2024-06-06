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

    def new_balance(self, balance):
        self.balance = balance + 20
        print('Your current balance is:',self.balance)   

user1 = BankUser('Arnold','a@gmail.com','yututu',90000)  
print(user1.name, 'Email:',user1.email,'password:',user1.password,'your balance:',user1.balance) 
user1.change_password("123456")  
user1.new_balance(60000)   

                


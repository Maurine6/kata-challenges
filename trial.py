from abc, import ABC, abstractmethod

class Dog:
    def __init__(self,name,color):
        self.__name =name
        self.color = color 

    def get_name(self):
        return self.__name 

    def set_name(self, type):
        self.__name = self.__name + type           


class Pen:
    def __init__(self,model, ink):
        self.__model = model
        self.ink = ink

    def get_model(self):
        return self.__model

    


    def set_model(self,description):
        self.__model = self.__model + description 

my_dog = Dog("hm", "no")
my_dog.set_name("german shepherd")
print(my_dog.get_name())  
print(my_dog.color)  

bob = Dog("chiwawa", "black")
bob.set_name("beaggle")
print(bob.get_name())
print(bob.color)

#class Payment:
    #def __init__(self,price):
        # encapsulation
        #self.__final_price = price + price* 1

    #def get_final_price(self):
        #return self.__final_price

    #def set_final_price(self, discount):
        #self.__final_price = self.__final_price * (discount/2)       


#Avocado = Payment(10) 
#Avocado.set_final_price(30)
#print(Avocado.get_final_price())  



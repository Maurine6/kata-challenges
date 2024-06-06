class Car:
    def __init__(self,model,mileage):
        self.model = model
        self.mileage = mileage

car1 = Car("Mercedes", 15000)
car2 = Car('Honda', 3000)
print('model:',car1.model,'mileage:',car1.mileage)
print('model:',car2.model,'mileage:',car2.mileage)
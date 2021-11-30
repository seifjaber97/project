import numpy as np
import sklearn
from sklearn.linear_model import LinearRegression
import pandas as pd
from sklearn import linear_model

dataset = pd.read_csv("OBJ2.csv")
print(dataset.head())

data = dataset.drop("SI_ID", axis=1)
data = data.drop("avg rank", axis=1)
data = data.drop("Sex", axis=1)

print(data.head())

predict = "OBJECT ORIENTED PROGRAMING (2)"

X = np.array(data.drop([predict], 1))
Y = np.array(data[predict])
x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(X, Y, test_size = 0.1)

linear = linear_model.LinearRegression()
linear.fit(X, Y)
#acc = linear.score(x_test, y_test)
#print(acc)

#predictions = linear.predict(x_test)
predictions = linear.predict(X)

for x in range(len(predictions)):
    print(predictions[x], X[x], Y[x])

#for x in range (len(predictions)):
#    print(predictions[x], x_test[x], y_test[x])

np.savetxt("C:/Master/2021-2022_1/SE/project/OBJ2-result.csv", predictions,delimiter=";")
        
    
    
    
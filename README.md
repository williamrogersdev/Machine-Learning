# Machine-Learning Projects 


Working with a wide range of machine learning programs.

Using ml5.js 

Web Cam Capture - Hold Item up in front of web cam and see if it can guess what it is


Machine Learning Notes


Transfer learning

Teachable Machine 
https://teachablemachine.withgoogle.com/

-Attempting to train the teachable machine with own images 
- The machine learning system is not learning anything about the particular objects, it is learning about the exact set of pixels you are showing it 
- Easy to confuse these models if a person is standing in the background ect. 



How Does it Work 


Image Classification with Mobilnet 

Pretrained Model 

1000 image classes
Running a neural network 
-neural network has layers which info is passed into each layer 
Using a confusion which is an image process, similar to photoshop 
 doing all of these processes to reduce the image down to something smaller multiple times 
Features are converted and sent to a labels and probabilities 
-trying to get to the features(lots of numbers )
Trained on a database called image net with millions of images 
We send an image into mobile net and model net give us back label and a probability 

How do we retrain this model 

In order to retain we need go inside of it and retrain it 
Using build a built in feature of the ml5 library called Feature Extractor 
-stop at feature extractor
Make version of the model where we put our own training images in and stop at the feature extraor 
Retrain the model to map the features to our own labels 
We are eseantlying breaking down an image into a smaller set of more manageable features 


import easyocr

# Initialize the reader
reader = easyocr.Reader(['ro']) # Change 'en' to ['ro'] for Romanian

# Read the image and extract text
result = reader.readtext('/home/devlin/Documents/mine/CI.png') 

# Print the extracted text
for bbox, text, prob in result:
    print(f"Text: {text}, Confidence: {prob:.2f}")
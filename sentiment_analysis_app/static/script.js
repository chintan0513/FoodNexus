function analyzeSentiment() {
    var text = document.getElementById('textInput').value;
    // Perform AJAX request to the backend for sentiment analysis
    // Display the sentiment analysis result in the #result div
    // Example:
    var resultDiv = document.getElementById('result');
    resultDiv.innerHTML = 'Sentiment: Positive';
}

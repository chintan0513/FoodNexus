
# sentiment_analysis_app/models.py

from django.db import models

class SentimentAnalysisResult(models.Model):
    text = models.TextField()
    sentiment = models.CharField(max_length=20)
    created_at = models.DateTimeField(auto_now_add=True)

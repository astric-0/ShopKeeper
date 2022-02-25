from django.db import models

class Section(models.Model):
    Color = models.CharField(max_length=10, null=True, blank=True)
    Series = models.CharField(max_length=5, default='P')
    BoxId = models.CharField(max_length=15, primary_key=True)
    ThreadCount = models.IntegerField(null=False)
    BoxNumber = models.IntegerField(null=False)
    Batch = models.IntegerField(null=False)

    def __str__(self):
        return f'{self.BoxId} {self.ThreadCount}'
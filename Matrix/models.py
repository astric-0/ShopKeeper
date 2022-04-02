from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver

class Section(models.Model):
    Color = models.CharField(max_length=10, null=True, blank=True)
    Series = models.CharField(max_length=5, default='P')
    BoxId = models.CharField(max_length=15, primary_key=True)
    ThreadCount = models.IntegerField(null=False)
    BoxNumber = models.IntegerField(null=False)
    Batch = models.IntegerField(null=False)

    def __str__(self):
        return f'{self.BoxId} {self.ThreadCount}'

class WebPageMode(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    Mode = models.CharField(max_length=10, default='light')  

    def __str__(self):
        return self.user.username + "  " + self.Mode

@receiver(post_save, sender=User)
def Create_WebPageMode(sender, instance, created, **kwargs):
    if created:
        WebPageMode.objects.create(user = instance)

@receiver(post_save, sender=User)
def Save_WebPageMode(sender, instance, **kwargs):
    instance.webpagemode.save()

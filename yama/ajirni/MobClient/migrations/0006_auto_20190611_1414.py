# Generated by Django 2.2.2 on 2019-06-11 11:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MobClient', '0005_auto_20190606_0956'),
    ]

    operations = [
        migrations.AlterField(
            model_name='items',
            name='no_killometers',
            field=models.IntegerField(blank=True),
        ),
        migrations.AlterField(
            model_name='items',
            name='quantity',
            field=models.IntegerField(blank=True),
        ),
    ]

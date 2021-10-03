# Generated by Django 3.2.7 on 2021-10-03 14:20

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender', models.CharField(max_length=32)),
                ('receiver', models.CharField(max_length=32)),
                ('subject', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='MessageFormat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('new_message', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.message')),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=32, unique=True)),
                ('password', models.CharField(max_length=256)),
                ('messages', models.ManyToManyField(through='api.MessageFormat', to='api.Message')),
            ],
        ),
        migrations.AddField(
            model_name='messageformat',
            name='user_referred',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user'),
        ),
    ]

from cassandra.cqlengine import columns
from rest_framework.serializers import ModelSerializer, Serializer
from rest_framework import serializers
from .models import Post

class NoteSerializer(ModelSerializer):
    serializer_field_mapping = {
        columns.UUID: serializers.CharField,
        columns.Text: serializers.CharField
    }
    class Meta:
        model = Post
        fields = ('id','body')
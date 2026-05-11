from django.urls import path

from .views import GuideViewSet


guide_list = GuideViewSet.as_view({
    'post': 'create'
})

guide_update = GuideViewSet.as_view({
    'put': 'update',
    'patch': 'partial_update'
})

guide_detail = GuideViewSet.as_view({
    'get': 'retrieve'
})

guide_delete = GuideViewSet.as_view({
    'delete': 'destroy'
})

guide_all = GuideViewSet.as_view({
    'get': 'list'
})


urlpatterns = [

    path(
        'crear-guia/',
        guide_list,
        name='crear-guia'
    ),

    path(
        'actualizar-guia/<int:pk>/',
        guide_update,
        name='actualizar-guia'
    ),

    path(
        'obtener-guia/<int:pk>/',
        guide_detail,
        name='obtener-guia'
    ),

    path(
        'eliminar-guia/<int:pk>/',
        guide_delete,
        name='eliminar-guia'
    ),

    path(
        'guias/',
        guide_all,
        name='guias'
    ),
]
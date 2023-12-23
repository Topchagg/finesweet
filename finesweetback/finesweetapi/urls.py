from django.urls import path, include


from .views import *

# I can work with DEFAULT/SIMPLE routers but I prefer this style than routers and yes I know that is bad...

urlpatterns = [
    path('services-get-all', ServicesViewSet.as_view({'get':'list'})),
    path('services-create', ServicesViewSet.as_view({'post':'create'})),
    path('services-get-one/<slug:slug>', ServicesViewSet.as_view({'get':'retrieve'})),
    path('services-destroy/<int:pk>', ServicesViewSet.as_view({'delete': 'destroy'})),
    path('services-full-update/<int:pk>', ServicesViewSet.as_view({'put':'update'})),

    path('frequently-get-all', FrequentlyQuestionViewSet.as_view({'get':'list'})),
    path('frequently-create', FrequentlyQuestionViewSet.as_view({'post':'create'})),
    path('frequently-destroy/<int:pk>', FrequentlyQuestionViewSet.as_view({'delete':'destroy'})),
    path('frequently-update/<int:pk>', FrequentlyQuestionViewSet.as_view({'put':'update'})),

    path('employee-get-all', EmployeeViewSet.as_view({'get':'list'})),
    path('employee-create', EmployeeViewSet.as_view({'post':'create'})),
    path('employee-destroy/<int:pk>', EmployeeViewSet.as_view({'delete': 'destroy'})),
    path('employee-full-update/<int:pk>', ServicesViewSet.as_view({'put':'update'})),

    path('contact-get-all', ContactViewSet.as_view({'get':'list'})),
    path('contact-destroy/<int:pk>', ContactViewSet.as_view({'delete':'destroy'})),
    path('contact-request-create', ContactViewSet.as_view({'post':'create'})),

    path('get-all-brands', BrandsViewSet.as_view({'get':'list'})),
    path('brand-destroy/<int:pk>', BrandsViewSet.as_view({'delete':'destroy'})),
    path('create-brand', BrandsViewSet.as_view({'post':'create'}))
]

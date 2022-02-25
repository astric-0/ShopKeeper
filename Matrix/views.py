from django.shortcuts import render
from .models import Section

def Tester(request):
    if request.POST.get('save_box')=='true':
        section = Section(Series=request.POST.get('series'), BoxId=request.POST['box_id'], Batch=request.POST['batch'], BoxNumber=request.POST['row'], ThreadCount=request.POST['thread_count'])
        if section.save():
            print('*******SAVED*******')
    
    elif request.POST.get('edit_set')=='true':
        boxid = request.POST['edit_box_id']
        box = Section.objects.get(BoxId=boxid)
        if box:
            box.ThreadCount = request.POST.get('edit_count')
            if box.save():
                print('*******EDITED*******')
            else:
                print('*******COULD NOT EDIT*******')
        else: 
            print('*******NOT FOUND*******')
    
    elif request.POST.get('save')=='true':
        boxid = request.POST['sold_box_id']
        box = Section.objects.get(BoxId=boxid)
        if box:
            box.ThreadCount -= int(request.POST.get('sold'))
            if box.save():
                print('*******SOLD*******')
            else:
                print('*******COULD NOT SAVE*******')
        else: 
            print('*******NOT FOUND*******')

    alertboxes = list(Section.objects.filter(ThreadCount__lte=8).order_by('Batch'))
    return render(request, 'Matrix/BASIC.html',{'title':'T E S T__P A G E', 'alertboxes':alertboxes})

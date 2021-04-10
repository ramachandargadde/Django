from reportlab.pdfgen import canvas
from django.http import FileResponse
import io
def export_pdf(request):
    buffer = io.BytesIO()
    p = canvas.Canvas(buffer)
    orders = request.user.customer.order_set.all()
    for order in orders:
        order1=[order.product,order.note,order.date_created,order.status]
        p.drawString(100,100,order1)
        p.showPage()
        p.save()


    buffer.seek(0)

    return FileResponse(buffer, as_attachment=True, filename='hello.pdf')